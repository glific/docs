<img width="588" height="486" alt="Screenshot 2026-07-15 at 6 42 09 PM" src="https://github.com/user-attachments/assets/cf102a7a-9ca9-43f2-8614-f284a7ba43ce" />### **5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

## User Guide: WhatsApp Groups Automation Features: Basic
This document provides details on using basic features of syncing all the WhatsApp Groups, sending messages and media to the groups from the Glific interface, creating collections or groups of groups to send targetted messages to a large number of groups and scheduling messages to the collections in advance. 

### Phone connection status and reconnecting 
The WhatsApp Phones page now shows each managed phone's live connection status, and a phone that gets logged out  can now be reconnected directly from Glific by scanning a QR code.

#### Viewing Connection Status
1. Go to `WhatsApp Groups` → `WhatsApp Phones`.
2. Each row shows the phone number, an optional label, its current Status, and when it was Last checked.
3. Click Sync statuses (top right) at any time to refresh the status of all listed phones on demand.

<img width="" height="273" alt="Screenshot 2026-07-15 at 6 30 19 PM" src="https://github.com/user-attachments/assets/ef26f4ab-0f19-4a4e-8464-14be718f9e0a" />

WhatsApp Phones — status list
1. Sync statuses — manually refreshes the connection status of every phone in the list.
2. Status badge — Active (green) means the phone is connected and sending/receiving normally; Qr-Screen (red) means it has been logged out and needs to be reconnected.
3. Actions — QR icon appears for a disconnected phone; click it to open the reconnect flow.


### Reconnecting a Logged-Out Phone
If a phone shows a Qr-Screen status, it has been logged out of WhatsApp Web (e.g. session expired, phone unlinked). Use this flow instead of going to the Maytapi console.
1. On the WhatsApp Phones page, click the QR icon in the Actions column for the affected phone.
2. The Reconnect dialog opens with a live QR code and instructions.
3. On the phone itself: open WhatsApp → Linked devices → Link a device, then scan the QR code shown in Glific.

<img width="" height="662" alt="Screenshot 2026-07-15 at 6 31 37 PM" src="https://github.com/user-attachments/assets/4115ad3b-a9e3-4295-bc50-f6efe8b0f09c" />

4. Reconnect dialog — QR code to scan
  - QR code — scan this from the phone's WhatsApp → Linked devices → Link a device screen.
  - Status: Qr-Screen — confirms the phone is currently disconnected and waiting to be scanned.
  - Log out & refresh QR — use if the QR code expires, to generate a fresh one.

5. After scanning, the dialog shows a loading state while WhatsApp links the session.

<img width="" height="709" alt="Screenshot 2026-07-15 at 6 32 16 PM" src="https://github.com/user-attachments/assets/ce6ad311-b426-472e-8b64-1e93fc7ebefc" />

6. Reconnect dialog — linking in progress. Once linked, WhatsApp Web loads the phone's chats inside the dialog. 

<img width="" height="622" alt="Screenshot 2026-07-15 at 6 32 59 PM" src="https://github.com/user-attachments/assets/5b2ba614-38f1-4c65-8420-3d8ceec5fcc4" />

7. Reconnect dialog — session linked, chats loaded
8. Back on the WhatsApp Phones page, click Sync statuses to confirm the phone now shows Active. 

<img width="" height="278" alt="Screenshot 2026-07-15 at 6 33 31 PM" src="https://github.com/user-attachments/assets/1e950b06-1123-4e42-bf77-831fc6254bd0" />

- Note: Reconnecting only re-links the WhatsApp Web session for that phone; it does not affect groups, flows, or message history tied to it.

### Group Chats 

1. Shows all the groups and the group chats that the maytapi linked phone number is part of. 
2. Provides an interface to see the chats, group details, and send messages and media to the groups. 

### Create Groups 

Creating a WhatsApp Group
Use this to spin up a new WhatsApp group from Glific and add members in bulk, instead of creating the group manually on WhatsApp first.

<img width="" height="310" alt="Screenshot 2026-07-15 at 6 15 19 PM" src="https://github.com/user-attachments/assets/8bb3f0d6-1c47-4e96-9ec3-4029aba77bd5" />

