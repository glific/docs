<h3>
 <table>
  <tr>
    <td><b> 5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Intermediate </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>




# Why is the Google Sheet sync failing?

Google sheets on read mode with auto-sync functionality turned on sync once in every 24 hours. The sync operations happens around 5-6 am IST. If google sheet fails to sync, there is an error condition that is displayed on the google sheets page. 

This document details out the error conditions that make the google sheets sync to fail, and how to solve these situations are explained below. 

## 1. Key can’t be blank 
This happens when the `Key` columns is either empty or contains a few blank cells like shown. To solve this make sure that there are no empty cells in `Key` 
<img width="272" height="442" alt="Screenshot 2025-12-24 at 1 22 59 PM" src="https://github.com/user-attachments/assets/02607de1-ac32-4b46-a578-266742e7d480" />


## 2. Unknown error or empty content 

This happens when the sheet is empty or if the sheet does not contain a `Key` column. If the sheet is not empty and this error condition persists, it is likely because the Google Sheet contains a large amount of data. In such cases, the Google Sheet should be added as a table to the organization's BigQuery, and a serverless webhook should be deployed in Google Cloud Run to query the information when called from Glific. Refer to [this BigQuery and Cloud Run integration guide](https://docs.google.com/document/d/1C5FHnZuK38ukcR88ToVR689CHm6m6ijQ3zMxg6J5MRI/edit?tab=t.0#heading=h.e7zpjexh7kel) for implementation details.

## 3. Key: has already been taken

This happens when the Values in “Key” column is repeated more than once. To solve this ensure that, `Key` column contains only unique values. 

## 4. Sheet not found or inaccessible

This happens if the sheet permissions are not in order. To use “read from google sheet” capability, the google sheet being used should have “anyone with the link” can “view” permission. 

This condition could also occur in case the sheet is deleted from the google drive. 

## 5. Repeated or missing headers
This condition happens when there are headers which are repeated, or if there are any columns where content is present but header is not specified (screenshot shows an example of sheet with missing header)


<img width="494" height="365" alt="Screenshot 2025-12-24 at 1 23 27 PM" src="https://github.com/user-attachments/assets/c3be861c-7281-42b5-aedb-90bd8688553d" />

To solve this, make sure that the headers have unique names. Also, ensure that all columns where content is present have a named header.


## 6. Media Validation Failed

This error occurs when one or more media URLs provided in the Google Sheet do not meet the required validation criteria.

<img width="1466" height="97" alt="image" src="https://github.com/user-attachments/assets/fad98846-25f6-4d19-9f0d-0532f64d3eec" />


Ensure that all media URLs added in the sheet:

- Are valid, non-empty URLs (URI).
- Return a successful HTTP response (2xx status code) within 10 seconds.
- Have a content type that matches the file extension:
  - Images → image/*
  - Videos → video/*
  - Audio → audio/*
  -  Documents → application/*
  - Stickers → image/webp
  
- Are within the supported file size limits:

  - Images: Up to 5 MB
  - Videos: Up to 16 MB
  - Audio: Up to 16 MB
  - Documents: Up to 100 MB
  - Stickers: Up to 100 KB

To solve this review the media URLs in the Google Sheet and ensure they satisfy all the above requirements. Update any invalid, inaccessible, incorrectly formatted, or oversized media files before retrying the import.
