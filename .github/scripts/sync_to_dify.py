import os
import subprocess
import requests

API_KEY = os.environ["DIFY_API_KEY"]
DATASET_ID = os.environ["DIFY_DATASET_ID"]
BASE_URL = os.environ.get("DIFY_BASE_URL", "https://api.dify.ai/v1").rstrip("/")

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
}


def get_changed_md_files():
    result = subprocess.run(
        ["git", "diff", "--name-only", "HEAD~1", "HEAD"],
        capture_output=True, text=True
    )
    files = result.stdout.strip().splitlines()
    return [
        f for f in files
        if f.endswith(".md") and f.startswith("docs/") and os.path.exists(f)
    ]


def get_all_md_files():
    files = []
    for root, _, names in os.walk("docs"):
        for n in names:
            if n.endswith(".md"):
                files.append(os.path.join(root, n))
    return sorted(files)


def to_doc_name(file_path):
    # Use the full repo-relative path so files with the same basename
    # in different folders don't overwrite each other in Dify.
    return file_path.replace("/", "__")


def get_existing_documents():
    docs = {}
    page = 1
    while True:
        resp = requests.get(
            f"{BASE_URL}/datasets/{DATASET_ID}/documents",
            headers=HEADERS,
            params={"page": page, "limit": 100}
        )
        resp.raise_for_status()
        data = resp.json()
        for doc in data.get("data", []):
            docs[doc["name"]] = doc["id"]
        if not data.get("has_more"):
            break
        page += 1
    return docs


def create_document(file_path, content):
    doc_name = to_doc_name(file_path)
    resp = requests.post(
        f"{BASE_URL}/datasets/{DATASET_ID}/document/create-by-file",
        headers=HEADERS,
        files={"file": (doc_name, content.encode("utf-8"), "text/markdown")},
        data={
            "data": '{"indexing_technique":"high_quality","process_rule":{"mode":"automatic"}}'
        }
    )
    resp.raise_for_status()
    print(f"  ✅ Created: {doc_name}")


def update_document(doc_id, file_path, content):
    doc_name = to_doc_name(file_path)
    resp = requests.post(
        f"{BASE_URL}/datasets/{DATASET_ID}/documents/{doc_id}/update-by-file",
        headers=HEADERS,
        files={"file": (doc_name, content.encode("utf-8"), "text/markdown")},
        data={
            "data": '{"indexing_technique":"high_quality","process_rule":{"mode":"automatic"}}'
        }
    )
    resp.raise_for_status()
    print(f"  🔄 Updated: {doc_name}")


def main():
    event = os.environ.get("GITHUB_EVENT_NAME", "")
    if event == "workflow_dispatch":
        print("Manual run: syncing ALL markdown files under docs/")
        changed_files = get_all_md_files()
    else:
        changed_files = get_changed_md_files()

    if not changed_files:
        print("No markdown files changed. Nothing to sync.")
        return

    print(f"Found {len(changed_files)} file(s) to sync. Fetching existing Dify docs...")
    existing_docs = get_existing_documents()

    failures = []
    for file_path in changed_files:
        doc_name = to_doc_name(file_path)
        print(f"\nProcessing: {file_path}")

        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()

            if doc_name in existing_docs:
                update_document(existing_docs[doc_name], file_path, content)
            else:
                create_document(file_path, content)
        except Exception as e:
            print(f"  ❌ Failed: {file_path} — {e}")
            failures.append(file_path)

    if failures:
        print(f"\n⚠️  Sync finished with {len(failures)} failure(s): {failures}")
        raise SystemExit(1)

    print("\n✅ Sync complete!")


if __name__ == "__main__":
    main()
