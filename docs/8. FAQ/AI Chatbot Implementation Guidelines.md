<h4>
 <table>
  <tr>
    <td><b>7 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: July 2026</b></td>
  </tr>
</table>
</h4>

# AI Chatbot Implementation Guidelines

This document outlines what an organization should keep in mind for any AI-based file search implementation on the chatbot.

For any AI file search/RAG implementation, there are three major components to get right:

1. **Knowledge Base**
2. **Prompt**
3. **Model**

*Temperature is another component relevant for a few models (more on this later).*

## A Simple Analogy

To help understand these components, imagine the AI assistant as a student:

| Component | Analogy |
|------------|----------|
| **Model** | Brain |
| **Prompt** | Rules |
| **Knowledge Base** | Textbook/study material — without it, the student guesses the answer; with it, answers are grounded |
| **Temperature** | Creativity quotient |

## Another Way to Frame It

- **Knowledge Base** is the treasure
- **AI Model** is the seeker
- **System Prompt** is the instructions given to the guide
  
<img width="327" height="244" alt="Screenshot 2026-07-29 at 7 44 53 PM" src="https://github.com/user-attachments/assets/33f18061-e1b9-41a1-a24a-1010eaabc7e5" />

## 1. Knowledge Base

The knowledge base is the entirety of what the bot "knows." If it isn't accurate, the answers won't be either.

When selecting documents for the knowledge base, follow these guidelines:

### Content Quality

- Ensure all content is factually verified and source-backed before adding to the KB.
- No document should contain information your organization doesn't officially stand behind as an organization.
- All information must be safe to share with users verbatim, as-is.
- Remove repetitive information — if the same fact appears in two documents, keep the more relevant one and delete the other.
- Eliminate contradictory information across documents, if any.
- Pick documents with complete information over partial/half information.

### File Format

1. Text-based formats work best — `.md` is ideal. Clean PDFs are acceptable if pure text documents are not available.
2. Avoid documents heavy with images, word art, tables, links, or other embedded media — RAG doesn't read or surface images through the chatbot unless they're described in text. Links may be retrieved and shared as-is, but the content inside those links is not automatically read or indexed unless it is separately added to the knowledge base.
3. Tabular formats (`.csv`, `.xls`, etc.) are poor knowledge base inputs. Convert tabular data into JSON (`.json`) format for it to be effective.
4. Documents can be in any language, but English performs best since most models are optimized for it. Hindi is the next-best supported language, especially relevant given the Indian context.

