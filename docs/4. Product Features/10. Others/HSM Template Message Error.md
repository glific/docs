<h3>
 <table>
  <tr>
    <td><b>10 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: January 2026</b></td>
  </tr>
</table>
</h3>

## Troubleshooting HSM Message Errors

1)**Template Message is Disabled or not in active session window**:

If any of the end users encounters the below error while sending HSM messages, it could be due any of the two reasons.

a) Template message is not enabled on Gupshup.

<img width="1363" alt="image" src="https://github.com/user-attachments/assets/ee889bfc-adbe-4296-93d5-126224e19625"/>

b) It could also be because of the end-user not opting in (i.e their Consent Status >> Optin not updated)
 
<img width="1393" alt="image" src="https://github.com/user-attachments/assets/f7560b2e-656d-485e-9855-4ddf3070af28" />

2)**User is not valid. Recepient is not a valid WhatsApp User**:

<img width="495" alt="image" src="https://github.com/user-attachments/assets/566e9e97-d141-4011-b7a2-897b4bea81b5"/>

When this error message appears, check if the WhatsApp app is installed and in use on the end user's phone. [Read More](https://glific.github.io/docs/docs/Product%20Features/Flows/Others/Configure%20Optin%20&%20Optout%20preferences%20in%20Glific/)

3)**Message Undeliverable**:

Unable to deliver message  to the end-user and there are various reason on this please read [here](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes/)

4)**Message was not delivered to maintain healthy ecosystem engagement:**

This error occurs when a message is not delivered to maintain healthy ecosystem engagement. Meta applies frequency capping, which limits the number of High-Quality Service Messages (HSMs) a user can receive on WhatsApp within a certain period.

**Key points:**

- The message is dynamically blocked by Meta if the user has reached the capped limit.

- Simply resending the same template immediately may trigger the same error. Wait at least 24 hours before retrying.

- For details on WhatsApp’s frequency capping rules, see [Gupshup Blog: All You Need to Know About WhatsApp Frequency Capping](https://www.gupshup.ai/resources/blog/all-you-need-to-know-about-whatsapp-business-api-frequency-capping/) and check the 
 [Per-User Marketing Template Message Limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

<img width="921" height="717" alt="image" src="https://github.com/user-attachments/assets/e897a19f-1c41-4913-9052-f5025cfc5e7e" />
