
<h3>
  <table>
    <tr>
      <td><b>6 minutes read</b></td>
      <td style={{ paddingLeft: 40 }}><b> Level: Advanced</b></td>
      <td style={{ paddingLeft: 40 }}><b>Last Updated: October 2025</b></td>
    </tr>
  </table>
</h3>


# AI Assistants to Send Files as Attachments

This guide outlines the steps to enable AI assistants in Glific to send file links or attachments along with text responses to user queries.The key is to provide the file search assistant with,
- Well-structured and accessible knowledge base.
- A simple and structured prompt with examples output expected.


### Premise
Before you proceed ahead, [read here](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants) to get the basic understanding of how to use `File Search Assistants` in Glific.


## The Use Case
For organizations that store important information in PDFs or other files, there are often two needs:
- Answer user questions using the content from these files.
- Share the actual file where the information was found.

This setup is useful when users not only want an answer, but also access to the original source. For example, a teacher may ask about a specific lesson plan and also need the PDF for reference.

This guide focuses on enabling assistants to respond with both the answer and the corresponding file, using either:
- A link to the source, or
- A file attachment.


## Example Use Case 
Leadership for Equity has a large repository of compartmentalized lesson plans in the form of PDF files. Based on the subject, grade and lesson plan number as selected or determined earlier in the conversation, a teacher needs to be supported either by answering questions about the lesson plan and/or providing the lesson plan PDF itself.

---

## Delivering File as a Link in the Message
This method shares a clickable link to the file along with the AI Assistant’s response. The screenshot below shows a response where the link to the video file is shared directly in the message.

<img width="467" alt="Screenshot 2025-03-05 at 5 17 03 PM" src="https://github.com/user-attachments/assets/0cda9835-1364-4513-8aad-842f206de5f9" />


### Steps to Deliver File Links in the Messages

#### Step 1: Prepare the Knowledge Base
Curate the knowledge base so that it includes links to the relevant files, along with brief descriptions indicating the type of information each file contains.
- Ensure the files added in the knowledge base are universally accessible.
- Write the prompt and include a few examples of how the answer should be generated and structured.

Example shown below the screenshot of the knowledge base document, displaying the file title and its corresponding link for the Large Language Model (LLM)

<img width="393" alt="Screenshot 2025-03-05 at 5 18 33 PM" src="https://github.com/user-attachments/assets/39e87206-dd79-4f06-a231-61f7f1289c2e" />

#### Step 2: Create an AI Assistant
[Click here](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants) to understand how to create an AI Assistant.
While creating an AI Assistant prompt should be clear and include a few examples of how the answer should be generated and structured.

Prompt example: Courtesy - Leadership for Equity

```
You're a chatbot who is an empathetic responder to queries of teachers, teacher mentors and officials engaged with NGO called Leadership for Equity. Teachers may ask questions regarding their technical queries or if they are stuck while navigating the Learning Management System (LMS) which is called "Firki". The teachers who ask you questions will need responses in the simplest language possible and in maximum 5-7lines

Instructions for you to respond to a question

1. DO NOT SHARE anything that is not there in the knowledge base. If you cannot find the answer in the given text, politely respond by saying “I do not have enough information to answer your question” 

2. Generate the answer in the language that matches the language & style of the question. For example, if they asked question in Hindi typed in English, answer back in Hindi typed in English only

3. If you get emojis/ generic greeting/ acknowledgment messages in any language(like yes, thank you, ok, ji, G, hi, bye, theek hai), respond according to their message.

4. Give responses in bullet points.

5.The document also contains links to the videos from where the transcription is being done. Please provide the most relevant youtube video link along with the generated response. 

6. DO NOT HALLUCINATE the video link. Share only the links that are present in the document.
```


This is the simplest and the fastest way to deliver files, if there is a large number of files involved, and they are already stored in a shared drive. The only con being that clicking the link will take the user outside of WhatsApp.


#### Step 3: Configure in the flow
- Users can add the `AI Assistants` to the flow where the end user interacts with them.
- Refer to `Filesearch Assistants` documentation to know how to configure assistants in the flow.



