> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

**Designing chatbots is an iterative process, and with every launch or pilot, you learn new things and make changes. But if you are launching your chatbot for the first time with your users, here are 12 quick things you need to cross check,to ensure that you have checked in all basic things for your Bot. It shouldn't take you more than 10 minutes to ensure everything is in place.**


| Check to be done | Why it is important |
| -------- | ------- |
| Consent is collected at the beginning of the user journey on the chatbot, and their response is saved in the Contact profile  | The first message that a user receives upon joining the bot should be a welcome message followed by a consent message. Here are a few guidelines for designing your consent message: <ul> <li>Clearly mention the purpose of the bot (if needed- name of the organization/ program too)</li><li>Clearly ask the user if they would like to receive messages from the bot (You can provide an interactive message with a "Yes" or 👍🏼 button). </li><li>Users should have an option to opt out. Therefore, add the keyword in the footer through which users can opt out from the bot.</li></ul> Save the user's consent status using the "Update Contact" node, as you won’t be able to send messages to the user unless their opt-in is obtained and saved. |
| Key information (e.g., name, city, etc.) is reconfirmed with the user and saved in the Contact profile | Any important user information collected during flows, such as Name, Language, Training Group, City, etc., that will be used in the future to define the user experience should be saved in the contact profile using the "Update Contact" node. Since this information will be reused and may influence conversations, it is a good practice to reconfirm it with the user before saving.  |
| Answers are captured immediately after the question is asked | A Question node should always be followed by a "Wait for Response" node to capture user responses and proceed effectively. Otherwise, the flow may confuse the user or fail to progress properly. |
| User is hitting no dead ends in the flow   | Ensure that the user does not encounter any dead ends in the bot, unless you intentionally want to end the flow at that point. This is especially important for interactive messages—if a user types something other than the options provided, the flow should not end for them. In such cases, connect the "Others" option to a node that informs the user about what is expected and redirects them back to the main question. Then, wait for their response to ensure the flow can proceed smoothly. |
| Chatbot-initiated flows always start with HSM messages | Since you cannot determine how many of your users are within the session window, it is recommended that all chatbot-initiated flows start with an HSM message. This is also why you would encounter a warning on Glific platfprm when attempting to set a flow trigger where the first message is not an HSM message. |
| Proper nomenclature is consistently used throughout | Use appropriate names for Flows, Keywords, Contact variables, Result variables, Collections and labels to make it easy to refer them in the future. |
| Content is translated in all required languages  | If the bot is in multiple languages, do ensure all nodes (including interactive messages) are translated |
| Translations are included in the Wait for Response nodes | If the bot supports multiple languages, the "Wait for Response" node following an interactive message should include the translated options as well. Otherwise, the interactive messages will only work in the default language and not in other languages.  |
| Collections are created wherever needed to group users efficiently | Create collections wherever there is a need to engage repeatedly with a group of users sharing certain common traits (or sometimes not). Collections are typically formed based on factors like region, program, age, course selection, etc. |
| Labels are added wherever data needs to be captured for easier tracking  | While all your messages and user data are stored in BigQuery, adding labels will make it much easier to track and organize the data. Therefore, make sure to add labels while creating flows to enable efficient data usage later. |
| Messages are kept concise, user-friendly, and conversational | It is recommended to keep messages concise and conversational. Use emoticons, bold, or italics where appropriate to add a human touch to the chatbot experience.  |
| Testing- Testing- Testing | Test the chatbot internally with at least 3 to 5 people on mobile phones (not on Glific platform) before sharing it with actual users |
