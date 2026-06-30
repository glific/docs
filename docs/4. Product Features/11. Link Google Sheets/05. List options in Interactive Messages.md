<h3>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>


### Using G-sheets to Dynamically fetch button/list options in Interactive Messages.
This approach helps the user reduce the effort required to create flows containing multiple interactive messages by automatically fetching the message body and options from a Google Sheet.

It is particularly useful in scenarios such as:
<ul>
  <li> When multiple interactive messages (for example, more than 4) are used within a chatbot flow.</li>
  <li> When managing nested options (e.g., District → Block).</li>
</ul>

The example below demonstrates a sample setup for both approaches, which can be customized or adapted as per the specific use case.


<img width="314" height="428" alt="Screenshot 2025-10-09 at 2 31 36 PM" src="https://github.com/user-attachments/assets/d67a4e0b-0cc4-4a14-8305-b4dca3959889" />

<ol>
  <li>In the nested drill-down approach, once the end user selects a district, the corresponding blocks under that district are displayed. </li>
  <li>In the second approach, based on the topic selected (Science or General Knowledge), a short quiz with two questions is presented to the end user. The message body and options for both questions are dynamically fetched from the G-Sheet. </li>
</ol>

#### Steps to configure this setup:
Step 1 - Setup the g-sheet, following this format. Here’s the link to the <a href="https://docs.google.com/spreadsheets/d/16sG1O2DvLj_7z3m_uM-jGt_YPIiuoB_YXXCKdMeNbT8/edit?usp=sharing">sample sheet</a>

For quiz:

<img width="634" height="351" alt="Screenshot 2025-10-09 at 2 33 37 PM" src="https://github.com/user-attachments/assets/59331b13-3eb3-4a0d-92f3-15858dcbb2f7" />

To fetch district options from g-sheets– 

<img width="633" height="348" alt="Screenshot 2025-10-09 at 2 34 14 PM" src="https://github.com/user-attachments/assets/7e3d4d6e-da91-41b8-9efc-eb7adb46fa2e" />

To fetch corresponding blocks, associated with the district—

<img width="633" height="335" alt="Screenshot 2025-10-09 at 2 34 49 PM" src="https://github.com/user-attachments/assets/f846b2b0-e148-4195-8d80-140b91fc3ca4" />

Step 2: Integrate Google Sheet with Glific. For detailed steps on how this is done, please follow <a href="https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Link%20Google%20Sheets/">this</a> link.

Step 3: Create the following interactive messages from `Quick tools` Pane:

For quiz - 

<img width="633" height="388" alt="Screenshot 2025-10-09 at 2 37 02 PM" src="https://github.com/user-attachments/assets/72bd2e3d-19d3-47d9-9fef-ad20969a72c1" />

For district options - 

<img width="590" height="356" alt="Screenshot 2025-10-09 at 2 37 23 PM" src="https://github.com/user-attachments/assets/bd286914-aeb3-4b39-b887-66a72038b998" />

For block options - 

<img width="634" height="382" alt="Screenshot 2025-10-09 at 2 38 03 PM" src="https://github.com/user-attachments/assets/46051406-4806-4bcf-8357-646240a213f8" />

Since the options will be fetched dynamically from the G-Sheet, placeholder (dummy) values can be added as options while creating the interactive message(s).

Step4: Configure the flow, following the below mentioned requirements. Here’s the <a href="https://drive.google.com/file/d/14jFXXPkTiDKuzP3hVTXjYFeL0DKQ0dES/view?usp=drive_link">sample flow </a>

For quiz - 

<ul>
  <li>Since there are two topics, each containing two questions, a counter is initialized with a distinct starting value for each topic. After the first question is sent, the counter increments to fetch the next (and final) question along with its options.</li>
  <li> Once the counter is updated, a check is performed to confirm whether both questions have been delivered. If yes, the flow ends with a closing message; if not, the second question is sent.</li>
  <li>For the quiz, a single interactive message can be used, with its message body and options dynamically fetched from the linked G-Sheet.</li>
 
  <img width="383" height="391" alt="Screenshot 2025-10-09 at 2 43 25 PM" src="https://github.com/user-attachments/assets/13b7048f-6b1d-4741-bb22-d70efe8f18c0" />

  
  
  <img width="355" height="398" alt="Screenshot 2025-10-09 at 2 43 44 PM" src="https://github.com/user-attachments/assets/59ba324d-ba05-4a06-891c-5cd2db1c58a1" />
  
  <li> The <code>Use Dynamic Fields</code> option is enabled, and since only two options need to be shown to the user, the Read Option Limit is set to 2. Corresponding IDs and variable names are configured to fetch the option values from the correct columns in the linked Google Sheet. </li>
</ul>

For Nested drill down – 

<ul>
  <li> In the nested drill-down setup, district options are fetched from the linked G-Sheet. Based on the district selected by the end user, the corresponding blocks are presented as a second list for selection.</li>
 
  <img width="400" height="383" alt="Screenshot 2025-10-09 at 2 46 25 PM" src="https://github.com/user-attachments/assets/4c60745c-0b44-4a00-89c5-ab9b2aa68986" />

  
  
  <img width="396" height="372" alt="Screenshot 2025-10-09 at 2 47 01 PM" src="https://github.com/user-attachments/assets/202c3127-9e68-40f6-ba9b-7e7a15c825fd" />
  
  <li> Sheet1 contains the district options, while Sheet2 contains the block options. Both sheets are configured separately within the flow.</li>
  <li>To ensure only the blocks associated with the selected district are displayed, the key value in sheet2 is set to <code>@results.district_captured</code>, which stores the district chosen by the end user. In the sheet containing the block values, each district serves as the key for its corresponding block list. </li>
  <li>Since only the options are being fetched from the linked G-Sheet, two interactive messages with a static message body are used.</li>
  
  <img width="458" height="505" alt="Screenshot 2025-10-09 at 2 51 24 PM" src="https://github.com/user-attachments/assets/3b480b94-3865-4d1c-be01-9df01f5fc674" />
  
  <li> Since the number of blocks varies for each district, an additional column in the linked sheet stores the total number of options for every district. This allows the user to control the Read Options Limit and display only the necessary options. It also reduces effort when more options (up to 10) are added to the list, as only the value of <code>@results.sheet2.length</code> needs to be updated followed by syncing the sheet. </li>
</ul>


