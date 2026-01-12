### **5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Solving For Sheet Sync Failures for Large WhatsApp Nudging Campaigns in Glific

### Summary
If you're facing issues with large-scale Google Sheet syncs for nudging via Glific, or any other use case, which requires you to sync specific sheets in an automated way, or sync sheets which have data getting refreshed more than once a day, this Google App Script method provides a scalable and reliable workaround. With proper retries, logging, and notifications built-in, it ensures you reach your audience without manual intervention.

### Context
This is an example taken from Leadership for Equity (LFE). They run nudging campaigns to engage teachers through WhatsApp using the Glific chatbot. These nudges aim to push teachers forward on their Firki Learning Management System (LMS) journey. For example:
Nudging those who haven’t started their courses
- Encouraging teachers who haven’t made progress in a while
- Congratulating those who completed a module
- This campaign has scaled to 15,000+ teachers, requiring frequent (1-3 times/week) and personalized communication based on LMS status. (which means data pull for each teachers’ message to share data specific to observations made them, or journey undertaken by them in the LMS. 

Another example is from Saturday Art Class, which provides grade specific art lesson plans (PDF files). The teachers across Nagaland and more geographies, need to access plans specific to them 
- Grades ranging from Nursery to 8th
- Lesson plan based on language preference 
- Lesson plan in sequence 

The problem arises when the sheets linked in these flows failt to auto-sync, which render these flows useless. The workaround is to manually sync the sheet. 

### The Problem
Glific supports timely auto-syncing (once a day between 6-7am) of Google Sheets. However, with large google sheets, the auto-sync feature becomes unreliable because of the following reasons:
- All the google sheets across the 100+ orgs sync around the same time
- If the sync fails, the re-try mechanism does not kick in (although, progress has been made towards this issue)
- As the size of the sheets increase (length or breadth) the chances of sync completion successfully reduce (possibly due to timeout)

This is in a way a big problem because, when the sheet sync fails, the data from the sheet is first fully erased, and only in the next step the data is synced. Which means, the flows which use these sheet become useful and fail to send any content.

### The Solution: A Google App Script to Handle Syncs

Use the Glific APIs to call sync a sheet specific to your org. 

This helps in the following ways 
- Only your org’s sheets are synced, which reduces the load on the system and therefore the chances of syncing even large sheets is increased.
- There is a re-try mechanism which re-tries at least 3 times in case of a failure, and notifies you via email in case the sheet sync fails.
- You can decide the time and frequency of sheet sync by using time-driven “triggers” which is a AppScript functionality. 

#### How the solution works
- Authenticates with Glific (log-in username & password)
- Reads a list of sheet IDs to sync (from a column where you can add or remove)
- Calls Glific’s syncSheet GraphQL API
- Handles errors, retries up to 3 times, and logs sync status
- Sends email alerts if sync fails after retries (to an email id you can specify)

This script has successfully handled sheets with 14k+ rows and works more reliably than Glific auto-sync function or manual Postman workflows.

### Implementation Steps
#### Step 1: Prepare Your Google Sheet
1. Go to this [link](https://docs.google.com/spreadsheets/d/1t2wDjZ8h5ukEm7ZBmxhTnNKPezFecgcMMSpwZ88kMOc/copy). This should create a copy of the template google sheet with the app script
2. Add the linked google sheet id in the column A of the `SheetList` tab.
3. Any number of `sheet ids` can be added.
4. To get the google sheet ids, click on “edit” icon on the `google sheets`, next to the sheet name.
5. Find the url you’re on and get the numeric part as shown in the screenshot

<img width="633" height="413" alt="Screenshot 2025-07-16 at 10 27 23 PM" src="https://github.com/user-attachments/assets/38ca6958-53c5-4618-88e3-18bff854e030" />

#### Step 2: Set Up the Google App Script
1. Go to Extensions -> App script
2. Go to `Editor` page to see the code
3. Replace the “YOUR-NGO-SHORTCODE” with you the shortcode you use to open your glific’s log-in page, on line 2 and line 28
4. Add your user phone no and password on line 5 and line 6 respectively. This is used to perform the first step of logging in, and retrieving the “access_token” which is used to call “sync a sheet” API or any other Glific API. 
<img width="624" height="328" alt="Screenshot 2025-07-16 at 10 30 19 PM" src="https://github.com/user-attachments/assets/bb6af74f-0e01-4f66-a76d-71a08c7c7e3b" />

5. Replace “YOUR-EMAIL-ID” on line 165 in order to get notifications to your email, incase this function fails.

<img width="616" height="433" alt="Screenshot 2025-07-16 at 10 30 56 PM" src="https://github.com/user-attachments/assets/080087ab-d11f-456e-9390-81aff64dea27" />

6. Run the `syncMultipleSheetsWithRetryAndNotify` function

<img width="622" height="409" alt="Screenshot 2025-07-16 at 10 31 24 PM" src="https://github.com/user-attachments/assets/4e4dbe74-4399-40e9-994d-ace501d702c1" />

7. Provide any requisite permissions that is asked (if any)
8. Confirm the Col B and C are updated in the `SheetList` tab

#### Step 3: Set up a Trigger to Run Daily
1. In the App Script editor, go to Triggers → Add Trigger
2. Choose function `syncMultipleSheetsWithRetryAndNotify`
3. Select type: Time-driven
4. Run daily or multiple times a day depending on your sync schedule

<img width="633" height="360" alt="Screenshot 2025-07-16 at 10 34 56 PM" src="https://github.com/user-attachments/assets/400180c5-e853-4d67-8b89-fe45fab8300d" />

### Benefits
1. Handles large-scale sheet syncs 
2. Works outside of Glific’s autosync limits
3. Automatically retries on failure
4. Logs and notifies team for easy debugging
