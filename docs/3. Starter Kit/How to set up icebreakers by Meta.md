# How to Setup Icebreakers for WhatsApp via Meta Business Manager
Icebreakers are messages or prompts automatically sent to users when they first contact your WhatsApp. Icebreakers draw attention, offer help, or alert the user to a specific action, such as diving into the services offered or starting the registration. Another common issue observed is when users arrive at the chatbot by clicking on a keyword link, and are expected to click “Send” and start the conversation with the chatbot. Having icebreaker phrases that guide the users to start the conversation can help in those cases. 

To set up Icebreakers, you’ll need Admin access to the Meta Business Manager.

## Tips for Effective Icebreakers:
1. Keep it Short: Ensure your Icebreaker messages are concise and to the point.
2. Linked to a Flow: Clicking on the ice-breaker sends that text message, so add the text message as a keyword to the flow you wish to start
3. Use a Friendly Tone: Create a welcoming, inclusive message that encourages interaction.


<img width="622" height="355" alt="Screenshot 2025-09-25 at 1 24 54 PM" src="https://github.com/user-attachments/assets/399ff422-6f23-4aa9-8920-8e5b40fd4f0f" />

## Step-by-Step Guide to Setting Up Icebreakers:
1. Go to the [Meta Business Manager](https://business.facebook.com/latest/settings/business_users?) and log in using your admin credentials. This should open to business page, from there click on Settings.
<img width="674" height="417" alt="Screenshot 2025-09-25 at 1 34 22 PM" src="https://github.com/user-attachments/assets/969a11fe-e647-4058-ae3c-9a043a868eff" />

2. Under Accounts dropdown, click on WhatsApp accounts.
3. Select WhatsApp account you want to setup.
4. Click on the 3 dots next to the account name and click on WhatsApp Manager or Scroll down the page and click on WhatsApp Manager

<img width="673" height="406" alt="Screenshot 2025-09-25 at 1 34 50 PM" src="https://github.com/user-attachments/assets/5241ee24-4668-4206-8e94-6733441762d1" />

5. On the far right of the phone number, you want to configure, click on the Gear Icon Settings.
<img width="676" height="391" alt="Screenshot 2025-09-25 at 1 35 10 PM" src="https://github.com/user-attachments/assets/6cf607a4-e241-442a-ab22-e69f6c9726f7" />

6. Click on Automations.
7. Click on Edit next to the Icebreakers section.
<img width="671" height="396" alt="Screenshot 2025-09-25 at 1 35 55 PM" src="https://github.com/user-attachments/assets/174f3720-0efb-45f1-9fd7-0df852550cd7" />

8. In the Pop-up window, you can do following things:

- Type the desired text for each Icebreaker in the provided field.
- To add multiple Icebreakers, click on Add Icebreaker and type the text in the new field.

Note: You can add only up to 4 Icebreakers.

9. Arrange the order of your Icebreakers by dragging and dropping them to positions 1, 2, 3 and 4 
<img width="673" height="479" alt="Screenshot 2025-09-25 at 1 36 33 PM" src="https://github.com/user-attachments/assets/f5f6fb76-c6d4-49a6-8b6f-f7cd0a88662b" />


10. Click on Save.

## How icebreakers work on your chatbot 
**1. The icebreakers phrases show up on the chat window for those contacts who are coming to the chatbot for the first time only.**

<img width="307" height="582" alt="Screenshot 2025-09-25 at 1 37 02 PM" src="https://github.com/user-attachments/assets/f23022d9-adca-47e6-a39c-9354f38485cd" />

2. The organization must ensure that icebreaker phrases are also added in the keywords section of the flows which need to start when the icebreaker phrases are initiated by the contact. 
<img width="631" height="615" alt="Screenshot 2025-09-25 at 1 38 19 PM" src="https://github.com/user-attachments/assets/0d942751-9d27-4a4d-9480-fcccc32e548d" />

3. Example, in the above screenshot, there are 3 icebreaker phrases. It is possible to add these phrases as the keywords to 3 separate flows, which you might want to initiate when the user clicks these icebreaker phrases. 


4. Icebreakers also show up when the contact has cleared all their chat history with your chatbot.

NOTE 1: It is possible to set that your chatbot always runs a specific flow when a new user starts a chat with your chatbot. This can be set from the New Contact in the Default Flows setting. Explore this documentation to learn more.

NOTE 2: When the new contact flow is set, the flow mentioned in new contact flow starts for the new user regardless of any other keyword they have entered. 
Links to bring a contact to your chatbot.

### Following links can be modified to bring the user to your chatbot

1. To simply bring the contact to your chatbot

`https://api.whatsapp.com/send/?phone=91XXXXXXXXXX` 


Above links can be modified by replacing the number (91 is country code for India, followed by the 10 digit mobile number) with the chatbot number of the org to create links that re-direct the contact to the given number in the link.

2. To bring the contact to your chatbot with a keyword typed.

`https://api.whatsapp.com/send/?phone=91XXXXXXXXXX&text=YYYYY`

Above link can be modified by replacing the number with the chatbot number of the org (explained above) , as well as replacing the text followed towards the end with the keywords that are enabled and linked to the specific flows. 

The links can be converted to QR codes using any online free tools for generating QR codes for any given link.



