# Google Maps API for reverse geo location

<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Intermediate</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: December 2025</b></td>
  </tr>
</table>
</h4>

## How to use reverse geo location
Use this integration to simplify getting the geographic information of users

### How it works
Users have to share the location pin. The location pin provides latitude and longitude information of the user. This can be used to get the following information from Google Maps API.
- Country
- State
- District or City or Village
- Ward name (if present) 
- Pincode
- Address

Once the information is returned from the api response, it can be added to the contact field of the user. 

### How to use in the flow 

1. Sample flow to try out the feature.
   <img width="735" alt="Screenshot 2024-08-29 at 3 40 10 PM" src="https://github.com/user-attachments/assets/dbf359a6-b163-4496-b801-afb0641f6f48"/>


2. Use the [location interactive message](https://glific.github.io/docs/docs/Product%20Features/Interactive%20Messages/#create-interactive-messages) to get the location of the user
   
3. Add a `Call Webhook` node. 

- By default, `FUNCTION` would be selected. Leave this as it is.

<img width="445" height="370" alt="Screenshot 2025-12-03 at 11 50 25 AM" src="https://github.com/user-attachments/assets/9f6a47e7-d9ac-473b-9a20-357cce12b39b" />

- In the `FUNCTION` field, select the pre-defined function `geolocation` from the dropdown.
  
<img width="490" height="410" alt="Screenshot 2025-12-03 at 11 51 00 AM" src="https://github.com/user-attachments/assets/b846470c-ded7-4c77-9cd6-64d98973d35f" />

- Give the webhook result name - you can use any name. In the screenshot example, it’s named `loc`.

<img width="523" height="436" alt="Screenshot 2025-12-03 at 11 51 34 AM" src="https://github.com/user-attachments/assets/8faddf50-86f2-4122-994b-ebd1e0058d7a" />
 
4. Go to `FUNCTION Body` and pass the following parameters. Add the parameters in the `FUNCTION Body`.

- Click on `FUNCTION Body` on the top right corner. You would see the following.

<img width="475" height="331" alt="Screenshot 2025-12-03 at 11 52 43 AM" src="https://github.com/user-attachments/assets/a59e69e1-1b9d-4242-a3ac-8c0189308b9c" />

- Pass the following parameters as mentioned below. 

`{
 "lat": "@results.result_1.latitude",
 "long": "@results.result_1.longitude"
}`
Here the `result_1` is the result storing the location pin shared by the user

<img width="1030" alt="Screenshot 2024-08-29 at 3 46 00 PM" src="https://github.com/user-attachments/assets/44c0e6ad-5282-486f-90ad-86fd6e073543"/>

5. Following parameters are the response 
`{
  "ward": "",
  "success": true,
  "state": "",
  "postal_code": "",
  "district": "",
  "country": "",
  "city": "",
  "address": ""
}`

6. Use the following @results format to access the response of the api
- to access country - @results.loc.country   
- to access state - @results.loc.state
- to access ward - @results.loc.ward
- to access district - @results.loc.district
- to access city/village/locality - @results.loc.city
- to access postal code - @results.loc.postal_code
- to access the address - @results.loc.address

Here `loc` is the variable name which is the storing the result of webhook call.

6. Any one or multiple of these parameters can be used to confirm the actual location of the user. The geographical information returned is as per the [Google Maps Reverse Geo Locate API](https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding). The levels correspond to the the administrative_area_levels available in Google Maps. 

### Webhook response vs the google maps api  
- Country corresponds to address_components[“country”]
- State corresponds to address_components[“administrative_area_level_1”]
- District corresponds to address_components[“administrative_area_level_2”]
- City corresponds to address_components[“locality”]
- Ward corresponds to address_components[“administrative_area_level_3”]
- Postal_code corresponds to address_components[“postal_code”]
- Address corresponds to formatted_address


As subsequent steps, organization can get the user to confirm if the location picked up is correct
If the information is correct, the contact variables can be updated and/or users can be clubbed into geographical collections for targeting at a later point. 