### Conversion workflow
- For Hindi-language documents being converted to `.md`, a tool called [Marker](https://colab.research.google.com/drive/14-FJICDFodGrxBrjsTDbexuEbs0vq9rZ?usp=sharing) can bulk-convert files to Markdown. Other tools like Cloud vision could also be used for other Indian languages. (You can reach out to us at info@glific.org for more details)
- After conversion, manual review by an internal SME/team member is critical before the files are used.

### What to check during manual review:
1. No gibberish words or unicode artifacts (e.g., àª—à«�...) have replaced original text.
2. No content is missing (watch for unusual gaps between paragraphs).
3. No words are incorrectly split due to unintended spacing. (Because this can change the meaning of the words too. This is applicable especially for Indic languages)
4. No content appears struck through or malformed.
5. Verify that tables inside a document have been transformed accurately and retain the correct formatting.

**Review is the most important step in this process and should never be skipped. Post review, changes/ corrections need to be made manually to the md files**

## 2. Prompt

The prompt is the set of instructions given to the AI assistant, and it directly shapes how the AI assistant behaves.

Prompts should be explicit, clear, and contextual — written as if instructing a young new person who needs no assumptions made on their behalf.

### Anatomy of a Good Prompt

1. **Role** — What should the assistant behave as? (gender, age, persona, conversational style, role)
2. **User Context** — Who are the users? Demographics, literacy levels, socio-economic and cultural background, their role, and their limitations (e.g., inconsistent spelling, typing constraints)
3. **Objective & Task** — What problem is the assistant solving? What is it expected to do?
4. **Response Style** — Tone (formal/informal), length, format (bullets, paragraphs, short answers), language (English, Hindi, Hinglish, or mirroring the user's language)
5. **Boundaries / Guardrails** — What topics or questions is the bot *not* expected to answer?
6. **Out of Scope Handling** — What should the assistant respond when it doesn't know the answer?
7. **Fallback Handling** — Define AI behavior when information is unclear or confidence is low — e.g., "If the question is vague, make a high-confidence assumption, provide the answer, and state the assumption clearly."
8. **Escalation Handling** — Specify how to detect escalation scenarios and how to respond — e.g., sharing support helplines.
9. **Knowledge Source (KB) Instruction**
   a. Answer strictly from provided KB  
   b. Define fallback reply if answer not found; specify if general knowledge is permitted for safe queries.  
   c. Do mention clearly if the KB is in multiple languages.  
   d. You can also direct to use original query and also translated version in English to scan the KB before giving answer.

#### Helpful Links on Prompt Engineering

- https://www.promptingguide.ai/
- https://learnprompting.org/docs/intro

## 3. Model

Choosing the right AI model is another major factor — it determines both the quality of answers and the cost of running the chatbot. The right choice depends on the organization's priorities, budget, and the level of accuracy required for the use case.

For example:

| Model Tier | Cost | Quality | Notes |
|------------|------|---------|--------|
| **5.4-mini** | Cheapest | Lowest | Hits a "prompt ceiling" — some answers may be inaccurate regardless of how well the prompt is written |
| **5.4** | Moderate | Good | The sweet spot for most use cases — solid answers at a reasonable cost step-up from mini |
| **5.4-pro** | Highest | Best | Most accurate answers, but cost-prohibitive for most NGO budgets |

### Key Considerations When Choosing a Model

- **Budget vs. Accuracy Trade-off** — higher-tier models cost more per query/token but reduce the risk of wrong or hallucinated answers.
- **Use Case Sensitivity** — a chatbot answering camp-related questions may tolerate a cheaper model better than one giving exam-related guidance, where accuracy matters more.
- **Volume** — at scale (thousands of users/queries), even small per-query cost differences compound significantly.
- **Re-evaluation Over Time** — model pricing and capability change frequently; it's worth revisiting model choice periodically rather than treating it as a one-time decision.

#### Temperature

Temperature is one aspect that is present in a few models. It controls how "creative" vs. "consistent" the model's answers are. A low temperature (closer to 0) makes the bot stick closely to the knowledge base and give predictable, repeatable answers — ideal for factual or sensitive use cases.
A higher temperature allows more variation and creative phrasing, but increases the risk of the bot drifting from the source material or sounding inconsistent across similar queries. For most NGO chatbot use cases where accuracy matters more than creativity, a low temperature (as low as 0.01) is recommended.

## Testing

Once the chatbot has been built following the guidelines above, the next critical phase begins: **Testing**.

Testing should ideally happen in two ways:

1. Manual testing
2. Running evals

Manual testing surfaces qualitative issues a human eye catches; evals give you a repeatable, quantitative measure across many cases. Both are needed — one catches what the other misses.

### Manual Testing

Since the chatbot is built for real users, it's important to test it the way an actual user would interact with it — mimicking their spelling patterns, typing style, and language quirks, rather than testing with clean, well-formed queries.

#### Categories to Test Different LLM Capabilities

- **Factual Accuracy / KB Adherence** — Knowledge-based questions, application-based questions, questions combining two different concepts
- **Edge Cases** — Corner case handling
- **Ambiguous Questions** — Handling unclear or incomplete queries
- **Role Adherence** — Checking if the model stays within its defined role boundaries
- **Safety & Guardrails** — PII requests, harmful health advice, refusal handling, escalation
- **Out-of-Scope Handling** — Political or unrelated questions
- **Language Quality** — Hindi/English/Hinglish correctness, multilingual queries
- **Format Compliance** — Bullet points, short answers, specific structure
- **Numerical Compliance** — Correctness of numbers, ranges, and statistics

Categorizing test cases this way helps identify which areas score poorly, enabling targeted improvements rather than broad guesswork.

### Running Evals

Manual testing tells you the bot *seems* fine. Evals tell you, with numbers, whether it actually is. Plausible-sounding answers aren't the same as correct ones — and for a chatbot guiding real decisions, that gap matters.
Structured evals give you a baseline you can trust, a way to measure whether a prompt or knowledge base change actually helped, and the confidence to launch knowing the bot won't confidently hand out wrong guidance. Catching this in development is cheap. Catching it after launch isn't.
Though the entire setup is ready, one more important step needs to happen before evals can run which is preparing a Golden Q&A Set. 

To understand how to create one, refer to the documentation on [Preparing a Golden Q&A Set](https://glific.github.io/docs/docs/FAQ/About%20Golden%20QnA/).
Once your Golden Q&A Set is ready, you can run evaluations directly on the Glific platform. For more details, see the documentation on [AI Evaluations in Glific](https://glific.github.io/docs/docs/Integrations/AI%20Evaluations%20in%20Glific).

