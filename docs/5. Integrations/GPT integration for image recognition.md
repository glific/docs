
<h3>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: October 2025</b></td>
  </tr>
</table>
</h3>


# GPT Integration for Image Recognition

This feature helps to recognize and understand the contents of images shared by the end users. It is useful for a variety of use cases such as:

- Grading worksheets or assignments
- Reading and digitizing handwritten notes
- Checking skin conditions, wounds, or other health-related visuals
- Reviewing the condition of water, crops, or surroundings

With GPT’s image processing abilities, Glific makes it easy to automate tasks that involve looking at and understanding images.


**To get the best results:**
- Use clear and well-lit images
- Avoid blurry or low-quality photos
- Make sure the main content is visible and not blocked

---


## How to Use in a Flow

#### Step1: Collect Image Input from the end user
- Create a `send a message` node directing users to send images as their response, based on their preference.
- In the `Wait for response` node, select `Has image` as the message response type. Also, give a `Result Name`. In the screenshot below, `image` is used as the result name.

<img width="500" height="383" alt="Screenshot 2025-09-29 at 1 29 38 AM" src="https://github.com/user-attachments/assets/4d685fb3-b126-4490-bb92-23fd9f30ed0b" />


#### Step 2: Add a Webhook Node to Process the Image
- Select the `function` from the dropdown.
- In the function field, enter `parse_via_gpt_vision`, this function name is pre-defined.
- Give the webhook result name - you can use any name. In the screenshot example, it’s named `gptvision`.

<img width="493" height="408" alt="Screenshot 2025-09-29 at 1 46 28 AM" src="https://github.com/user-attachments/assets/1162f959-f923-4f5d-9214-3337456e8bda" />

---

<img width="504" height="553" alt="Screenshot 2025-09-29 at 1 46 58 AM" src="https://github.com/user-attachments/assets/b398e16c-5a6b-48ac-8c16-680c30728690" />


#### Step 3: Add Parameters in Function Body
- Click on `Function Body` and pass the parameters as shown in the below screenshot.

<img width="493" height="343" alt="Screenshot 2025-09-29 at 1 51 22 AM" src="https://github.com/user-attachments/assets/cfafbb40-04da-4321-9cf8-d457ff08835e" />


- `Url`: in this field pass the flow variable accepting the image response from the user (In the given example `image` is the result name).
- `prompt`: in this field pass the prompt, or instructions you wish to convey to the AI model towards processing the image input.
- `Model`:  in this field pass the gpt model.


#### Step 4: Display the text response
- Create a `Send Message` node.
- Use `@results.webhook_result_name.response` to show the text response (In the given example `gptvision` is the webhook result name).


<img width="494" height="378" alt="Screenshot 2025-09-29 at 1 54 03 AM" src="https://github.com/user-attachments/assets/fa53b6af-a5f2-41cc-b058-91a6991ed611" />


---

## Sample Flow
Try this [Sample Flow](https://drive.google.com/file/d/1Czi9Bh7YIWGeZwpveXPu-xTGMml-h_R9/view?usp=sharing) to test the GPT Vision integration.








