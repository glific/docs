<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: July 2026</b></td>
  </tr>
</table>
</h4>

# Data Analytics Page 
The Data Analytics page (accessible from the left navigation under "Data Analytics") gives a bird's-eye view of how contacts are growing, how engaged they are, and how reliably messages are being delivered. The page is organized as a single dashboard with a shared control bar at the top and three tabs underneath: 
- Reach & Growth,
- Engagement Quality, and
- Message Errors. 

<img width="" height="398" alt="Screenshot 2026-07-08 at 4 17 55 PM" src="https://github.com/user-attachments/assets/8d3e7c1c-7568-491f-923f-9fe3fae6515a" />

Every tab responds to the same global `Time` and `Time Grain` settings, so changing them once updates the charts across whichever tab you're viewing.

## The control bar: Time filter and Time Grain
At the very top of the dashboard sits a bar with four controls: Time, Time Grain (Trends), Apply, and Clear All.

### Time Range 

<img width="" height="385" alt="Screenshot 2026-07-08 at 4 25 34 PM" src="https://github.com/user-attachments/assets/2e5b4d13-0248-40a6-b738-dd9ae8bcd50e" />


1. Sets the active date range, and pulls the data for the given time period.
2. Range type can be used to set active date ranges using various options such as 
- Current date, current week, current month, current quarter etc
- Last date, last week, last month, last quarter etc
- Advanced such as specifying “last week” or “last quarter” or “last 3 months”
- And more custom options 
3. In the example the date range is set as 2026-04-08 ≤ col < 2026-07-08 meaning the dashboard currently includes all activity from April 8 up to, but not including, July 8, 2026. 

### Time Grain or Granularity
 
 <img width="" height="383" alt="Screenshot 2026-07-08 at 4 20 00 PM" src="https://github.com/user-attachments/assets/5680565f-4e18-4902-b2c4-21b8488ff164" />

1. Dropdown controls the bucket size used for the trend-line charts (for ex- charts with bars across a timeline, like "Contacts Broadcasted To" or "Message Delivery Trend").
2. From the dropdown, the data trends can be broken down at weekly, monthly, quarterly, yearly level.
3. Choosing Week groups data into weekly bars, which is useful for spotting short-term spikes
4. Choosing Month collapses the same data into monthly bars, which smooths out day-to-day noise and is better for spotting longer trends
5. After changing either control, you need to click `Apply` for the dashboard to refresh with the new settings — until then, Apply stays greyed out if nothing has changed, and turns solid green once there's a pending change to apply.
6. Clear All resets any filters you've adjusted back to the dashboard's defaults.

<img width="" height="466" alt="Screenshot 2026-07-08 at 4 20 49 PM" src="https://github.com/user-attachments/assets/8f8003f4-db25-451b-b294-823bdadc4ced" />

## Reach & Growth
This tab answers "how big is my audience, and is it growing?"
<img width="725" height="464" alt="Screenshot 2026-07-08 at 4 21 16 PM" src="https://github.com/user-attachments/assets/2685d04b-07e2-40b3-b385-a074e9730663" />

1. **Lifetime Contacts:**  broken into segments for contacts who are Opted-In versus Opted-Out (a WhatsApp messaging consent status). This is a cumulative, all-time figure and does not change with the Time filter, since it's a running total rather than a trend.

2. **New Contacts Acquired:** shows how many new contacts joined during the most recent period matching your selected time grain (e.g., "2026-06-29 — 2026-07-05" for a weekly grain, or "Jul 2026" for a monthly grain), along with a percentage comparison to the immediately preceding period and a small sparkline showing the recent trend shape. A negative percentage (like -33.3% or -92.3%) means fewer new contacts joined compared to the prior period — useful as an early signal if outreach or onboarding campaigns have slowed down. 

3. **The Contacts Broadcasted To:** shows, for each time bucket in your selected range and grain, how many unique contacts received a broadcast message. Hovering over a bar reveals a tooltip with the exact date bucket and count (e.g., "May 2026 — Contacts Count: 19"). Tall spikes indicate weeks or months with large campaign sends; low bars indicate quieter periods. Comparing this chart at Week versus Month grain is a good way to tell whether growth is steady or driven by a few big bursts.


## Engagement Quality
This tab answers "of the people I'm reaching, how many are actually engaging back?" A legend at the top defines the three key terms used throughout this tab: 

- **Active** here means a contact sent at least one user-initiated message;
- **Returning** here means a contact sent more than one user-initiated message; and
- **Responded to Broadcast** here means a contact replied on the same day after receiving a broadcast.

