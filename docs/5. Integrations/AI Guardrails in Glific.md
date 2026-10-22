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
- Guardrails are automatic safety checks that run around an AI Assistant in Glific. 
- They sit at two points in a conversation: before a beneficiary’s message reaches the assistant, and before the assistant’s reply goes back to the beneficiary.
- Each guardrail you switch on either quietly cleans up the text and lets the conversation continue, or stops the message entirely and sends a reply that you have written yourself.
- You will find them on the Guardrails tab of any assistant: `AI toolkit > AI Assistant > open an assistant > Guardrails`.
- All four guardrails are switched off when you start.

<img width="" height="" alt="Screenshot 2026-10-22 at 3 32 14 PM" src="https://github.com/user-attachments/assets/cde100b0-4855-45c8-9b1b-1b8320b4b5bf" />

## How a guardrail behaves when it is triggered
Every guardrail carries a badge that tells you how it acts when it is triggered. Click See how at the top of the tab to expand a diagram that explains both behaviours.
- **Fixes and passes on (green)**: the conversation continues as normal and only the flagged part is hidden or reworded.
- **Blocks and sends set reply (amber)**: the conversation is stopped, the assistant never sees the message, and the beneficiary receives the reply you configured instead.

<img width="" height="" alt="Screenshot 2026-10-22 at 3 32 58 PM" src="https://github.com/user-attachments/assets/a06595bf-82a3-4127-a1a5-50fb89b17334" />

## Guardrails on incoming messages
These checks run before a message reaches the assistant. Changes are saved with your next version.

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

### Scope Control (blocks and sends set reply)
- The assistant will not answer questions about the topics you list here. 
- Under `Configure` you add entries to `Disallowed topics` by typing a topic and pressing Enter or clicking Add, or
- by clicking one of the suggested chips: `Politics and Religion`, `Personal relationship advice`, `Legal and financial advice`, `Medical treatment claims`. Each topic you add appears as a chip that can be removed again.
- Below the topic list, `Set reply` is the message the beneficiary receives when this guardrail is triggered.
- Write it in any one language and Glific automatically translates it to match the language the user wrote in, so a Hindi message gets the reply in Hindi.
- A blocking guardrail without a set reply leaves the beneficiary with nothing, so always fill this in.
- To learn more about how scope control was tested, and its accuracy results go [here](https://projecttech4devai.github.io/kaapi-docs/guardrails/scope-control)

<img width="" height="" alt="Screenshot 2026-10-22 at 3 43 55 PM" src="https://github.com/user-attachments/assets/7bbbba09-be31-48f0-a379-590e7f0482cb" />



## Guardrails on assistant replies
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
10. When you are satisfied, click Go Live.
11. Publishing promotes the version to the next major number and makes it live in every flow that uses this assistant.

### Notes worth remembering
1. Guardrail changes are versioned like the rest of the assistant configuration, so they never take effect mid conversation without a deliberate publish.
2. The name, location and nationality detectors inside Privacy Protection are off by default because of the English model accuracy caveat, which matters for teams working in Indian languages.
3. Scope Control is the only guardrail that can end a conversation turn, so its set reply is effectively part of your assistant’s voice. 
