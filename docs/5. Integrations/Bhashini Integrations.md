<h3>
  <table>
    <tr>
      <td><b>6 minutes read</b></td>
      <td style={{ paddingLeft: 40 }}><b>Level: Advanced</b></td>
      <td style={{ paddingLeft: 40 }}><b>Last Updated: December 2025</b></td>
    </tr>
  </table>
</h3>

# Bhashini Integration in Glific: Speech-to-Text and Text-to-Speech

Bhashini is an initiative by the Government of India aimed at making digital services and the internet accessible in all Indian languages.
The integration of Bhashini into Glific enables NGOs and organizations to offer real-time translation and transliteration capabilities in various Indian languages, ensuring effective communication with end users in their preferred languages.

---

### This integration can be especially useful in use cases such as:

- Translating chatbot content for multilingual campaigns.
- Enabling users to respond in regional languages.
- Transliteration helps convert text from one script to another, for example: writing Hindi words using English letters.

Bhashini specializes in Indic language translation and transliteration, supporting a wide range of languages and dialects. You can learn more about the platform [here](https://bhashini.gov.in)

**Note: Bhashini integration is still in an experimental phase. While it enables powerful multilingual speech capabilities, users may occasionally notice variations in response quality or stability. As development continues, these aspects are expected to improve over time.**

## Steps to Integrate Bhashini Speech to Text in Glific Flows

`Speech-to-Text (STT)` function in Glific can be used to convert user-recorded audio messages into text. This is especially helpful when users prefer speaking over typing, or in cases where typing in local languages is difficult.

#### Step 1: Create a `Send message` node directing users to send their responses as audio messages, based on their preference.

#### Step 2: In the `Wait for response` node, select `has audio` as the message response type. Also, give a Result Name. In the screenshot below, `speech` is used as the result name.

<img width="509" height="390" alt="Screenshot 2025-08-10 at 12 10 35 AM" src="https://github.com/user-attachments/assets/9a273e08-6860-41ca-b693-9c22d952a81a" />

#### Step 3: Add a `Call Webhook` node. This is where we integrate the Bhashini service.

- By default, `Function` would be selected. Leave this as it is.

<img width="471" height="390" alt="Screenshot 2025-12-03 at 9 13 38 AM" src="https://github.com/user-attachments/assets/557ab322-145a-4c58-a213-29af62deaa79" />

- In the `Function` field, select the predefined function name  `speech_to_text_with_bhasini`, from the dropdown. This function is used to call Bhashini API for converting audio to text.

<img width="462" height="381" alt="Screenshot 2025-12-03 at 9 14 39 AM" src="https://github.com/user-attachments/assets/efa4170e-a782-4bab-89cd-189f254dff21" />

- Give the webhook result name - you can use any name. In the screenshot example, it’s named `bhashini_asr`.
  
<img width="431" height="361" alt="Screenshot 2025-12-03 at 9 14 59 AM" src="https://github.com/user-attachments/assets/87521a2a-7cf0-461b-8483-4ff9bca9b8fa" />

#### Step 4: Click on `Function Body` (top right corner). You would see the following.

<img width="511" height="358" alt="Screenshot 2025-12-03 at 9 15 55 AM" src="https://github.com/user-attachments/assets/a50826ec-b036-4403-b275-c254b8fa7ca8" />

Add the parameters as shown in the screenshot below.

<img width="557" height="388" alt="Screenshot 2025-08-10 at 12 14 30 AM" src="https://github.com/user-attachments/assets/0130ebd7-cdf6-42e0-8505-a0c92821e990" />

- `speech` : It should be updated with the result name given for the audio file captured. In this example, the variable is named `speech` (Step 2), hence the value is `@results.speech.input` (If the audio note captured was saved as `query`, then the value will be `@results.query.input`)
- `contact` : Keep the value as given in the screenshot below - `@contact`

#### Step 5: Once the webhook is updated, you could always refer to the translated text as `@results.bhashini_asr.asr_response_text` to use it inside the flow. 
Add a `Send Message` node and paste this variable to show the converted text to the user.


<img width="761" height="606" alt="Screenshot 2025-09-25 at 12 46 56 AM" src="https://github.com/user-attachments/assets/ba852558-826e-40ff-9790-0697dc720a1a" />


[Sample Flow](https://drive.google.com/file/d/1F5oJGRxE7G6RgpyG77q2srqnikUZMDab/view?usp=sharing) Click on the Sample Flow link to import it and explore how it works.

---

## Steps to Integrate Bhashini Text To Speech in Glific Flows

Text-to-Speech (TTS) function in Glific can be used to generate a voice note for any text message, whether it's typed by the end user or written by NGO staff. This allows organizations to make information more accessible, especially for end users who prefer audio over text.

<img width="593" height="673" alt="Screenshot 2025-09-25 at 12 51 19 AM" src="https://github.com/user-attachments/assets/4094f6fe-e832-4f59-a5d4-197591820369" />


#### Step 1: Create a `Send Message` node asking users to reply in text if they prefer.

#### Step 2: In the `Wait for Response` node, select `has only the phrase` as the message response type. Also, give a Result Name. In the screenshot below, `result_3` is used as the result name.

<img width="620" height="432" alt="Screenshot 2025-08-10 at 12 27 34 AM" src="https://github.com/user-attachments/assets/2c2da4dc-39e9-43c0-9112-14b8138999cf" />

#### Step 3: Create a 'Call Webhook' node.

- By default, `Function` would be selected. Leave this as it is.

<img width="472" height="394" alt="Screenshot 2025-12-03 at 9 20 23 AM" src="https://github.com/user-attachments/assets/fdae198c-9c27-40c5-8430-1ebc62851f67" />

- In the `Function` field, select the predefined function name `nmt_tts_with_bhasini` from the dropdown. This function is used to call Bhashini API for converting text to audio.

<img width="439" height="366" alt="Screenshot 2025-12-03 at 9 21 20 AM" src="https://github.com/user-attachments/assets/5466c6f8-4cc1-4545-a77b-03d5af145f25" />

- Give the webhook result name - you can use any name. In the screenshot example, it’s named `bhashini_tts`.

<img width="548" height="461" alt="Screenshot 2025-12-03 at 9 21 53 AM" src="https://github.com/user-attachments/assets/0611aef2-4182-4952-9d40-a9b79715cfdb" />

#### Step 4: Click Function Body (top right corner). You would see the following.

<img width="516" height="357" alt="Screenshot 2025-12-03 at 9 22 32 AM" src="https://github.com/user-attachments/assets/84e25fde-53ec-4e6a-9dea-c2dd4d5bd243" />

Add the parameters as shown in the screenshot below.

<img width="616" height="431" alt="Screenshot 2025-08-10 at 12 34 03 AM" src="https://github.com/user-attachments/assets/ce4a15ea-8eb7-4861-996a-03159e2bca96" />

- `text` : It should be updated with the result name given for the response/query provided by the user.
- `Source_language` : The original language of the text
- `target_language` : The language in which the voice note will be generated
- If translation is not needed, keep both `Source_language` and `target_language` the same.
- Supported Target Languages: `"tamil" "kannada" "malayalam" "telugu" "assamese" "gujarati" "bengali" "punjabi" "marathi" "urdu" "spanish" "english" "hindi"`

#### Step 5: Create a `send Message` node and paste the variable.

`@results.bhashini_tts.media_url` for the voice input. `Bhashini_tts` is the webhook result name used in the given example.

- Go to `Attachments` in the `Send Message` node
- Select `Expression` from the dropdown.
- Use the following expression: `@results.bhashini_tts.media_url`

<img width="588" height="239" alt="Screenshot 2025-09-25 at 12 56 50 AM" src="https://github.com/user-attachments/assets/ebf00923-4da8-4944-ab5f-b929b52ce5fc" />

Please note: In order to get the voice notes as outputs, the Glific instance must be linked to the Google Cloud Storage for your organization. This is to facilitate storage of the voice notes generated by Bhashini as a result of the webhook call. To set up Google Cloud Storage [click here](https://glific.github.io/docs/docs/Pre%20Onboarding/Google%20Cloud%20Storage%20Setup%20-%20GCS)

#### Step 6: To get the translated text out, create another send message node, and call the `@results.bhashini_tts.translated_text`.

<img width="586" height="451" alt="Screenshot 2025-09-25 at 12 57 47 AM" src="https://github.com/user-attachments/assets/bcbd8b0f-1b80-4d6c-8c2b-9753b2802d8e" />

[Sample Flow](https://drive.google.com/file/d/1WCOLQMF-OgLVR7PNHXbggMSeDXMJbui7/view) Click on the Sample Flow link to import it and explore how it works.


## Using OpenAI Speech Engine for Text-to-Speech

Apart from Bhashini, the OpenAI speech engine can also be used to generate text-to-speech (TTS) responses. Since we are also experimenting with Bhashini, the response quality may sometimes be inconsistent or unreliable in a few languages.This is another alternative, users can try both options to see which gives better results for their audience and language preferences.

### How to configure:
- In the `Function Body`, set the speech engine to `open-ai`.
- Keep the remaining steps the same as those mentioned in the Speech-to-Text section above.
  
<img width="590" height="412" alt="Screenshot 2025-09-25 at 1 00 36 AM" src="https://github.com/user-attachments/assets/1111db5f-137d-4825-8ca9-d3e6a00fe53f" />

---

### Blogs

[Blog Link](https://glific.org/the-importance-of-mother-language-in-the-indian-development-sector/)

---

### Video of Showcase

[Video Link](https://www.youtube.com/watch?v=zS83U9OJJzk)

_Watch from 25 minute mark to watch the Bhashini integration part_
