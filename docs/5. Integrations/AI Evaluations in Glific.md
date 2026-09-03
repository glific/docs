<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: Sept 2026</b></td>
  </tr>
</table>
</h4>

# Running AI evaluations 
Evaluations can be run through on by navigating to `Golden Q&A Evaluation` tab within the AI Assistant page. AI Evaluations score a version against a Golden Q&A — a fixed set of questions paired with ideal answers. The AI evaluations return 3 scores, a reason for the score, and an overall summary and next steps based on all the scores from the evaluation run. 

<img width="" height="" alt="Screenshot 2026-09-03 at 8 20 00 AM" src="https://github.com/user-attachments/assets/49099ad5-d2fa-4886-a7db-491d2b5f5216" />


The evaluation scores answer on three independent metrics: 
1. **Adherence to Ground Truth**: is AI generated answer correct in meaning against the golden answer?,
2. **Adherence to Knowledge Base**: is every claim in AI generated answer grounded in the information retrieved from knowledge base, or hallucinated?, and
3. **Adherence to Prompt**: does AI generated answer follow the configured language, tone, and answer-vs-refuse behaviour?,

- each of these metrics is a score between 0 to 5, plus a plain-language reasoning by the judge. 

The result is that a wrong-but-similar sounding answer can be caught by adherence to ground truth , hallucinations get flagged with the specific unsupported claim named by adherence to knowledge base, and all results (scores, reasoning) are stored and accessible in the assistant's history of runs to enable comparison between versions. 

## Set up a Golden Q&A set

1. On the `Golden Q&A Evaluation` tab, 
2. Click `Manage Golden Q&A`.
  <img width="" height="" alt="Screenshot 2026-09-02 at 1 49 17 PM" src="https://github.com/user-attachments/assets/39709c45-eed2-4b55-8202-5cf2df979286" />

4. You’ll see existing sets, if you have run evaluations in past; else,
5. You can use `Add Golden Q&A` button. To create one,
  <img width="" height="" alt="Screenshot 2026-09-02 at 1 50 12 PM" src="https://github.com/user-attachments/assets/1680c0b3-89d8-4da3-870d-882546b8d9b4" />

7. Click Add Golden Q&A, give it a name, and upload a CSV with two columns: question and answer.
8. There’s a [Google Sheet template link](https://docs.google.com/spreadsheets/d/198UpOMeU53s9O-fwbIl0DIJLuD3l24jgkq74CoDfSQM/copy) to help format the file.
9. Click `Add` to save it.

<img width="" height="" alt="Screenshot 2026-09-02 at 1 47 45 PM" src="https://github.com/user-attachments/assets/900d2b76-7a5c-421c-a56c-6ece572cbe38" />

To learn more on how to create good set of golden Q&As, go [here](https://glific.github.io/docs/docs/FAQ/About%20Golden%20QnA)

## Run the evaluation
1. On the `Golden Q&A Evaluation` tab, 
2. Click `Run evaluation` (or Run another evaluation if the version was evaluated before).
   <img width="" height="" alt="Screenshot 2026-09-02 at 1 53 20 PM" src="https://github.com/user-attachments/assets/486437e2-3876-4047-a1e1-a887e0397b79" />

4. In the dialog, choose the `Golden Q&A` set from the dropdown (the last-used set is marked),
5. Then choose how many times to send each question: 1x (Quick smoke test) asks each question once — the fastest way to check things broadly work; or 5x (Consistency check) asks each question five times to catch answers that change between attempts.
6. Click `Run evaluation`.
7. Evaluations run in the background, and can take upto 10-15 mins depending on the number of questions and duplication factor used. So you can keep working and come back — the result appears when it completes.

## Interpreting the results
Once an evaluation finishes, the `Run` sub-tab shows the latest run for that version (with the Golden set name, duplication factor, and timestamp). A dial shows the OVERALL score out of 5 with a health badge (e.g. “Could improve”) and an AI-written summary highlighting strengths, weaknesses, and the top questions worth checking. Treat the summary as a guide - and use it to find the top 3 things to inspect from the results of the given evaluation run.

The overall score is a weighted average of three checks, each scored 0–5: 
1. Adherence to ground truth (weight 50%, how well answers match the golden answers),
2. Adherence to prompt (weight 20%, how well answers follow the instructions), and
3. Adherence to knowledge base (weight 30%, how well answers stay grounded in the attached documents).

- Score colours: 0–1 needs improvement (red), 2–3 could improve (amber), 4–5 good (green).

<img width="" height="" alt="Screenshot 2026-09-02 at 2 00 59 PM" src="https://github.com/user-attachments/assets/00c976ed-0f98-422f-8316-e4c880ead262" />

## Question-level results and comparing versions

<img width="" height="" alt="Screenshot 2026-09-02 at 2 01 16 PM" src="https://github.com/user-attachments/assets/868a4e5b-1d83-4fbf-b461-abfb47901da6" />
 
Below the summary, every question is listed. Two views are available:
1. Individual Rows (a table with columns for Question, Expected Answer, Assistant Answer, and the three per-question scores) and
2. Group By Questions (groups each question with its answer(s) and per-metric score chips — especially useful for 5x runs where each question has several answers).
3. Use these to pinpoint where the assistant is weak,
4. And `Export CSV` to further analyse each question, generated answer, the rating and reason behind the rating in google sheets.

The `History` sub-tab lists all past runs in one comparison table (Version, Golden Q&A, Duplication Factor, Overall, and the per-metric scores), with the same colour coding. This is how you tell whether a prompt or model change actually improved the assistant before you publish it.

<img width="" height="" alt="Screenshot 2026-09-02 at 2 13 20 PM" src="https://github.com/user-attachments/assets/77a8187e-c2c4-4811-8af0-c5d8a155a567" />



## Going live
When you’re satisfied with a version’s evaluation results and sandbox testing, select that version in the version dropdown and click Go Live (top right). This publishes it as the next major version and makes it the version served to real users in every Glific flow that references this assistant’s ID. The button is disabled when the selected version is already the live one.

## Recommended workflow
Edit or create new version → Save (creates a new draft version) → test in Try It Out → Run an evaluation → check History to confirm it beat the previous version → only then Go Live.
