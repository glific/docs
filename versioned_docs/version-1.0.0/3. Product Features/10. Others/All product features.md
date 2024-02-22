## Send and receive messages

At the most basic level you can send and receive messages to your user community.

## Rich media attachments

You can use stickers, images, videos(youtube link or attached in message), document, audio. You would need to host the media files on platforms like Google Cloud Storage and then provide link as an attachment on Glific.

## Record and send audio messages

You can upload an audio file on GCS and add the link in a message or you can also directly record the message from the Glific chat interface and send to the users.

## Multiple languages

You can enable different regional languages and plan the message content to support those languages. See More

## Flows - conversation builder

1. [**Design Conversations**](https://glific.github.io/docs/docs/Onboarding/Glific%20Onboarding%20Toolkit) - You can set up messages to be sent to the users and plan the next messages based on their responses. You can also take a lot of other actions based on users&#39; responses as mentioned below.
1. [**Send message to a staff**](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Send%20a%20staff%20member%20a%20message) - If you feel that your staff needs to be notified of something while a contact is in the middle of the flow.
1. **Terminate flow** - if a user is in a flow and you want to send a manual message you can terminate the active flow
1. [**Label a message**](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Label%20the%20incoming%20message) - if you want to track some metrics, labels are your good friends. For example you want to see how many started a flow and how many completed the flow, you can label the first message as `Flow stared` and last message at `Flow completed`.
1. [**Wait for the next message**](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Wait%20for%20the%20contact%20to%20respond) - you can add pauses in between messages to make it look like a more natural conversation.
1. [**Split conversation paths**](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Split%20By/Custom%20Expression) - you can send different contacts down different conversation paths based on multiple conditions for example, the collection they belong to and an option they selected.
1. [**Webhooks**](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Call%20a%20webhook) - use these when you want to interact with an external system to pull or push data from Glific.

## Block contacts

If you don&#39;t want to see a particular contact in the chat list maybe because they sent inappropriate messages or spammed the chatbot, you can block and remove them from the list.

## Simulator

The simulator can help you test the conversation flows without spending additional costs of testing it on your actual phones.

## [Advanced Search](https://glific.github.io/docs/docs/Product%20Features/Searches/#advanced-search)

As you interact with a large number of contacts you might want to search them for more than 1 parameter such as if there&#39;s a label assigned to the message, if some team member is managing it, or just looking up within a date range. You can also save this search for quick reference later on. Saving this search allows you to grow that search result over time. For example you want to view all the messages labeled `Flow complete` and belong to the `Jharkhand` collection.

## [HSM templates](https://glific.github.io/docs/docs/Product%20Features/Templates)

WhatsApp allows you to nudge your users if they have not messaged the chatbot within 24-hours. For this you need to get an HSM template message approved before you can send it out. Glific offers the interface to submit this message for approval. You can use these templates as a single message or within a flow. Templates also allow you to use buttons to redirect the user to a website link or call you at the press of a button.

## [Interactive messages](https://glific.github.io/docs/docs/Product%20Features/Interactive%20Messages)

Messages can also have clickable actions for upto 10 options. For upto 3 options you can use buttons, but for more than 3 and upto 10 you need to use the list option. These are a good replacement when you want to get users to respond to move the conversation flow forward.

## [Time based scheduling (triggers)](https://glific.github.io/docs/docs/Product%20Features/Triggers)

When you want to send a flow or message to a user at a specific time, you can schedule those messages in advance. You can simply set up a trigger and forget about it 😄. This scheduled messages can be recurring periodically or can be sent one time - upto your program.

## [Default messaging](https://glific.github.io/docs/docs/Product%20Features/Others/New%20Contact,%20Default%20flow%20Out%20of%20office%20hours%20notifications/#configure-default-flow)

There will be cases when your contacts will not be in any flows you&#39;ve defined on Glific or they might send a message that doesn&#39;t match any keywords you&#39;ve planned for. In those cases, this default flow will get triggers so that you have the opportunity to bring the user into one of your desired conversation flows.

## [Staff management (roles &amp; permissions)](https://glific.github.io/docs/docs/Product%20Features/Others/Staff%20Management)

As Glific is a cloud based program, you and your team can work together from anywhere. Your team members can create their own Glific login and use the platform. Different team members can be given different access.

## [Collections](https://glific.github.io/docs/docs/Product%20Features/Others/Collections)

Whenever you want to categorise your users based on a certain data point such as their location, grade, language preference, or any other category specific to your program, you can put them in a collection. This allows you to send targeted messages to all the contacts in a collection at once. You can move contacts in and out of the collections as per your use case.

## [Optin Management](https://glific.github.io/docs/docs/Product%20Features/Flows/Others/Configure%20Optin%20&%20Optout%20preferences%20in%20Glific/)

WhatsApp requires you to get legit optin from the contacts else you run into the chance of getting your number blocked. You can save their optin status within glific and send them nudge messages. Or if the contacts no longer want to receive a message you can opt them out.

## [Contact history](https://glific.github.io/docs/docs/Product%20Features/Others/Contact%20Profile%20&%20History/)

You can view how &amp; when a contact moved from one flow to the other, how &amp; when they were added or removed to a collection or any other contact related activity on Glific. You can check this information in the contact profile along with all the other contact related information.

## [Multiple profiles](https://glific.github.io/docs/docs/Product%20Features/Others/Contact%20Profile%20&%20History/#multiple-contact-profiles-with-same-phone-number)

With this feature, one contact(i.e. WhatsApp number), can have multiple user profiles associated with the contact. For example, 2 or 3 children in a household using the same phone to access the chatbot. In the default case, one contact will have one profile. If you have used this feature and users have created multiple profiles, then they can easily switch profiles to continue from their last interaction. When a contact starts using the chatbot, in case multiple profiles exist, you can ask the user to select the right profile. The data collection happens at a contact level and not at a profile level - this is something we still need to figure out.

## [Maps visualisation](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Wait%20for%20the%20contact%20to%20respond/#15-has-location)

You can use the default location feature of WhatsApp to get the user&#39;s locations and then plot them on the map. This can enable you to check the density of an occurrence in a region for ex, if you want to see how many people reported potholes or garbage in their location.

## [A/B Testing](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Split%20By/Random%20Chance%20for%20AB%20Tests)

Glific NGOs have reached a stage where they want to run tests with their flows and find the most optimum method to deliver their content and engage with users. Managing A/B tests right now isn’t easy and so we’re building the right support for A/B tests.

## Speech Recognition

When using voices is crucial for your programs, you can use speech recognition features to get users to respond with a voice note and understanding their responses. Glific uses external integrations to accomplish this hence not readily available. If you share your usecase with us, we can help you with this.

## [Notifications](https://glific.github.io/docs/docs/Product%20Features/Notifications)

Glific provides warnings and critical alerts whenever errors and issues arise such as message not sent, template message got rejected etc… You can access notifications from the sidebar.

# Integrations

## [Google Sheets](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Link%20Google%20Sheets)

Many education orgs need to continuously create new content for the chat flows while keeping the same conversation experience. So while the content order remains same, the content itself changes over time. This often needs a standard Glific flow where the content can be pulled from a google sheet which stores the dynamic content. This way you won&#39;t have to make new Glific flows each time you have to deliver content.

## [Access data with BigQuery](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/BigQuery%20Setup%20and%20link%20with%20Glific)

All the conversation program data resides in BigQuery which is an additional tool required when using Glific. Glific only stores the data for a couple of months and then removes it. So your data only resides on BigQuery in the long run.

## [NLP with Dialogflow](https://glific.github.io/docs/docs/Integrations/Dialogflow%20for%20Natural%20Language%20Processing/)

If you have a use case there your users are typing a wide variety of unexpected responses that can&#39;t be handled by the options in Glific, then you can also use Dialogflow&#39;s NLP feature to respond to your users. You can group those unexpected responses by categories and prepare the responses for those categories. Dialogflow will fuzzy match the message and send relevant response to the contact. To use NLP you must ensure that your chatbot is being used at a sufficiently large scale like with more than 3-5K contacts.

## [Exotel for calling](https://glific.github.io/docs/docs/Integrations/Setting%20up%20Exotel/)

If you want to include a functionality to call the user or receive a call from them at some point in the conversation flow on WhatsApp, then you can use Glific&#39;s Exotel integration to take relevant action for example based on a call, redirect them to the optin or any other flow or update their contact information.

## CRM or Tracker

A tracker aims to collect information about the individual users as per their journey on the chatbot. The tracker stores all information such as basic demographics, content they access, response to quizzes, points earned, progress or advancement across levels, most active time, drop off point and time and more. You can adapt the tracker as per your program design. As a result of the tracker, all of these will be possible:

- Personalized learning journeys and recommendations
- Learner’s profile even for shared contacts
- Send report cards
- Manage points and badges
- Improved analytics

What information would you want to collect from the users? - that would be the first step to an effective tracker. The needs of every NGO in terms of data points would be different, can the tracker structure be determined based on the information collected during the contact registration.

# Upcoming features

## Internal dashboard

So far NGOs have been using BigQuery and Data Studio to build their reporting dashboards but not all NGOs find that very convenient to use. Basic reports within the Glific interface are preferred. Now with enough evidence and report templates, we will be building a dashboard within Glific interface.

## Template reports advancement

We will work on advancements in data collected through conversation flows. This upgrade will allow Glific to collect more information in an automated way so as to reduce human error and chance of generating rich data dashboards.
