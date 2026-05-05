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
    return [f for f in files if f.endswith(".md") and os.path.exists(f)]


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
    filename = os.path.basename(file_path)
    resp = requests.post(
        f"{BASE_URL}/datasets/{DATASET_ID}/document/create-by-file",
        headers=HEADERS,
        files={"file": (filename, content.encode("utf-8"), "text/markdown")},
        data={
            "data": '{"indexing_technique":"high_quality","process_rule":{"mode":"automatic"}}'
        }
    )
    resp.raise_for_status()
    print(f"  ✅ Created: {filename}")


def update_document(doc_id, file_path, content):
    filename = os.path.basename(file_path)
    resp = requests.post(
        f"{BASE_URL}/datasets/{DATASET_ID}/documents/{doc_id}/update-by-file",
        headers=HEADERS,
        files={"file": (filename, content.encode("utf-8"), "text/markdown")},
        data={
            "data": '{"indexing_technique":"high_quality","process_rule":{"mode":"automatic"}}'
        }
    )
    resp.raise_for_status()
    print(f"  🔄 Updated: {filename}")


def main():
    changed_files = get_changed_md_files()

    if not changed_files:
        print("No markdown files changed. Nothing to sync.")
        return

    print(f"Found {len(changed_files)} changed file(s). Fetching existing Dify docs...")
    existing_docs = get_existing_documents()

    for file_path in changed_files:
        filename = os.path.basename(file_path)
        print(f"\nProcessing: {file_path}")

        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        if filename in existing_docs:
            update_document(existing_docs[filename], file_path, content)
        else:
            create_document(file_path, content)

    print("\n✅ Sync complete!")


if __name__ == "__main__":
    main()
