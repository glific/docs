

<h3>
  <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: August 2025</b></td>
  </tr>
</table>
</h3>




# Multilingual Flow Setup with Auto Translation

This feature allows you to auto-translate content from the flow’s default language and populate translations in other languages enabled in your Glific instance. This helps you reach users in their preferred language without manually translating each message.

Please Note: *This feature is currently in beta and can be enabled/disabled for your organization on request via the Glific Discord channel or by reaching out to your SPOC from the Glific team.*


### When and Why to Use

* You want to send the same message to users who speak different languages.  
* You have a flow in default language (which can be any language) and need quick translations for other selected languages.  
* You want to save time by translating automatically but still check and improve the translations if needed.


### Things You Can Do

* Create your flow in default language  
* Have translations auto populated for all the languages selected in your Glific instance.  
* Export flows as CSV with or without translations.  
* Have the flow exported as CSV (with or without translations) to be proofread and corrected by language experts  
* Import corrected translations back into the flow as CSV.  

---


### How It Works

**Step 1**: Create Flow in Default Language

* Start by creating your flow.

**Step 2**: Use the Translate Button

* In the Flow Editor, select the ‘Translate’ button in the top bar.

<img width="805" height="225" alt="Screenshot 2025-09-15 at 12 27 51 PM" src="https://github.com/user-attachments/assets/2bbb8cf8-48e2-40ef-997b-4b5b48a6e58e" />

**Step 3**: Choose from 4 Options

* There are 4 options to get Translations
    
    <img width="391" height="342" alt="Screenshot 2025-09-15 at 12 30 28 PM" src="https://github.com/user-attachments/assets/9df93344-1b06-4f0c-8130-eb7ea1dfa07d" />


---


### Automatic translation

* Translates all content in "Send a Message" nodes from the default language into all enabled languages.  
* This directly updates the flow.  
* Select ‘Automatic translation’ and click on ‘Submit’, publishing the flow will save the translations. 
<img width="395" height="342" alt="Screenshot 2025-09-15 at 12 31 55 PM" src="https://github.com/user-attachments/assets/093d2f0f-38e3-4ee8-95a2-16a5976fcb29" />



### Export with auto translate

* Translates content from the default language and exports the flow as a CSV file for proofreading.  
* Select ‘Export with auto translate’ and click on ‘Submit’
  
<img width="407" height="359" alt="Screenshot 2025-09-15 at 12 32 38 PM" src="https://github.com/user-attachments/assets/2fa500cb-bcb0-473f-8c0c-ab8cfe057720" />



Example of exported CSV file:

<img width="755" height="428" alt="Screenshot 2025-09-15 at 12 33 43 PM" src="https://github.com/user-attachments/assets/5080af62-b147-4839-91e8-11bff629c8c6" />


* The flow itself remains unchanged.  
* Upload the edited CSV via Import Translation to apply changes to the flow, Select Import translation and import CSV file.

  
<img width="669" height="622" alt="Screenshot 2025-09-15 at 12 35 54 PM" src="https://github.com/user-attachments/assets/51955955-252d-4122-9ab0-5af733cc0a22" />


### Export translations

* Exports existing translations into a CSV.  
* Use this option to manually add translations and import the CSV content with translations in the flow directly.  
* Can also be used for proofreading of existing translations.  
* Select ‘Export translation’ and click on ‘Submit’ to export translations.
  
<img width="688" height="620" alt="Screenshot 2025-09-15 at 12 39 24 PM" src="https://github.com/user-attachments/assets/7109e77c-b4fc-430c-aaeb-57e17549b68a" />


### Import translations

* This allows you to import proofread and corrected content in CSV format  
* Automatically updates the content in the corresponding Glific flow.  
* Select Import translation and import CSV file.
  
<img width="736" height="704" alt="Screenshot 2025-09-15 at 12 41 11 PM" src="https://github.com/user-attachments/assets/bc376b47-2928-4d91-82b9-758f39acaf71" />


---


### Things to watch out

* This is not instantaneous and will take some buffering time (5-7 mins) depending on the number of languages, the number of ‘send message nodes’ and the amount of content they contain.  
* Only content present in send contact a message’ nodes from the flow are translated, which means at present \- content in ‘ wait for response’ nodes, is not translated and content in “interactive messages” is translated separately.  
* For flows with a large number of nodes, the translation may not complete in the first attempt. Running the translation process a second time will translate any remaining nodes.  
* Exported CSVs of flows without translations can be automatically translated, and after proofreading, they can be imported back into the flow.  
* While importing translations  
  * Do not change the formatting of the exported CSV  
  * Do not edit anything in the fields action, UUID, language codes  
  * Uploading CSV with Blank/ Empty cells where translations are expected,  will erase the translations in the given nodes (if the translations are already present)  
* In case automatic translations fail, which may happen for flows that contain large text messages (more than 200 words in the same node). In such cases,’ export without translations’ and then create translations using ‘=googletranslate’ formula then’ import translation’.  
  Eg: for translating text from English to Kannada. The text is stored in cell \- A1.  
  Here’s the formula  ‘=GOOGLETRANSLATE("A1", "en", "kn")’  
  en \- code for english language  
  kn \- code for Kannada language  

  
<img width="825" height="308" alt="Screenshot 2025-09-15 at 12 43 54 PM" src="https://github.com/user-attachments/assets/ea1a53a0-6bb9-4725-87e9-c6a5bed29231" />


### When it will not work

* In case there is multilingual content flows in the default language.  
* In case default flow is in a language other than English.  
* In case there are multiple send contact a message nodes with more than 200 words of text.  
* In case there are loads of active languages in the given flow.  
* In case of low connectivity.


---

### Under the hood

* The translation is being done by GPT3.5 model. Glific is using this via Open AI API keys acquired and for the initial phase bearing the cost of token being exchanged.  
* The system is designed in a way that in future, other translation engines ex- Google translate etc can be plugged in to replace the GPT3.5 model.  
* Requirement [Documents](https://docs.google.com/document/d/1_bxakmNM3QQf--OxU3tRGmAsxy9MV56tsjrH3wLbPPo/edit?tab=t.0#heading=h.719pbrrwuvy9)  
* Showcase [PPT](https://docs.google.com/presentation/d/1gZDkBm9ybS2rZi2MX4vV6espf_3qMWRgM9YD5_JQ7Og/edit?slide=id.p#slide=id.p)

