<h4>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: December 2026</b></td>
  </tr>
</table>
</h4>

# How to enable a language for an organisation

Once a language is enabled on Glific, content in that language can be added to [flows](https://glific.github.io/docs/docs/Product%20Features/Flows/Others/Flows%20Auto%20translate/), [HSM Templates](https://glific.github.io/docs/docs/Product%20Features/HSM%20Templates/#approving-multi-lingual-hsm-templates) and [Interactive Messages](https://glific.github.io/docs/docs/Product%20Features/Interactive%20Messages/#use-interactive-messages-in-different-languages), so users receive messages in their preferred language.

## Why enable a language

A new language is enabled when an NGO needs to reach its users in a language that is not yet set up in its Glific account. Some common situations are:

- **A program is expanding to a new area.**
  A program that started in one state or region may expand to another where users speak a different language.
  For example, a maternal health program that runs in Hindi expands to Karnataka, where mothers prefer Kannada.
- **Users in the same program may prefer different languages.**
  Within the same program, some users may understand content better in a language other than the one currently in use. Adding that language helps these users engage with the content more comfortably.
  For example, most parents in an education program prefer Hindi, but parents in a few communities prefer Marathi.
- **Field staff or volunteers work in a local language.**
  Content shared in the local language is easier for field staff and volunteers to understand and act on.
  For example, ASHA workers (community health workers) in Odisha understand training reminders best in Odia.

> ⓘ **NOTE**
>
> Only an **Admin** can enable a language. Admin is a role in Glific that has full access to the platform, including **Settings**. The Manager and Staff roles do not have access to Settings. If Settings is not visible, contact an Admin in the organisation. To learn more about roles, see [Staff Management & Role Management](https://glific.github.io/docs/docs/Product%20Features/Others/Staff%20Management%20&%20Role%20Management/).

## Steps

1. Select the profile name at the bottom of the left menu.
2. Select **Settings**.

   <img width="1999" height="1086" alt="image5" src="https://github.com/user-attachments/assets/14048d68-ced6-466e-b5bd-6bbd8d58e437" />

3. On the **Organization** page, find **Supported languages**. It lists every language already enabled for the organisation.
4. Select the arrow (▼) on the right side of **Supported languages**.

   <img width="1999" height="1077" alt="image2" src="https://github.com/user-attachments/assets/87790960-6042-46e7-840b-5a651af54028" />

5. Select the checkbox next to each language to enable.

   <img width="1999" height="1108" alt="image1" src="https://github.com/user-attachments/assets/b64b93fd-77b9-48ec-84df-e9676c8e0b3e" />

6. Below **Supported languages**, find the **Default language** box. The language selected here must also be selected in **Supported languages**.

   For example, if the Default language is English, keep English selected in Supported languages. If English is removed from Supported languages, Glific shows the error "Default language needs to be an active language." and the changes are not saved.

   <img width="1999" height="1086" alt="image3" src="https://github.com/user-attachments/assets/c5ed91c5-df62-46c0-acb9-275f1b43f04d" />

7. Scroll down and select **Save**.

   <img width="1999" height="1093" alt="image4" src="https://github.com/user-attachments/assets/540017e2-3837-447b-a99b-92382f134000" />

The new language is now enabled. The content still needs to be translated before users can receive messages in it. See [Translating flows and messages](#translating-flows-and-messages) below. To disable a language, follow steps 1 to 3 above, then select the **X** next to the language name in Supported languages and select **Save**.

## Why the default language matters

The default language is the main language of an organisation's Glific account. Every flow is created in this language first, and translations for the other enabled languages are added to it.

In Glific, each user is saved as a contact. The default language is applicable to:

- New contacts who message the chatbot
- Contacts uploaded in bulk without a language
- Existing contacts who have no language assigned

Keep these points in mind:

- **Choose the language most users speak.** For example, if most users of a program speak Hindi, set Hindi as the default language. If English is the default instead, every new user is set to English and receives messages in English until their language is changed.
- **Translate every part of the flow.** Any part that is not translated will reach the user in the default language or may not work as expected. Make sure translations are added for all of these:
  - Send the contact a message nodes
  - HSM Templates
  - Interactive Messages
  - Wait for Response nodes

## Translating flows and messages

Enabling a language does not translate the content. Each part of a flow is translated separately:

1. **Flow messages:** translate the messages in the flow, either with auto-translate or manually. Auto-translate only covers the "Send the contact a message" nodes, so the parts below need their own translations. See [Multilingual Flow Setup with Auto Translation](https://glific.github.io/docs/docs/Product%20Features/Flows/Others/Flows%20Auto%20translate/).
2. **HSM Templates:** add the new language to each template and submit it for approval. WhatsApp approves each language separately. Once approved, users receive the template in the language set in their profile. See [Approving multi-lingual HSM templates](https://glific.github.io/docs/docs/Product%20Features/HSM%20Templates/#approving-multi-lingual-hsm-templates).
3. **Interactive Messages:** open the message and add the translation for the message text and each button or list item. See [Using interactive messages in different languages](https://glific.github.io/docs/docs/Product%20Features/Interactive%20Messages/#use-interactive-messages-in-different-languages).
4. **Wait for Response:** in the flow editor, select the new language at the top right, open the [Wait for Response](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Wait%20for%20the%20contact%20to%20respond) node, and add the translated replies in the **Rule Translations** tab. Without this, replies in the new language are not matched, and the flow may stop. See [Steps to add translations](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Send%20the%20contact%20an%20interactive%20message#steps-to-add-translations).

After adding the translations, test the flow in each language to make sure it works from start to end.

## Available languages

Glific currently supports around 20 languages, such as English, Hindi, Marathi, Punjabi, Bengali, Gujarati, Tamil, Telugu, Kannada, Malayalam, and Urdu. To check if a language is available, open the **Supported languages** dropdown (step 4 above). If the language is in the dropdown, follow the steps above to enable it. If it is not in the dropdown, refer to the next section.

## Adding a language that is not in the list

If a language is not in the **Supported languages** dropdown, contact the Glific support team with the name of the language, and the team can enable it. See [Get Glific Support](https://glific.github.io/docs/docs/FAQ/Get%20Glific%20Support/).

HSM Templates can only be created in languages that Gupshup supports. Gupshup supports around 70 languages. See [Gupshup's list of supported languages](https://support.gupshup.io/hc/en-us/articles/360013321939-Which-languages-are-supported-for-message-templates). If Glific enables a language that Gupshup does not support, it can be used in flows and Interactive Messages, but not in HSM Templates.
