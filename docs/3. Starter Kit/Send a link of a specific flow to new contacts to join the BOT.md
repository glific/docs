> ### **3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Beginner`**

## Send a link of a specific flow to new contacts to join the BOT

You can configure a link like below and send to the contacts through SMS or emails.

Once they will click on the link, it will redirect them to a WhatsApp with the message, which they can send to start the conversation.


**Method 1:**  Commonly used to onboard existing  users to chatbot.

[https://wa.me/+91&lt;10 digit bot phone number&gt;?text=](https://wa.me/+917772309999?text=Hi)&lt;text you want user to send&gt;

Eg: A URL like the one below  can be used to trigger your new contact flow with optin. [https://wa.me/+91&lt;your bot phone number&gt;?text=Hi](https://wa.me/+917772309999?text=Hi)

Whatsapp documentation for the same : [https://faq.whatsapp.com/452366545421244/?helpref=uf_share](https://faq.whatsapp.com/452366545421244/?helpref=uf_share)

**Method 2:**

https://api.whatsapp.com/send?phone=**BOTNumber**&amp;text=**Message**

- **https://api.whatsapp.com/send?phone=** - link prefix
- **Your BOT Number** - Ex. 917302307943
- **text=** - fixed content of the link 
- **Message** - This will be message which will be posted on the WhatsApp.  Ex. Hi

[https://api.whatsapp.com/send?phone=917302307943&amp;text=Hi%20Glific%20team](https://api.whatsapp.com/send?phone=917302307943&text=Hi%20Glific%20team)

Message will look as given below for contacts in WhatsApp

![image](https://user-images.githubusercontent.com/32592458/220826084-fe5c3a72-dcd0-4cf1-bfc6-d4a626246b67.png)

## Creating multiple QR codes

To able to make multiple QR codes according to the specific flow follow the below steps:

1) Create the link of a specific flow. [Read Here](https://glific.github.io/docs/docs/FAQ/Send%20a%20link%20of%20a%20specific%20flow%20to%20new%20contacts%20to%20join%20the%20BOT/) to know more on how to create link.

2) Go to [Bitly.com](https://bitly.com/) and then generate QR codes.
