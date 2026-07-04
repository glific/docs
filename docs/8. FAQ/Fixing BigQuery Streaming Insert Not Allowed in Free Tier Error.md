<h3>
 <table>
  <tr>
    <td><b> 3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Intermediate </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: July 2026</b></td>
  </tr>
</table>
</h3>

# Fixing "Access Denied: BigQuery Streaming Insert Not Allowed in Free Tier" Error

Glific writes every message and contact update into your BigQuery account in real time, using what Google calls a "streaming insert". If your Google Cloud project's billing account is not fully set up, these writes fail and this error shows up in your BigQuery sync.

## Why this happens

BigQuery has a generous free tier for storage and queries (refer [BigQuery Setup and link with Glific](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/BigQuery%20Setup%20and%20link%20with%20Glific/) to know more), but streaming inserts are a separate, billable feature. Google requires a project to have an active, upgraded billing account before it will accept streaming inserts - even if your actual usage stays well within the free tier limits. This error usually means one of the following:

- No billing account is linked to the Google Cloud project connected to Glific, or
- The project is still on Google Cloud's 90-day free trial, which has not been upgraded to a full billing account.

## How to fix this

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and sign in with the account used to set up BigQuery for your organization.
2. Select the same project that is linked to Glific for BigQuery (refer [BigQuery Setup and link with Glific](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/BigQuery%20Setup%20and%20link%20with%20Glific/) if you're not sure which project this is).
3. From the left navigation menu, select Billing.
4. If you see an option to Upgrade, select it and complete the steps to convert your free trial to a full Cloud Billing account. If no billing account is linked at all, select Link a billing account and either choose an existing one or create a new one.
5. Add a valid payment method when prompted, and confirm.

Once billing is upgraded/linked, streaming inserts into BigQuery will resume automatically. You don't need to change anything in Glific - Glific will keep sending data as soon as your Google Cloud project accepts it.

Please Note : Upgrading or linking a billing account does not mean you'll be charged immediately. BigQuery's free tier (10GB storage and 1TB of queries per month) still applies - you'll only be billed if you exceed those limits, and Google notifies you before that happens.
