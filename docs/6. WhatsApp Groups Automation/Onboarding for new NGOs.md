<h3>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: February 2026 </b></td>
  </tr>
</table>
</h3>

### Contents
1. Pre-requisites
2. Set-up
3. Pricing

### Pre-requisites
1. Have an active phone number with a normal WhatsApp account linked to it.
3. Should have the WhatsApp groups created and the phone number should be part of the WhatsApp groups. (it is advised to have the WhatsApp Groups named in an appropriate manner)


### Set-up

#### Step 1: Filling the Glific onboarding form

1. You will receive the Onboarding Form link from the Glific Team. You can refer to this [documentation](https://glific.github.io/docs/docs/Pre%20Onboarding/Onboarding%20Form%20Fill%20Up) for guidance on how to complete the form.

#### Step 2: Linking phone number to Maytapi account


1. Create maytapi account https://console.maytapi.com/login
2. Log in with google id and link a phone number (follow instructions given on Maytapi page)
3. Set up the payment option (~30$ per phone per month) in Maytapi. (For difficulties with the payments reach out directly to Maytapi team on info@maytapi.com keeping your Glific team POC in loop.)
4. Or proceed with free trial which disables the connection in 3 days.
5. Copy of the "product id" and "token" given by Maytapi and then login to Glific account, go to settings >> Maytpayi and paste the product id and token id and click on save.

<img width="1276" alt="Screenshot 2024-11-18 at 3 52 57 PM" src="https://github.com/user-attachments/assets/408e6382-4c49-4a6c-ab51-67c185ff59b7" />




#### Step 3: Connecting Maytapi to Glific 

1. In Maytapi go to webhook and enter the following webhook url `https://api.**ngo-shortcode**.glific.com/maytapi`

Ex, if your glific domain is `www.xyz.glific.com` then use the maytapi webhook url becomes `https://api.xyz.glific.com/maytapi`

<img width="1274" alt="Screenshot 2024-11-18 at 3 59 18 PM" src="https://github.com/user-attachments/assets/a2ff1a6e-b034-47e5-90de-ce2bfe37df44" />

2. This completes the set-up
<img width="1277" alt="Screenshot 2024-11-18 at 3 57 07 PM" src="https://github.com/user-attachments/assets/b76f6415-4ee0-4d56-9555-1304886df5d5" />

You should be able to see the whatsapp groups option in the left panel that the phone number is part of and perform operations like send, receive and schedule message to a group of groups. 

### Step 4: Google Cloud Storage Setup

Google Cloud Storage (GCS) is a cloud service offered by Google Cloud Platform (GCP) that enables you to save and access data—like files, images and large datasets—on Google’s secure servers rather than on your own devices. GCS is used for various tasks, such as storing WhatsApp group media and making data available for reporting or analysis through BigQuery.

Please refer to the detailed instructions on how to configure and set up Google Cloud Storage (GCS) [here:](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS/)


### Pricing
#### MayTapi
1. Free trial for 3 days
2. 30$ per month per phone being linked to Maytapi

#### Messaging 
1. No separate cost for messaging needs to be paid.

#### Limitations 
1. Glific supports only 1 Maytapi linked phone number to be assocaited with the platform at present.

### Video Showcase
<iframe width="560" height="315" src="https://www.youtube.com/embed/RdYJTBmSXYs?si=r1lCTEq2eO18ZEXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
