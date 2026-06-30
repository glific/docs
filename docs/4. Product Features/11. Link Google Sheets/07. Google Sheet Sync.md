___
<h3>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Intermediate</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>



### Google Sheet Sync

When content in a linked Google Sheet is updated, Glific keeps the data in sync using both manual and automatic synchronization.

### Sync Options

* **Manual Sync:** Click the **Sync** button to immediately fetch the latest content from the linked Google Sheet.
* **Automatic Sync:** Google Sheets configured in **Read Mode** are automatically synced every **24 hours**.
* Automatic synchronization runs at approximately **5:30 AM IST**.

### If Sync Fails

If a sync operation is unsuccessful:

* Glific continues to use the **previously synced data**.
* Existing chatbot flows continue to function without interruption.

## Notes

* **Write Mode** supports writing up to **30 columns** in a single operation.
* When using **dates as lookup keys** in Read Mode, ensure they follow the supported date format (`DD/MM/YYYY`).
* If your Google Sheet contains blank cells between values, use **Split by Expression** where applicable to correctly process the data.
