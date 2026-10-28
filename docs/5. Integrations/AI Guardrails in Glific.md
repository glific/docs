<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: Oct 2026</b></td>
  </tr>
</table>
</h4>

# AI Guardrails in Glific
- AI Guardrails are automatic safety checks that run around an AI Assistant in Glific.
- AI Guardrails is one of the tools to make safe and responsible AI chatbots.
- Without AI guardrails there is a risk of chatbots sharing PII sent by contacts in their questions with the models or models answering to unsafe or abusive questions or questions which are not in your scope of work or the assistant having a gender bias in their responses. 
- They sit at two points in a conversation: before a beneficiary’s message reaches the assistant, and before the assistant’s reply goes back to the beneficiary.
- Each guardrail you switch on either quietly cleans up the text and lets the conversation continue, or stops the message entirely and sends a reply that you have written yourself.
- You will find them on the Guardrails tab of any assistant: `AI toolkit > AI Assistant > Edit an assistant > Guardrails`.
- All four guardrails (Privacy Protection, Content Safety, Scope Control and Gender Bias)  are switched off when you start.

<img width="" height="" alt="Screenshot 2026-10-27 at 11 30 24 AM" src="https://github.com/user-attachments/assets/490db24b-7067-4e33-9095-395042b6b4b5" />

<iframe width="" height="" src="https://www.youtube.com/embed/INoWaHcz_eE?si=ps8VXJXb2bfQK750" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## How a guardrail behaves when it is triggered
Every guardrail carries a badge that tells you how it acts when it is triggered. Click See how at the top of the tab to expand a diagram that explains both behaviours.
- **Fixes and passes on (green)**: the conversation continues as normal and only the specific words or text which is flagged by the guardrail is hidden or reworded before being sent ahead to the assistant or to the user. 
- **Blocks and sends set reply (amber)**: the conversation is stopped, the assistant never sees the message, and the beneficiary receives the reply you configured instead.

<img width="" height="" alt="Screenshot 2026-10-22 at 3 32 58 PM" src="https://github.com/user-attachments/assets/a06595bf-82a3-4127-a1a5-50fb89b17334" />

## Guardrails on incoming messages to the chatbot
These checks run before a message reaches the assistant. 

### Privacy Protection  (fixes and passes on)
Hides personal details like phone numbers, addresses and ID numbers so that they are not saved or shown. This is the only guardrail with a detailed configuration panel.
1. Click `Configure` to reveal two groups of detectors. The first group is on by default and covers twelve identifiers:
- credit card number,
- email address,
- bank account (IBAN),
- IP address,
- medical licence number,
- phone number,
- web link,
- aadhaar number,
- PAN card number,
- passport number,
- vehicle registration number and
- voter ID number.
3. The second group, which covers location or address, nationality / religious / political group, and name, is off by default. 

<img width="" height="" alt="Screenshot 2026-10-22 at 3 34 28 PM" src="https://github.com/user-attachments/assets/45e29b61-7233-4c7d-b581-c3bdf3798b93" />

To learn more about how privacy protection was tested, and its accuracy results go [here](https://projecttech4devai.github.io/kaapi-docs/guardrails/privacy-protection)

### Content Safety (fixes and passes on)
- Removes abusive or hurtful words from messages. This is a simple on or off switch with no extra settings.
- To learn more about how content safety was tested, and its accuracy results go [here](https://projecttech4devai.github.io/kaapi-docs/guardrails/content-safety)
- This guardrail works only for inputs in Hindi, English and Hinglish.


### Scope Control (blocks and sends set reply)
- The assistant will not answer questions about the topics you list here. 
- Under `Configure` you add entries to `Disallowed topics` by typing a topic and pressing Enter or clicking Add, or by clicking one of the suggested chips: `Politics and Religion`, `Personal relationship advice`, `Legal and financial advice`, `Medical treatment claims`. Each topic you add appears as a chip that can be removed again.
- Below the topic list, `Set reply` is the message the beneficiary receives when this guardrail is triggered.
- Write it in any one language and Glific automatically translates it to match the language the user wrote in, so a Hindi message gets the reply in Hindi.
- To learn more about how scope control was tested, and its accuracy results go [here](https://projecttech4devai.github.io/kaapi-docs/guardrails/scope-control)

<img width="" height="" alt="Screenshot 2026-10-22 at 3 43 55 PM" src="https://github.com/user-attachments/assets/7bbbba09-be31-48f0-a379-590e7f0482cb" />



## Guardrails on assistant replies (outgoing messages from the chatbot)
These checks run before a reply is sent back to the beneficiary.

### Gender Neutrality (fixes and passes on)
- Changes words that guess someone’s gender, using words that work for any gender in Hindi and English. This is an on or off switch with no configuration.
- To learn more about how gender neutrality was tested, and its accuracy results go [here](https://projecttech4devai.github.io/kaapi-docs/guardrails/gender-neutrality)


## How to enable guardrails
1. Go to AI toolkit > AI Assistant and open the assistant you want to protect.
2. Select the Guardrails tab. All four guardrails start switched off.
4. Flip the toggle on the right of a guardrail to turn it on. An amber dot appears next to the tab name and an Unsaved changes badge appears in the header, which means your changes exist only in the browser at this point.
5. If the guardrail shows a `Configure` chip, open it and set it up.
- For `Privacy Protection`, tick the identifier types you want detected.
- For `Scope Control`, add your disallowed topics and write the set reply.
6. Repeat for the other guardrails you want, including Gender Neutrality in the assistant replies section.
7. Click Save Version in the header. Saving creates a minor version and does not change what is live. 
8. Test the saved version in the `Try It Out` tab.
9. Try It Out only runs against a saved config on the server, so the tab stays locked until you save.
10. Run evaluation after the guardrail is activated to make sure the evaluation scores are still consistent.
10. When you are satisfied, click `Go Live`.
11. Publishing promotes the version to the next major number and makes it live in every flow that uses this assistant.

### Notes worth remembering
1. Guardrail changes are versioned like the rest of the assistant configuration, so they never take effect mid conversation without a deliberate click on `Go Live`.
2. The name, location and nationality detectors inside Privacy Protection are off by default.
3. Write the scope control guardrail's set reply in the assistant’s voice, because when this guardrail is flagged, the set reply is translated to the user's language and sent back directly. The assistant is not called at all.
