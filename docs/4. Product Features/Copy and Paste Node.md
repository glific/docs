<h3>
 <table>
  <tr>
    <td><b>2 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>

# Copy and Paste Nodes in Flow Editor

While building chatbot flows in the Flow Editor, users will often need several nodes with similar or identical configurations. Until now, this meant manually creating a new node, picking the right function, and re entering the same content or settings every single time.

The **Copy Node** feature lets the user duplicate an existing node with its configuration intact, in one click, and paste it wherever they need it. This works both within the same flow and across two different flows.

---

### This document guides you through:

- Copying and pasting a node within the same flow
- Copying a node and pasting it into a different flow

---

## Copying a Node in the Same Flow

#### Step 1: Hover over the node you want to copy
- Move your mouse over any node in the Flow Editor.
- A small copy icon appears in the top-right corner of the node.

  
<img width="504" height="327" alt="Screenshot 2026-06-17 at 6 51 29 PM" src="https://github.com/user-attachments/assets/baeac4b5-d7d1-457a-8e20-8e29b92cf8cf" />


- Hover over the copy icon itself (without clicking). A tooltip appears that says "Copy node".
- Use this to double check you're about to copy the correct node before clicking.

  
<img width="470" height="307" alt="Screenshot 2026-06-17 at 6 52 57 PM" src="https://github.com/user-attachments/assets/f606c434-e89b-45e6-8097-44804c955c1d" />


#### Step 2: Click the copy icon
- Click the copy icon.
- The node's configuration is copied to your clipboard.
- A notification banner appears in the top-right corner of the screen:"Node copied. Cmd/Ctrl+V to paste."


#### Step 3: Paste the node
- Move your mouse to the position on the flow editor where you want the new node to appear.
- Press Ctrl+V (Windows/Linux) or Cmd+V (Mac).
- A copy of the node is pasted exactly where your cursor was when you pressed the paste shortcut.
  
**Note**: You can paste the same copied node multiple times from a single copy action. 
Just move your cursor to a new spot and press Ctrl+V/Cmd+V again, you don't need to re-copy the node each time.

---

## Copying a Node to a Different Flow

This works the same way as copying within a flow, with one extra step: navigating to the destination flow before you paste. 


#### Step 1: Copy the node
- Hover over the node you want to copy in the source flow.
- Click the copy icon that appears in its top-right corner.
- Confirm you see the notification: "Node copied. Cmd/Ctrl+V to paste."


<img width="469" height="271" alt="Screenshot 2026-06-17 at 6 58 52 PM" src="https://github.com/user-attachments/assets/5589479d-5a7d-4b54-8e3c-f1744c638b31" />


#### Step 2: Navigate to the destination flow
- Leave the current flow and open the flow where you want to paste the node.
- Your clipboard keeps the copied node's configuration, it doesn't get cleared just because you switched flows.

#### Step 3: Paste the node in the new flow
- Move your mouse to where you want the node to appear on the new flow's editor.
- Press Ctrl+V or Cmd+V.
- The node is pasted into the destination flow with its configuration intact.


<img width="451" height="233" alt="Screenshot 2026-06-17 at 7 01 04 PM" src="https://github.com/user-attachments/assets/69c24d39-ba61-4722-9edb-749713d640d3" />

- Node pasted successfully into the destination flow with a different Node Id.

---

### Quick Reference
| Action | How to do it |
|---|---|
| Copy a node | Hover over the node, click the copy icon in its top right corner |
| Paste a node | Move cursor to target position, press Ctrl+V / Cmd+V |
| Paste multiple times | Press Ctrl+V / Cmd+V again at a new position, no need to re-copy |
| Copy to another flow | Copy -> navigate to destination flow -> press Ctrl+V / Cmd+V |











