<h3>
  <table>
    <tr>
      <td><b>4 minutes read</b></td>
      <td style={{ paddingLeft: 40 }}><b>Level: Advanced</b></td>
      <td style={{ paddingLeft: 40 }}><b>Last Updated: September 2026</b></td>
    </tr>
  </table>
</h3>

# Setting a Custom Wait Time for AI Webhook Nodes

AI webhook nodes such as `filesearch-gpt`, `voice-filesearch-gpt`, `speech_to_text` and `text_to_speech` do not answer instantly. When the flow reaches one of these nodes, Glific sends the request to the AI service and **pauses the flow at that node** until the answer comes back.

By default Glific waits **60 seconds** for that answer. Long voice notes, large knowledge bases or a slow AI response can take longer than that, and when the 60 seconds are over the flow simply moves ahead without a response, so the end user gets an empty or missing message.

You can now set your own wait time on these nodes, **up to 5 minutes (300 seconds)**, by adding a `wait_time` parameter in the `Function Body`.

---

## Which nodes support `wait_time`

| Function name | What it does | Default wait | Maximum wait |
|---|---|---|---|
| `filesearch-gpt` | Answers a text question using an OpenAI Assistant | 60 seconds | 300 seconds |
| `voice-filesearch-gpt` | Answers a voice note using an OpenAI Assistant, replies in text and voice | 60 seconds | 300 seconds |
| `speech_to_text` | Converts a user's voice note into text | 60 seconds | 300 seconds |
| `text_to_speech` | Converts text into a voice note | 60 seconds | 300 seconds |

**Please note:** `wait_time` has no effect on any other webhook function (for example `parse_via_chat_gpt`, `parse_via_gpt_vision`, `geolocation`) or on a custom webhook that calls your own URL. Those nodes do not pause the flow, so the parameter is simply ignored there. For long-running webhooks of your own, use the [Wait for Result node](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Wait%20for%20result/) instead.

---

## How to set the wait time

#### Step 1: Open the `Call a Webhook` node and select one of the four functions listed above.

#### Step 2: Click on `Function Body` (top right corner).

For these four functions, the pre-filled body already contains an empty `wait_time` field.

<!-- SCREENSHOT: Function Body of a filesearch-gpt node showing the pre-filled "wait_time": "" field -->

#### Step 3: Enter the number of **seconds** you want Glific to wait.

For example, to wait 3 minutes for the assistant to answer:

```
{
  "question": "@results.question",
  "assistant_id": "asst_xxxxxxxxxxxxxxxxx",
  "wait_time": 180
}
```

<!-- SCREENSHOT: Same Function Body with "wait_time": 180 filled in -->

#### Step 4: Click `OK` and publish the flow.

---

## Rules to keep in mind

- The value is in **seconds**, not minutes. `180` means 3 minutes.
- Use a plain whole number (`180`) or a number in quotes (`"180"`). Both work.
- **A flow variable or expression will not work here.** `"wait_time": "@results.some_value"` is ignored, because Glific reads this value while validating the flow, before variables are filled in. Always enter a fixed number.
- If you leave the field blank, remove it, or enter something that is not a number, Glific falls back to the default of 60 seconds. Existing flows are therefore unaffected.
- The maximum allowed value is **300 seconds (5 minutes)**. If you enter a higher value, Glific shows a warning when you publish the flow and uses 300 seconds instead:

  > You've configured a wait_time of 600 seconds which exceeds the allowed wait time of 300 seconds. We will use the allowed wait time only.

  The flow still publishes and keeps working — it just waits 5 minutes rather than the value you asked for.
- The `wait_time` value is used by Glific only. It is never forwarded to the AI service, so it does not change the AI response in any way.

---

## What happens when the wait time is over

If the AI response has still not arrived when the wait time expires, the flow **resumes on its own** and continues to the next node. The result variables of that webhook (for example `@results.gptresponse.message` or `@results.voice.media_url`) will be empty, so the end user may receive an empty message.

To handle this gracefully:

- Add a `Wait for Result` / router after the AI node that checks whether the response is present, and send a fallback message such as *"Sorry, that took too long. Please try asking again."* when it is not.
- Check `Flows` → `Webhook logs` to see whether the call failed or simply took longer than the wait time.

---

## Choosing a good value

A longer wait time is not always better — the contact sits in silence while the flow is paused, and no other flow can take over for them during that time.

- **Text question over a small knowledge base (`filesearch-gpt`)**: the default 60 seconds is usually enough.
- **Long documents, large knowledge bases or detailed answers**: try 120 seconds.
- **Voice input and voice output (`voice-filesearch-gpt`, `speech_to_text`, `text_to_speech`)**: audio takes several times longer than text. 120–180 seconds is a good starting point, especially for voice notes longer than a minute.
- Increase the value in steps and check `Webhook logs` to see how long the calls actually take, rather than setting 300 seconds everywhere.

---

## Related articles

- [File Search Using OpenAI Assistants](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants/)
- [Text to speech capabilities in Glific](https://glific.github.io/docs/docs/Integrations/Text%20to%20speech%20capabilities%20in%20Glific/)
- [Call a webhook](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Call%20a%20webhook/)
