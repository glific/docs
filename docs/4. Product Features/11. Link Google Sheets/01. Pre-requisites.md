<h3>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>


### Overview

Google Sheets integration allows Glific to read data from or write data to a Google Sheet during a flow. 
This can be used for storing responses, retrieving dynamic content, managing registrations, scheduling messages, and powering interactive experiences.

### Before You Begin

Ensure the following prerequisites are completed:

### Google Cloud Setup

- [Google Cloud Setup (GCS)](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS) should already be completed.

- Verify that the [Google Sheets API](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS#integrate-google-sheets-api-with-glific) is enabled in your Google Cloud Console project. (search for Google Sheets API and enable it if it’s not already enabled. If enabled, it will show as Manage.)

<img width="627" height="194" alt="image" src="https://github.com/user-attachments/assets/712100a2-c1ab-4f90-8045-6cb8f1f986a5" />


### Service Account Access

To protect beneficiary data and avoid exposing sheets publicly, it is recommended to use a Service Account instead of making sheets publicly accessible.
Open the Google Sheet which needs to be connected to the flows and follow the below steps:

1) Click Share.

2) Add the Service Account email (available in the JSON credentials file). If your GCS and BQ is already configured in Glific just go to Glific Account >> left panel >> GCS >> Copy the email and add it to the Google Sheet. 
If not please check this [documentation](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS/#step-5-create-service-account--key) to know how to get the Service Account email.

3) Grant one of the following permissions:

 - Viewer – Read-only access
-  Editor – Read and write access
Once access is granted, Glific will use the Service Account permissions when interacting with the sheet.
