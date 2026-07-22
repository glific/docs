> ### **2 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**
___

**When your AI (Dialogflow, ChatGPT, or another classifier) can't understand a contact's message, you can automatically label it and hand it off to a human agent — all in one place in your flow.**

___

## When to use this

If you're using an AI integration to answer contact questions, there's usually a "fallback" or "default" path in your flow — the branch a contact ends up in when the AI doesn't recognize their message. This is the ideal place to:

1. **Label the message** (for example, `AI_unhandled`) so you can track how often the AI fails to understand contacts.
2. **Open a support ticket** right away, so a human agent can step in and help.

Both of these are individual flow actions, documented under **Product Features > Flows > Flow Actions** as `Label the incoming message` and `Open a ticket with a human agent`. This page shows how to chain them together for this specific use case.

## Setting it up

In the branch of your flow where the AI fails to match an intent (the "Other" or default category coming out of your classifier's split node), add two connected nodes:

1. **Label the incoming message** — pick this action from the node dropdown, then create (or select) a label such as `AI_unhandled`. Every message that lands here gets tagged with this label, which you can later filter or report on.

   ![Label the incoming message action, with the label field set to AI_unhandled](/img/ai-fallback-ticket/label-unhandled-message.png)

2. **Open a ticket with a human agent** — connect this node right after the label node by dragging from the red exit circle on the label node. Choose or create a topic (for example, `AI Fallback`) so these tickets are easy to filter in the Support Tickets list, optionally assign a staff member, and write a body describing the issue — you can reference flow results like `@results.result_1` if you saved the contact's message earlier in the flow.

   ![Open Ticket action connected after the label action, with topic set to AI Fallback](/img/ai-fallback-ticket/open-ticket-after-label.png)

Once connected, the two nodes run in sequence — the message is labeled, and a ticket opens immediately after, without any extra waiting step in between.

![Overview of the two connected nodes: Add Labels followed by Open Ticket](/img/ai-fallback-ticket/ai-fallback-flow-overview.png)

## After setup

- Publish the flow and test it by sending a message the AI won't recognize.
- Check **Flows > Support tickets** to confirm the ticket was created under the topic you chose, and check **Flows > \[your flow\] > tag** (or search by label) to confirm the message was labeled.
- A staff member can now find the ticket, open the conversation, and respond to the contact directly.

___

## Tags

AI fallback, Label the incoming message, Open a ticket with a human agent, Support ticket, Unhandled AI response, ChatGPT, Dialogflow.
