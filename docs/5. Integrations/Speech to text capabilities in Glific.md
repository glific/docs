<h3>
  <table>
    <tr>
      <td><b>6 minutes read</b></td>
      <td style={{ paddingLeft: 40 }}><b>Level: Advanced</b></td>
      <td style={{ paddingLeft: 40 }}><b>Last Updated: April 2026</b></td>
    </tr>
  </table>
</h3>

# Speech-to-Text Capabilities in Glific
This integration in Glific enables NGOs and organizations to offer real-time transcriptions of incoming voice notes from the user in various Indian languages, and translation to a common language. Glific uses Google's Gemini models by default to accomplish these tasks.

This integration can be especially useful in use cases requiring beneficiaries to respond in voice notes in their regional languages, and being able to have the voice notes transcribed in text format in a uniform common output language (ex- english)

# Steps to use Speech to Text in Glific Flows
Speech-to-Text (STT) can be used to convert user-recorded audio messages into text. This is especially helpful when users prefer speaking over typing, or in cases where typing in local languages is difficult.

## Step 1: Create a Send message node directing users to send their responses as audio messages, based on their preference.

### Step 2: In the Wait for response node, select has audio as the message response type. Also, give a Result Name. In the screenshot below, speech is used as the result name.

<img width="567" height="448" alt="Screenshot 2026-05-08 at 4 20 55 PM" src="https://github.com/user-attachments/assets/1ada49cc-df7b-435f-9f5f-4aad6b052e04" />

### Step 3: Add a Call Webhook node.

- By default, `Function` would be selected. Leave this as it is. 
- In the Function field, select the predefined function name `speech_to_text`, from the dropdown. This function calls the Gemini 2.5 Pro model for converting audio to text.

<img width="555" height="461" alt="Screenshot 2026-05-08 at 4 22 06 PM" src="https://github.com/user-attachments/assets/d5924491-af72-4b13-a4ce-7fe8664ea5c9" />

- Give the webhook result name - you can use any name. In the screenshot example, it’s named `result`
.

### Step 4: Click on Function Body (top right corner). You would see the following.

-  Add the parameters as shown in the screenshot below.
<img width="666" height="484" alt="Screenshot 2026-05-08 at 4 23 09 PM" src="https://github.com/user-attachments/assets/6483c380-23d9-4e07-90c7-e7589b78de96" />

- `speech` : It should be updated with the result name given for the audio file captured. In this example, the variable is named speech (Step 2), hence the value is `@results.speech.input` (If the audio note captured was saved as result_1, then the value will be `@results.result_1.input`)

<img width="669" height="477" alt="Screenshot 2026-05-08 at 4 24 30 PM" src="https://github.com/user-attachments/assets/a3d34ac4-0eb5-4994-9eaf-2d7615dd1ce4" />

### Step 5: Once the webhook has run, the transcribed text can be referenced as `@results.result.message`

Add a Send Message node and paste this variable to show the converted text to the user. 

<img width="683" height="621" alt="Screenshot 2026-05-08 at 4 25 19 PM" src="https://github.com/user-attachments/assets/adb845df-0339-4ce3-a47b-e15aef8ce8be" />


# Default behaviour for speech to text webhook calls 
- By default, the speech to text function performs transcription of the incoming voice note only using `gemini-2.5-pro` model and gives a text output in the same language as the language of the incoming voice note.

# Additional parameters for performing transcription + translation 
To get the output text of the voice notes translated to a desired output language (ex- hindi or english) an additional parameter specifying `output_language` can be passed like shown below 

Expected values for `output_langauge` parameter is the language name ex- `hindi`, `english`, `tamil` , `telugu`, `marathi` etc. 

<img width="676" height="477" alt="Screenshot 2026-05-08 at 4 26 18 PM" src="https://github.com/user-attachments/assets/6e35b738-182c-4de2-99a7-1c1017d72dd7" />


By specifying the `output_language` parameter, this configuration ensures that all voice notes are transcribed and the final text is available consistently in the same language, no matter the language of the incoming voice note. 


## Using other providers 
Apart from Gemini which is the default speech engine used by Glific. Eleven Labs can be used as a provider. This can be configured as the provider to use for transcription purposes be explicitly providing additional parameters of `provider` and `model` 

### Eleven Labs

To reference the eleven labs provider, pass the following additional parameters in the webhook body
```
"provider":"elevenlabs",
"model":"scribe_v2"

```
<img width="678" height="484" alt="Screenshot 2026-05-08 at 4 26 45 PM" src="https://github.com/user-attachments/assets/9f35331c-7f39-44ad-9471-8042281acfa8" />

Eleven labs integration does not support translation to any specified output language.

## Main differences between Gemini and Eleven Labs:
#### Translation Support

- Gemini: Full translation support - can transcribe audio in one language and translate to another (e.g., Hindi audio → English text)
- ElevenLabs: No translation - only transcribes audio in its original language. Good for transcription-only use cases

#### Language Support & Flexibility

- Gemini: Supports auto-language detection AND explicit language specification. More flexible for mixed-language or unknown audio
- ElevenLabs: Limited to 13 specific languages (mostly Indic languages + English). Requires knowing or auto-detecting the language beforehand

## Decision Guide:

- Choose ElevenLabs if: You only need simple, fast transcription of supported languages (mainly Indic languages) and want a lightweight solution
- Else continue to stick with the default model of gemini provided by Glific 