## Delivering File as an Attachment
This method sends the file directly as a downloadable attachment in the chat. The screenshot below shows a response where a PDF attachment is shared directly in the message.

<img width="679" alt="Screenshot 2025-03-05 at 5 19 53 PM" src="https://github.com/user-attachments/assets/07e851e3-8ab1-4a66-953e-c37731aecd5d" />

 Screenshot showing the file delivered as an attachment. 


### Steps to Deliver Attachments in Messages

#### Step 1: Prepare the Knowledge Base
Curate the knowledge base which has the required headings, structure as well as links to all the Google Cloud Storage URLs
- Use a Google Sheet or doc listing all file URLs (from Google Cloud Storage).
- Add a short description of what each file contains.
- Convert this into a structured JSON format using ChatGPT or a script. 
- This JSON output which contains the GCS urls should be downloaded or can be saved in a doc, this is used as a knowledge base.

Given below is the screenshot of how GCS urls can be structured as a database.

<img width="468" height="345" alt="Screenshot 2025-10-09 at 1 03 05 PM" src="https://github.com/user-attachments/assets/e22576dc-6c2e-4e8d-9152-7bc27ba2fdcb" />





#### Step 2: Create an AI Assistant
- Create an AI Assistant by going to AI Assistants pane.
- Users are advised to write a targeted prompt instructing the assistant to return the file attachment in the response.

Prompt example:

```
You are an AI assistant with access to a structured knowledge base of lesson plan links for different grades and weeks and days. Your task is to retrieve the correct lesson plan link when provided with a grade, week number and day.

Use the JSON/ tabular data as your sole source of truth and do not generate or guess links that are not explicitly available in the knowledge base.

Instructions:
1. Search the JSON/ tabular knowledge base for a match based on the given subject, grade, week number and day.
2. If a matching entry exists and contains a valid link, return only the link.
3. If the entry exists but the link is missing (null or empty), respond with:
"Lesson plan link not available for the given grade and week."
4. If no matching entry is found, respond with:
"No lesson plan found for the given grade and week."
5. Do not attempt to create or fabricate links under any circumstances.

Example Inputs & Outputs:
Input: Subject: Literacy, Grade: 1, Week: 9, Day: 1 
Output: https://storage.googleapis.com/glific_lfe_bucket/UPLessonPlans/Grade1/Literacy/Literacy%20-%20Grade%201%20-%20Week%209%20-%20Day%201.pdf

Input:  Subject: Math, Grade: 2, Week: 3, Day: 2
Output: "Lesson plan link not available for the given grade and week."

Input:  Subject: Math, Grade: 2, Week: 3, Day: 2 (Assume this link does not exist in the knowledge base)
Output: "No lesson plan found for the given grade and week."

Return only the valid link or the specified error message—no additional text or assumptions
```

#### Step 3: Add AI Assistant to the flow editor
- Refer to `Filesearch Assistants` documentation to know how to configure assistants in the flow.


#### Step 4: Add Save result and Splitby node
Add a `Save Flow result` node after the `webhook call` and provide details as shown in the screenshot below.

<img width="465" height="393" alt="Screenshot 2025-10-09 at 1 09 18 PM" src="https://github.com/user-attachments/assets/39b77048-ceff-42a5-870e-6734f459288d" />

In the given example `lessonplanfile` is the result name of webhook node.

- Add Split by result node to check whether the response has GCS url or not.

<img width="471" height="321" alt="Screenshot 2025-10-09 at 1 11 07 PM" src="https://github.com/user-attachments/assets/caa6f6de-4fbe-4fac-af32-412065889b45" />



#### Step 5: Send File as Attachment
- Add Send Message node
- Click on attachments and select expression from dropdown and pass the the variable as shown in the screenshot below.

<img width="466" height="193" alt="Screenshot 2025-10-09 at 1 21 23 PM" src="https://github.com/user-attachments/assets/811ea6f3-d05f-488a-8559-6b70d360c64c" />


---
### Credits
The above flows and screenshots taken from chatbot developed in collaboration with Leadership for Equity.




 
