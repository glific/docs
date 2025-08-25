> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**


## What's the reason for setting the GCS bucket to public?

The `GCS (Google Cloud Storage)` bucket is set to public to make it easier to share files—like PDFs, images, videos etc — without needing user authentication. 

This is especially useful when files need to be accessed directly through chatbot flows or shared publicly with partners and beneficiaries.
When a file is public, anyone with the link can open or download it without logging in. This avoids errors or delays caused by restricted access.

Example:

If an NGO’s bot sends a PDF through a the chatbot, and the file is stored in a public bucket, the end user can simply tap the link and view it — no login or permission required.
Note: Only non-sensitive, public-facing files should be stored in the public bucket. Private or personal data should always be stored securely with proper access controls.

## Is it possible to keep my GCS bucket private instead of making it public?

It's perfectly fine to keep your `GCS bucket` private as long as you don't plan to share any content publicly.

However, if you need to send media as attachments (instead of sharing via links), the bucket would need to be public for access.

Also, just to clarify — `BigQuery tables` and `GCS buckets` serve different purposes.

- BigQuery tables are used to store structured data (like databases).
- GCS buckets are used to store media files such as images, audio, and documents.