<img width="" height="462" alt="Screenshot 2026-07-08 at 4 22 18 PM" src="https://github.com/user-attachments/assets/d3def6de-905c-4452-b56c-a2fdf0d6b517" />

1. **The Engagement Overview** card shows total Contacts split into Active and Returning counts for the selected time range, giving a quick read on how much of your base is actually conversing versus just receiving messages.

2. **The Active Contacts Trend** card shows the count of active contacts in the most recent period (9, in the example) with a period-over-period percentage change and sparkline, similar in format to the "New Contacts Acquired" card on the other tab. A steep negative change (-40.0% here) flags a recent drop in conversational activity worth investigating.

3. **The Engagement Overview** horizontal bar chart lays out five metrics side-by-side on a shared scale so you can compare them directly:
- Total contacts, (this is the universe of contacts on your chatbot)
- Contacts Broadcasted To, (these are the contacts you have reached out to in the time period)
- Active users, (these are the users who have messaged atleast once in the time period)
- Returning users, (these are the users who have messaged more than once in the time period)
- Responded to Broadcast. (these are the users who responded to broadcast on the same day)
  
Reading this chart top to bottom shows the engagement funnel — for example, only 17 out of 83 broadcast contacts responded the same day, which is a same-day response rate you could use to gauge broadcast effectiveness. This chart does reflect the Time filter, but note it is not time-grain-bucketed like the trend charts — it's a single snapshot of totals for the selected date range.

## Message Errors
This tab answers "are messages actually getting delivered, and where are the failures?"

<img width="715" height="500" alt="Screenshot 2026-07-08 at 4 26 41 PM" src="https://github.com/user-attachments/assets/c2ee7944-52a5-456a-841f-b57d75a55974" />

1. **The Errors Overview** card summarizes the Message Error Rate, total Errors, total Messages sent, and Contacts Impacted for the selected time range. The error rate is simply errors divided by total messages, so even a small error count can look proportionally significant if overall message volume is low, and vice versa.

2. **The Message Delivery Trend** stacked bar chart breaks down every message sent, per time bucket, into its delivery status:

- enqueued, (to be sent)
- sent, (equivalent to single tick- sent by you)
- delivered, (equivalent to double ticks - delivered to users whatsapp no)
- read, (equivalent to blue ticks, this status is returned only when a user has read receipts enabled on their personal whatsapp)
- error, (when message is not delivered due to an error condition)
- null (uncategorized/unknown status).

Each color in the legend can be toggled — clicking a legend item isolates or hides that category, and the "All" / "Inv" (invert) buttons next to the legend let you quickly select all series or invert your current selection. Below the main chart is a range-slider/brush control (the small shaded area chart with draggable handles) that lets you zoom into a narrower slice of the timeline without changing the global Time filter — drag the handles inward to focus on a specific stretch of weeks. 

4. **The Message Delivery Errors Trend** chart (further down the same tab) isolates just the error-type events and classifies them into specific failure reasons:

- Healthy ecosystem limit reached or user in meta experiment (WhatsApp throttling due to frequency capping),
- Message undeliverable (contact no longer on whatsapp, or contact has opted-out or blocked you etc)
- Message undeliverable could be because of programmatic error (a bug or misconfiguration in a flow), 
- Media URL failure (an attached image/file/audio couldn't be fetched).

This chart also has the same legend toggle, All/Inv buttons, and a zoomable range slider underneath. 
This is the most actionable chart on the page for troubleshooting: a recurring "Healthy ecosystem limit reached" bar suggests you need to slow down broadcast pacing, while repeated "Programmatic error" bars point to a flow that needs debugging, and "Media URL download" failures point to broken or expired media links in your content.

## Practical tips for interpreting the dashboard

1. Review dashboard weekly to look for trends over the last week, last month, last 3 months
2. Try to match the contacts onboarded to the onboarding campaigns, events, activities planned
3. Engagement quality can help you get a very quick overview of how engaged your users are, this can help you to set targets for active users and returning users

## Other tips for using the dashboard
1. Because "Contacts Broadcasted To," "Engagement Overview," and the error charts are cumulative for whatever range you've picked, always check the Time field first before comparing numbers across different visits to the dashboard — the same chart can look very different depending on whether it's summarizing one week or three months.
2. Longer time ranges will take longer to load so try reducing time range

## Note
We are actively working towards gathering feedback towards improving this page, please reach out to info@glific.org or on the [NGO support channel](https://discord.gg/YWgGxWJsMh) on discord to share specific feedback or ask questions in case of questions on the charts or data being presented. 