1. Go to `WhatsApp Groups` → `Group Chats`.
2. Click `New group` (top right of the Groups panel).
3. In the Create WhatsApp group dialog, fill in the fields (see callouts below).

<img width="" height="420" alt="Screenshot 2026-07-15 at 6 16 19 PM" src="https://github.com/user-attachments/assets/fd2343c1-02d9-4cb8-8038-dab26c6fe13d" />

4. Create WhatsApp group dialog
  1. Group name — the name of the WhatsApp group as it will appear on WhatsApp.
  2. Creator phone — the managed phone number that creates the group on WhatsApp; it becomes the group's primary phone in Glific.
  3. Upload File — upload a CSV of members to add to the group. Must include a phone column; a name column is optional.
  4. View Sample — opens a [template Google Sheet](https://docs.google.com/spreadsheets/d/1-oupACzXqNWURa9nUv0rvpLrBNRTMRMN5EG-mY3zCvg/copy) showing the expected CSV format (see below).

5. CSV Template for Bulk Member Import, add the names and phone numbers with the country code this template and export the file as a csv
<img width="" height="264" alt="Screenshot 2026-07-15 at 6 19 01 PM" src="https://github.com/user-attachments/assets/14fd19a6-4c00-4def-8fc0-fd8d39f3efdf" />

5. Create — submits the form and creates the group on WhatsApp with the uploaded members.

### Filtering groups by phone number
When an organization manages multiple WhatsApp numbers, the groups list can get long. Use the Phone Number filter to narrow it down to groups tied to one or more specific numbers.

<img width="" height="316" alt="Screenshot 2026-07-15 at 6 23 37 PM" src="https://github.com/user-attachments/assets/ea0d6e29-3241-4202-8180-56aa172d14f7" />

1. Go to `WhatsApp Groups` → `Group Chats`.
2. In the Groups panel, click the Phone Number dropdown, next to Sync and New group.
3. Check one or more phone numbers from the list.
4. The groups list updates to show only groups linked to the selected number(s).

### Group Collections
1. Group collection is a group of groups. A way to club together with groups. This is to enable sending or scheduling of messages to the bulk of the groups from the single action. 

#### How to create Group Collections
1. Go to Group Collection

<img width="1129" alt="Screenshot 2024-04-16 at 3 27 27 PM" src="https://github.com/glific/docs/assets/141305477/10d30710-c7d2-4c3b-b9f0-b9675bba0c70"/>

3. Go to create collection - give it a name and description 
4. Add the groups to a collection by selecting from the dropdown

<img width="1047" alt="Screenshot 2024-04-16 at 3 28 16 PM" src="https://github.com/glific/docs/assets/141305477/e3368d3f-8c69-4e21-ae86-66b0dade17e8"/>

### Setting a Primary Phone (Collections & Groups) 
When a group or a collection of groups has more than one managed phone connected, only one phone — the primary — is actually used to send messages. Glific now lets you set (and change) that primary phone from the Collections page or from an individual group. 

#### Why use more than one phone per group?
Connecting multiple managed phones to a group (or collection) and being able to switch the primary on demand protects program delivery in two common situations: 
- Avoiding message delays — if the primary number is rate-limited or slow, switching to a healthy secondary keeps broadcasts moving instead of stalling behind one number.
- Avoiding outages from number blocks/suspensions — if Meta blocks or suspends a number, the group isn't stuck waiting on that number to be restored; a different active phone can be promoted to primary immediately to keep messages flowing.

#### Setting a Primary Phone for a Collection

Use this to set one phone as primary across every group in a collection in a single action, instead of updating each group individually.
1. Go to `WhatsApp Groups` → `Collections`.
2. Go inside the collection, then click Set primary phone (top right, next to Add groups).
<img width="" height="442" alt="Screenshot 2026-07-15 at 6 41 54 PM" src="https://github.com/user-attachments/assets/a5f25982-746d-4520-8c9c-f6d24350d4a5" />

3. In the dialog, select a phone from Select a phone and click Apply.
<img width="577" height="492" alt="Screenshot 2026-07-15 at 6 42 22 PM" src="https://github.com/user-attachments/assets/82816d66-4529-4553-8b97-a9c7abbd4d3f" />

4. Apply — confirms the change. The phone becomes primary in every group in the collection where it is an active member; groups where it isn't a member are skipped (and reported, so nothing fails silently).


- Note: If the selected phone isn't a member of a particular group at all, that group's primary phone is left unchanged — it's only updated where the phone is already an active member.
- Note: If a group belongs to more than one collection, whichever collection-level primary-phone action was applied most recently is the one that takes effect for that group.
#### Setting a Primary Phone for a Single Group
The same change can be made at the individual group level, which is useful when you only need to switch one group over — for example, to route around a number that Meta has temporarily blocked.

<img width="" height="389" alt="Screenshot 2026-07-15 at 6 43 28 PM" src="https://github.com/user-attachments/assets/15c39f09-a79a-444b-b1c8-9ddec24fb7ef" />

1. Open the group in Group Chats, click the chevron next to the group name, and choose View group details.
2. In Group Details, open the Phones tab.
3. Click Set as primary next to the phone you want to promote.

<img width="634" height="380" alt="Screenshot 2026-07-15 at 6 44 04 PM" src="https://github.com/user-attachments/assets/e7d74cef-0210-418f-a68c-3443ad63ee8b" />

- Note: Group-level and collection-level changes both write to the same setting — whichever one was applied most recently wins, whether it was set from the group itself or from a collection it belongs to.


### Sending Messages 
1. Send message to the group via group chat
<img width="1038" alt="Screenshot 2024-04-16 at 3 28 59 PM" src="https://github.com/glific/docs/assets/141305477/d972cf1b-1443-43df-b3fd-0119f63464cf" />

2. Send message to a `Collection` by navigating to `Collections` list next to `Groups` window.
 

### Sending Media
#### Prerequisite for sending media:

1. Should have a google cloud storage storage set up [refer here](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS).
2.  Within the google cloud platform, should have a public bucket setup [refer here](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS#step-4-create-a-storage-bucket)
3.  Upload files to the google cloud storage and generate the links [refer here](https://glific.github.io/docs/docs/Pre%20Onboarding/GCS%20Setup/Upload%20files%20on%20GCS)

### Sending media in a group

1. Sending media to a collection is possible through
2. Go to attach option in the text bar
3. Select the type of media
4. Select enter the google cloud storage media url
5. Click ok
6. Click on send button 

<img width="1051" alt="Screenshot 2024-04-16 at 4 26 48 PM" src="https://github.com/glific/docs/assets/141305477/57e72b41-cf08-4103-96ec-0b98a4d2b889" />

### Sending media to a collection  
Follow the same steps as above under the `Groups Collection` menu in the `Group Chats` page

<img width="1058" alt="Screenshot 2024-04-16 at 4 28 01 PM" src="https://github.com/glific/docs/assets/141305477/7e1db214-baa8-41b3-9efb-7912906b1779"/>

### Scheduling Messages and Media

1. Messages and media can be scheduled in advance.
2. A flow having only one message or one media can be scheduled. (a flow with multiple messages or media cannot be scheduled for groups)
3. Multiple such flows can be scheduled.

#### Scheduling Messages
1. Go to `Flows` and Create a flow, which contains just `send contact a message` node. 
<img width="1053" alt="Screenshot 2024-04-16 at 4 30 07 PM" src="https://github.com/glific/docs/assets/141305477/afd42691-ae36-4256-9081-99e97f79adc5" />

2. Publish the flow
3. Create a groups collection
4. Go to `Triggers` menu under `Quick Tools`
5. Select `Create`
6. Choose the flow with one message from the drop down, and enter other details regarding the date range, and time.
7. Select `WhatsApp Groups`
8. Select the collection of groups to send the message to
9. Click save

<img width="653" alt="Screenshot 2024-04-16 at 4 31 14 PM" src="https://github.com/glific/docs/assets/141305477/99bf5651-985d-4a2e-a243-cdcf89a72887" />


### Video Showcase
<iframe width="560" height="315" src="https://www.youtube.com/embed/RdYJTBmSXYs?si=r1lCTEq2eO18ZEXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
