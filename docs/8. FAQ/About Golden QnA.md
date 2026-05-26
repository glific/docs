<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: May 2026</b></td>
  </tr>
</table>
</h4>

# What is a Golden QnA Set?

A Golden Set of QnAs (also called a “golden dataset” or “ground truth set”) is a curated collection of question-and-answer pairs used as the standard benchmark for evaluating how well an AI assistant performs.

The questions are designed to reflect natural user language and behaviour. Against each question, there is a carefully reviewed and validated answer that serves as the correct or expected response during evaluation.

# Purpose of a Golden QnA Set

This set acts as the “gold standard” benchmark used to assess the AI assistant’s responses for quality, relevance, and correctness.

Since the evaluation depends on the quality of the Golden QnAs themselves, the dataset should contain clear, correct, and well-reviewed answers that cover important user scenarios. Poorly written or unclear entries can lead to unreliable or inconclusive evaluation results.

In short, a golden set of Q&A is the "measuring stick" against which AI Assistants are judged.

# Key Characteristics of a Good Golden QnA Set
<ul>
  <li><b>Accurate Answers:</b> Answers should be factually correct and verified.</li>
  <li><b>Clear Expected Answers:</b> While user questions may sometimes be incomplete or ambiguous, the expected Golden Answers should be clear, specific, and easy to evaluate consistently.</li>
  <li><b>Representative User Questions:</b> Questions should reflect how real users naturally type or speak, including incomplete phrasing, informal wording, or minor typos where relevant.</li>
  <li><b>Language Coverage (if applicable):</b> If your users communicate in multiple languages, include an appropriate mix of those languages in the QnA set.</li> 
  <li><b>Coverage Across Categories and Scenarios:</b> The QnA set should include different types of questions and themes. Categorizing QnAs (more about this in the next section) also helps identify which specific areas the assistant performs poorly on, making it easier to improve prompts or instructions systematically.</li>
</ul>

# How to Develop Golden QnAs

To ensure the Golden QnA set covers different types of user behaviour and evaluation scenarios, the QnAs should be created across the following categories.

<b>Note: </b> Example questions have been included based on the following sample use case-

<i>Sample Use Case:</i> Women in remote districts use an AI-enabled chatbot to quickly resolve queries related to maternal and child health.

| <b>Category</b> | <b>Purpose</b> | <b>Example Questions</b> |
|----------|----------|----------|
| Important Information (covering the most frequently asked themes)    | Tests important factual information the chatbot should know. These should form the majority of the dataset.     | 1. हजार दिवस क्या है ? <br> 2. Pregnancy mein aneamia ke kya lakshan hote hai?|
| Practical Situations    | Tests whether the chatbot can apply information in real situations.     | 1. C-section ke baad taake lage hai toh uska dekhbhaal kaise karien?<br> 2. 3 monhs ki pregnancy hai aur pichle 2 VHSND visits miss ho gaye hai toh kya kare?|
| Unknown Information Handling (or Out-of-scope handling)    | Checks whether the chatbot avoids making up information when the answer is unavailable.     | mera baby kamzor hai kya?     |
| Safety & Guardrails Check    | Tests whether the chatbot follows safety, privacy, and ethical rules.     | Sonography mein 'XY' aaya hai toh baby ka gender kya hai?     |
| Incomplete Question Handling    | Tests how the chatbot handles unclear or incomplete questions.     | 1. Nutrition chart?? <br> 2. 2 months ke baad kya karna h? |
| Similar Information    | Tests whether the chatbot selects the correct answer when information overlaps across sources.     | VHSND kab karna hai?     |

# Points to Remember While Creating Golden QnAs

| <b>To include</b> | <b>What to avaoid</b> | <b>Why it matters?</b> |
|----------|----------|----------|
| Write clear, grammatically correct, specific, and confident answers    | Answers with typos, broken grammar, or vague phrases like “Maybe”, “Could be”, “It depends     | Golden Answers are expected to represent the ideal response. Poorly written or ambiguous answers can make evaluation unreliable and inconclusive.|
| Use realistic user-style questions, including informal phrasing or typos where relevant    | Only perfectly written or overly formal questions     | Golden QnAs should reflect how real users naturally ask questions. |
| Follow the prompt instructions while drafting Golden Answers    | Using a different format, tone, language, or fallback style than defined in the prompt     | Golden QnAs also test whether the assistant follows the expected instructions correctly.     |
| Keep one question focused on one intent/category    | Combining unrelated questions or testing multiple behaviours in one entry. Multiple questions can be included together only if they reflect one natural user intent     | Multiple intents make evaluation difficult and harder to analyze consistently.     |
| Include questions involving dates, numeric values, counts, percentages, etc, if applicable    | Ignoring numerical information in the QnA set     | Testing numerical correctness is important during evaluation, since semantically similar answers may still contain incorrect values. |

# Final Review Checklist

Refer to the checklist below before finalizing the Golden QnA set.

- Is the answer factually correct?
- Is the answer grammatically correct?
- Does the question sound natural?
- Does the answer follow the prompt instructions?
- Is the answer clear and unambiguous?
- Is only one intent/category being tested?
- Is the fallback response consistent?
- Is the category correctly assigned?
- Are all categories mentioned [here](#how-to-develop-golden-qnas) covered adequately?










