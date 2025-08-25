<h3>
  <table>
    <tr>
      <td><b>6 minutes read</b></td>
      <td style="padding-left:40px;"><b> Level: Advanced</b></td>
      <td style="padding-left:40px;"><b>Last Updated: August 2025</b></td>
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

## Steps to Integrate Bhashini Speech to Text in Glific Flows

`Speech-to-Text (STT)` function in Glific can be used to convert user-recorded audio messages into text. This is especially helpful when users prefer speaking over typing, or in cases where typing in local languages is difficult.

#### Step 1: Create a `Send message` node directing users to send their responses as audio messages, based on their preference.

#### Step 2: In the `Wait for response` node, select `has audio` as the message response type. Also, give a Result Name. In the screenshot below, `speech` is used as the result name.

<img width="509" height="390" alt="Screenshot 2025-08-10 at 12 10 35 AM" src="https://github.com/user-attachments/assets/9a273e08-6860-41ca-b693-9c22d952a81a" />

#### Step 3: Add a `Call Webhook` node. This is where we integrate the Bhashini service.

- Select the `Function` from the dropdown.
- In the `Function` field, enter `speech_to_text_with_bhasini`. The function name is pre-defined, you should always use the function `speech_to_text_with_bhasini` to call the Bhashini API for converting audio to text.
- Give the webhook result name - you can use any name. In the screenshot example, it’s named `bhashini_asr`.

  <img width="517" height="431" alt="Screenshot 2025-08-10 at 12 13 00 AM" src="https://github.com/user-attachments/assets/42e354bf-ec76-4d59-a1c0-1b610b45fcc3" />

#### Step 4: Click on `Function Body` (top right corner) and add the parameters as shown in the screenshot below

<img width="557" height="388" alt="Screenshot 2025-08-10 at 12 14 30 AM" src="https://github.com/user-attachments/assets/0130ebd7-cdf6-42e0-8505-a0c92821e990" />

- `speech` : It should be updated with the result name given for the audio file captured. In this example, the variable is named `speech` (Step 2), hence the value is `@results.speech.input` (If the audio note captured was saved as `query`, then the value will be `@results.query.input`)
- `contact` : Keep the value as given in the screenshot below - `@contact`

#### Step 5: Once the webhook is updated, you could always refer to the translated text as `@results.bhashini_asr.asr_response_text` to use it inside the flow. Add a `Send Message` node and paste this variable to show the converted text to the user.

<img width="636" height="458" alt="Screenshot 2025-08-10 at 12 18 22 AM" src="https://github.com/user-attachments/assets/a6e09ec4-1877-4462-8282-e3ede47125fe" />

The output of the text response from the Bhashini depends on the language preference of the user. For instance if a user has selected Hindi language, the response from Glific will be in Hindi script.

[Sample Flow](https://drive.google.com/file/d/1qkNGzLCQacrlP96GCytCihRGM4LhfokL/view) Click on the Sample Flow link to import it and explore how it works.

---

## Steps to Integrate Bhashini Text To Speech in Glific Flows

Text-to-Speech (TTS) function in Glific can be used to generate a voice note for any text message, whether it's typed by the end user or written by NGO staff. This allows organizations to make information more accessible, especially for end users who prefer audio over text.

<img width="629" height="405" alt="Screenshot 2025-08-10 at 12 25 41 AM" src="https://github.com/user-attachments/assets/705f7aee-3e47-445a-b058-c79840e318f5" />

#### Step 1: Create a `Send Message` node asking users to reply in text if they prefer.

#### Step 2: In the `Wait for Response` node, select `has only the phrase` as the message response type. Also, give a Result Name. In the screenshot below, `result_3` is used as the result name.

<img width="620" height="432" alt="Screenshot 2025-08-10 at 12 27 34 AM" src="https://github.com/user-attachments/assets/2c2da4dc-39e9-43c0-9112-14b8138999cf" />

#### Step 3: Create a 'Call Webhook' node.

- Select the `Function` from the dropdown.
- In the `Function` field, enter `nmt_tts_with_bhasini` The function name is pre-defined, you should always use the function `nmt_tts_with_bhasini` to call the Bhashini API for converting text to audio.
- Give the webhook result name - you can use any name. In the screenshot example, it’s named `bhashini_tts`.

<img width="619" height="515" alt="Screenshot 2025-08-10 at 12 32 29 AM" src="https://github.com/user-attachments/assets/58ecfb40-5a82-4ac0-b3cd-a5dddf35791d" />

#### Step 4: Click Function Body (top right corner) and add the parameters as shown in the screenshot below.

<img width="616" height="431" alt="Screenshot 2025-08-10 at 12 34 03 AM" src="https://github.com/user-attachments/assets/ce4a15ea-8eb7-4861-996a-03159e2bca96" />

- `text` : It should be updated with the result name given for the response/query provided by the user.
- `Source_language` : The original language of the text
- `target_language` : The language in which the voice note will be generated
- If translation is not needed, keep both `Source_language` and `target_language` the same.
- Supported Target Languages: `"tamil" "kannada" "malayalam" "telugu" "assamese" "gujarati" "bengali" "punjabi" "marathi" "urdu" "spanish" "english" "hindi"`

#### Step 5: Create a `send Message` node and paste the variable.

`@results.bhasini_tts.media_url` for the voice input. `Bhasini_tts` is the webhook result name used in the given example.

- Go to `Attachments` in the `Send Message` node
- Select `Expression` from the dropdown.
- Use the following expression: `@results.bhasini_tts.media_url`

<img width="610" height="249" alt="Screenshot 2025-08-10 at 12 38 39 AM" src="https://github.com/user-attachments/assets/48fc86ca-dd21-47fb-9178-66eaee0553a7" />

Please note: In order to get the voice notes as outputs, the Glific instance must be linked to the Google Cloud Storage for your organization. This is to facilitate storage of the voice notes generated by Bhashini as a result of the webhook call. To set up Google Cloud Storage [click here](https://glific.github.io/docs/docs/Onboarding/GCS%20Setup/Google%20Cloud%20Storage%20Setup/)

#### Step 6: To get the translated text out, create another send message node, and call the `@results.bhasini_tts.translated_text`.

<img width="549" height="416" alt="Screenshot 2025-08-10 at 12 41 10 AM" src="https://github.com/user-attachments/assets/77e31147-8e08-4db5-ba10-ce4b76552829" />

[Sample Flow](https://drive.google.com/file/d/1WCOLQMF-OgLVR7PNHXbggMSeDXMJbui7/view) Click on the Sample Flow link to import it and explore how it works.

---

### Blogs

[Blog Link](https://glific.org/the-importance-of-mother-language-in-the-indian-development-sector/)

---

### Video of Showcase

[Video Link](https://www.youtube.com/watch?v=zS83U9OJJzk)

_Watch from 25 minute mark to watch the Bhashini integration part_
