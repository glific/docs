> ### **2 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

## Handling re-responses on the interactive messages

> **Flagged feature — available on request**  
This feature is disabled by default. Review the behaviour described below and, if it fits your use-case, ask the Glific team to enable it for your organisation.  
Request access by emailing [support@glific.org](mailto:support@glific.org) or posting “Enable the feature to handle interactive-message re-response” in the **#ngo-support** Discord channel.

Interactive messages used in a flow, can remain accessible (upon scrolling up) in the chat history. In the above screenshot it can be seen that the options “Yes” and “No” are still clickable if a contact scrolls up in their chat.  

Sometimes contacts have a tendency to click on previous interactive messages. This could be because of following reasons 
1. Contact clicked a wrong option in the first go
2. Contact wants to explore the other options

<img width="619" height="465" alt="Screenshot 2025-07-11 at 11 31 45 AM" src="https://github.com/user-attachments/assets/87acb953-3f4c-4b1b-a2da-df5e5358dec2"/>

By default, clicking the previously received interactive message  does not take the contact back to the conversation thread from the previous message, instead the system just records the button press as the response for the presently expected answer/input. 

With the new release, it is now possible for the orgs to enable the functionality, such that clicking on the previous interactive messages takes the contact back and into the pathway programmed for the response to that particular response.

### How this works

For a flow The user can scroll up in their WhatsApp chat and select another option from the previously received interactive messages. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/NB-wDsYsm_Q?si=rrTx55KzCaII9YGQ&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

PS: Turn on the captions on the video and listen with ear phones for best clarity on the audio.

As the contact is in the middle of a flow, the contact can select or re-select options from other previous interactive messages and be routed directly into the pathway of the selected response. 

### Limitations
This feature handles re-response to interactive messages only within the same flow. Which means this will not function as expected under the following conditions 

**1. When the flow is completed for a contact:** In cases where a contact completes a flow. Which means the contact is not in the middle of a flow and there are no active flows for the contact. In such cases, the previously received interactive messages would still be available on scrolling up in the WhatsApp interface, but the response to those messages will not generate the desired response of starting the conversation from that point in the flow. 

**2. When the flow is expired:** The flow expires after 5 days. Which means, that the Glific system stops expecting response from a contact after a period of 5 days of inactivity. This entails the feature will not work as expected after 5 days of inactivity from a contact. 

**3. When the contact is a child flow:** In case there is "enter another flow" node used, such a flow is called parent flow. When the contact moves from a parent flow to child flow, the active flow for the contact becomes the child flow, so responding to interactive messages from the parent flow will not work as expected. 

**4. Infinite Loop-y behaviour:** If a contact selects/ re-selects options from the same interactive message more than 4 times, then something called as an “infinite loop” is detected and all the flows are killed. This is an FYI, a user is not likely to re-select options more than 3 times back to back. 


### Things to note

1. This feature may not be suitable for orgs who create flows used for quizzing, and implemented gamification based on delivery of points. (unless the org is able to adjust for contacts going down multiple paths).
2. Since this feature enables the contact to freely navigate the flow, which means that a contact journey may not be linear, and therefore it can have impact on the way flow level actions such as
- Add to a collection: if choosing a path adds the contact to one of the collections, and knowing that the contacts can go into multiple paths multiple times, this could lead to the contact being in multiple collections
- Update a contact: Similarly if choosing a certain option enables updating a contact, then it would be important for the flow designer to consider that the contact can navigate between multiple options and design accordingly.
