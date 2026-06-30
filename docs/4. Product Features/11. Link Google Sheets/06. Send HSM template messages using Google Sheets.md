___
<h3>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Intermediate</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>



### Send HSM template messages using Google Sheets

Template messages could be sent using Google Sheets using `Read Google Sheets`. This is generally useful when different template messages need to be scheduled & sent regularly to the beneficiaries. 
Let us dive in a bit deeper by looking at the steps involved : 

1. Create the template messages that you'd like to send via Google Sheets using the normal method. Refer [Creating Template Messages](https://glific.github.io/docs/docs/Product%20Features/HSM%20Templates/#hsm-template-creation--approval-submission)

2. Once the template is created, make note of the UUID of the template messages you need to share using Google Sheets. Refer the screenshot below :
 
<img width="1280" alt="Screenshot 2024-02-29 at 1 58 09 PM" src="https://github.com/glific/docs/assets/141305477/502a5e35-86dc-4770-819e-9c6d3292c526"/>

3. Create a Google Sheet with two headers, `Key` and `template_uuid` as shown below. Usually the `key` column will be having dates on which the individual templates need to be sent.
   <img width="730" alt="Screenshot 2023-09-15 at 1 25 33 PM" src="https://user-images.githubusercontent.com/132430123/268214931-e64e1019-ee86-49cc-8ec0-10d1d816d56d.png"/>
4. Now let us setup the flow. The flow starts with a `Link Google Sheets` node which has the Google Sheets we created linked. This is how the node looks like :
   
![Screenshot 2023-09-15 at 1 50 48 PM](https://user-images.githubusercontent.com/132430123/268221544-0320cd68-1fbd-42fb-9d98-fd3740acfe18.png)

As you can see, the row input field is given an expression `@calendar.current_date` which tries to match the current date value with a `Key` value. If a match is found, then that row is chosen.

5. In the next step, `Send contact a message` is used and an expression is given in place of the template selection drop-down. The expression reads `<%= Glific.send_template("@results.sheet.template_uuid", ["@contact.name"] ) %>` and if no variables then `<%= Glific.send_template("@results.sheet.template_uuid", [] ) %>`
   

   
In this expression, the `template_uuid` matching the row in the given date gets send to the user. The expression also passes the value of the contact's name. You can pass multiple variables in this expression, if the template message demands it, using comma separation.

In this way, you can use Google Sheets for sending template messages. With the use of [Triggers](https://glific.github.io/docs/docs/Product%20Features/Triggers/) you'll be able to schedule different template messages for specific dates using Google Sheets, enabling you to do it in a single flow, instead of creating separate flows for separate templates. This is particularly useful, when you plan to share a set of instructions/ advisory/ content in a scheduled manner in specific dates & let's you use dynamic content for the same.
