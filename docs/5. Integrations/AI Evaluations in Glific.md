<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: May 2026</b></td>
  </tr>
</table>
</h4>

# AI Evaluations

AI Evaluations allow your organization to test and measure how accurately your AI Assistant responds to questions, by comparing its answers against a trusted set of "golden" question-answer pairs. This helps NGOs ensure their AI Assistants are performing well and giving the right information to beneficiaries before deploying them at scale.

## Raising the request
1. Navigate to `AI Toolkit` -> `AI Evals`, you should see the button to `Request Access`
<img alt="Screenshot 2026-06-12 at 10 31 40 AM" src="https://github.com/user-attachments/assets/36b38dc8-77cb-40e8-8e2d-cfe35f89ab8d" />

2. CLick on the button to raise the request to enable the feature
3. Glific team will enable this feature within 24 hours.
4. Once enabled the `AI Evals` page is visible 

## Prerequisites
Before running an AI Evaluation, make sure you have:
1. At least one AI Assistant configured in Glific (see: AI Assistants [documentation](https://glific.github.io/docs/docs/Integrations/Creating%20and%20modifying%20assistants%20in%20Glific))
2. A Golden QA dataset — a CSV file containing benchmark questions and their expected answers

## Navigating to AI Evaluations
1. Log in to your Glific account.
2. On the left sidebar, click on `AI Toolkit`
3. Click on `AI Evals`
<img  alt="Screenshot 2026-05-21 at 10 50 06 AM" src="https://github.com/user-attachments/assets/4601f2e2-23b0-49f2-9507-fc8fbbe334ca" />

The page shows a table of all past evaluations with the following columns:
- Evaluation Name — The name you gave the evaluation, along with the AI Assistant version and Golden QA dataset used along with its duplication factor.
- Status — Whether the evaluation is Completed, Running, or Failed.
- Cosine Similarity — A score indicating how semantically close the AI's answers were to the expected answers (more on this below).
- Completed at — The date and time when the evaluation finished.
- Actions — A button to download the detailed results.

## Part 1: Running an AI Evaluation
### Step 1: Click "+ Create AI Evaluation"
From the AI Evaluations page, click the + Create AI Evaluation button in the top right corner.
<img  alt="Screenshot 2026-05-21 at 10 57 19 AM" src="https://github.com/user-attachments/assets/f0659836-b8ab-413b-9159-d8fe10eab271" />

You will be taken to the Create AI Evaluation page.

<img  alt="Screenshot 2026-05-21 at 11 02 42 AM" src="https://github.com/user-attachments/assets/239207ab-1459-4384-b62a-b33e18a06ff0" />

### Step 2: Select or Upload a Golden QA Dataset
Under the Select Golden QA section, you have two options:
<img alt="Screenshot 2026-05-21 at 11 07 46 AM" src="https://github.com/user-attachments/assets/9457aea0-dccc-4181-92f4-74a5902588c3" />

- Option A — Use an existing dataset: Click the "Search or select a Golden QA dataset" dropdown and choose from your previously uploaded datasets.
- Option B — Upload a new dataset: Click the "Upload Golden QA" button to upload a new CSV file. Provide the duplication factor for the uploaded data set. 

<img alt="Screenshot 2026-05-21 at 11 07 14 AM" src="https://github.com/user-attachments/assets/8371611a-12d0-4ff7-a34f-b44ce9ab313b" />

Duplication factor is the number of times the golden questions are repeated in the given dataset while running the evaluation. Allowed values 1-5. 

Tip: Your CSV must follow the format question, answer with one pair per row. Access the [Golden QA CSV template](https://docs.google.com/spreadsheets/d/198UpOMeU53s9O-fwbIl0DIJLuD3l24jgkq74CoDfSQM/copy) to get started.

### Step 3: Select an AI Assistant
Click the "Search or select an AI assistant" dropdown under AI Assistant and choose the specific assistant (and its version) you want to evaluate.

<img alt="Screenshot 2026-05-21 at 11 08 55 AM" src="https://github.com/user-attachments/assets/357aee0f-1c06-4fe7-a245-5ac8173f0f02" />

Note: Each AI Assistant can have multiple versions. Make sure you select the correct version you want to test — this is especially useful when comparing how a newer version performs versus an older one.

### Step 4: Enter an Evaluation Name
Under Evaluation Details, type a unique, descriptive name for this evaluation run in the Evaluation Name field.
<img  alt="Screenshot 2026-05-21 at 11 10 21 AM" src="https://github.com/user-attachments/assets/b8c04eb0-613c-4b8b-bdf9-d90640df63a8" />


Tip: Use a name that helps you identify the test later, such as v2-assistant-may-test or knowledge-base-check-q1.


### Step 5: Run the Evaluation
Click the "Run Evaluation" button to start the evaluation.

Glific will now send each question from your Golden QA dataset to the selected AI Assistant and compare the responses against the expected answers. The evaluation will appear in the AI Evaluations list with a "**Completed**" status once it finishes. Time taken to complete the evaluation run depends on the number of golden questions and answers. A good estimation of time range would be 15-30 mins, can even go to 45 mins. 

## Part 2: Reviewing Results
### Viewing Evaluation Results
Once an evaluation is complete, it appears in the AI Evaluations tab with its status, cosine similarity score, and completion timestamp.

Each evaluation row shows:
- The evaluation name 
- The AI Assistant that was tested 
- The name of Golden QA file used along with its duplication factor
- Action to download the results

Click the "Download Results" button on any completed evaluation to download a detailed CSV file with a row-by-row breakdown of each question, the AI's actual response, the expected answer, and the individual similarity score. 


Open the results CSV in a Google spreadsheet to perform further analysis and interpret the results of the evaluation.

<img  alt="Screenshot 2026-05-21 at 11 19 17 AM" src="https://github.com/user-attachments/assets/46aeab60-7da7-4c44-8dec-8b7534ef1348" />

Through comparing the golden answer (ground_truth_answer) with the generated answers (llm_answer), isolating the rows with lower scores (less than 0.3), you should be able to understand what to change in your assistant (either the prompt or the knowledge base) to get better answers from the AI assistant. 

In the results csv "question_id" is referring to the question number from the golden QA list. This means question id of the question in the first row of the Golden QA csv will be 1 and so on.

## Understanding Cosine Similarity
The Cosine Similarity score tells you how meaningfully similar the AI Assistant's actual answers were to the expected "golden" answers. You can hover over the ⓘ icon next to the column header to see an explanation for what cosine similarity means.

Here's a quick guide to interpreting the score:

| Score | Meaning |
|-------|---------|
| > 0.7 | Answers convey similar intent and information as the golden answer |
| 0.3 – 0.7 | Moderate alignment — some drift in meaning, worth reviewing |
| < 0.3 | The response has drifted significantly in meaning, even if some words overlap — the assistant may need tuning |


- **Analyze answers that are below 0.3** —  Cosine similarity can be good starting indicator to weed out answers that are not aligned at all. So starting with answers that are low scoring and figuring out how to improve the scores on these is a great start. Consistently scoring above 0.7 is a good indicator that the AI answers are aligned to your expectations. However, following nuances can be kept in mind: 
- **Low-scoring evaluations don't always mean failure** — review the downloaded results to identify which specific questions scored poorly. You may find patterns that can guide improvements to your assistant's knowledge base or prompt instructions. For some questions, it may be ok to get lower scores ex- your AI assistant is catching edge cases and not answering to harmful or potentially misleading questions. 
- **High-scoring evaluations more than 0.7 don’t always mean correct answers** — review the results to identify if the answers are also complete. Once the majority of the answers are scoring high on cosine similarity more evaluators can be added to help further improve the correctness and completeness of answers. Connect with Glific team to understand how this can be enabled. 

## Tips and Best Practices
- **Run evaluations regularly** — especially after making changes to your AI Assistant's knowledge base, instructions, or model settings. This helps you track whether changes improved or worsened performance.
- **Compare versions** — use the same Golden QA dataset across different AI Assistant versions to directly compare their performance scores.
- **Build a strong Golden QA** — the quality of your evaluation depends on the quality of your Golden QA dataset. Include diverse, representative questions that your beneficiaries actually ask.


## Golden QA
The Golden QA tab is part of Glific's AI Evals section, found under the AI toolkit in the left navigation menu. It serves as a library of curated question-and-answer datasets — called "Golden QA" — that are used as the reference benchmarks when evaluating an AI Assistant's performance.
Each dataset is a CSV file containing a set of questions paired with their ideal (or "golden") answers with a certain duplication factor. Once a dataset has been uploaded, it can be seen here and can be re-used from for multiple eval runs.

## How to Use It
**Uploading a Golden QA Dataset** Golden QA datasets can be uploaded from the Create AI Evaluation form (accessed via the `+ Create AI Evaluation` button on the AI Evaluations tab). On that form, click Upload Golden QA to upload a new CSV file. A template is available via link on the create form to help you get started quickly.

<img  alt="Screenshot 2026-05-21 at 11 24 42 AM" src="https://github.com/user-attachments/assets/643af63b-d8eb-4092-a5c5-a4082358b644" />
Once uploaded, the dataset will appear in the Golden QA tab and remain available for future evaluations.

**Browsing and Searching Datasets** On the Golden QA tab, all previously uploaded datasets are listed in a table sorted by creation date (newest first). Use the Search bar at the top right to filter datasets by name if you have a large library. You can also click the Created On column header to toggle the sort order.

**Downloading a Dataset** Each row in the table has a download icon (↓) in the Actions column. Clicking it downloads the corresponding CSV file, which is useful for reviewing or auditing the question-answer pairs, or for making edits before re-uploading a revised version.

**Using a Dataset in an Evaluation** When creating an AI Evaluation, use the "Search or select a Golden QA" dropdown to pick an existing dataset from the Golden QA library. Combine it with an AI Assistant selection and an Evaluation Name, then click Run Evaluation. The platform will send each question in the dataset to the chosen AI Assistant, compare the responses to the golden answers, and report a cosine similarity score once the run is complete.

## Tips 
- Use descriptive, version-stamped names for your datasets (e.g., knowledge_goldenqa_v2_20260512) so they are easy to identify and trace over time.
- Keep your golden answers concise and precise — the cosine similarity metric performs best when the reference answers are well-defined rather than overly verbose.
- Reuse the same dataset across different evaluation runs to isolate the variable being tested (e.g., a different AI Assistant version or knowledge base), making comparisons meaningful.




