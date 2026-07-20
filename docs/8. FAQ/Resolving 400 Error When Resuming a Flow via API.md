<h3>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: July 2026</b></td>
  </tr>
</table>
</h3>



## Why do I get a 400 error when resuming a flow via API?

If your flow uses the **Wait for Results** node, you pause the flow and resume it later (for example, once a long-running webhook on your backend finishes) by calling Glific's `resumeContactFlow` API. A common mistake when calling this API results in an HTTP `400 Bad Request`, instead of the expected `200` response.

### Root cause

`resumeContactFlow` accepts a `result` argument of type `Json`. Glific's `Json` scalar only knows how to parse a **JSON-encoded string** - it does not accept a raw JSON/GraphQL object as the value.

If you pass `result` as a plain object (either written inline in the GraphQL query, or as an object inside your `variables`), the query fails GraphQL's validation step before it ever reaches Glific's resolver logic, and the API responds with a `400` status and an `"Argument \"result\" has invalid value ..."` message.

This is different from an application-level error (for example, resuming a contact who has no flow waiting for a result), which Glific returns as a normal `200` response with the error described inside the `errors` field of the response body.

### Incorrect - raw object passed for `result`

```graphql
mutation {
  resumeContactFlow(
    flowId: 1
    contactId: 2
    result: { status: "success", message: "done" }
  ) {
    success
    errors {
      key
      message
    }
  }
}
```

This throws a `400` error because `result` is not a JSON-encoded string.

### Correct - JSON-encoded string passed for `result`

```graphql
mutation resumeContactFlow($flowId: ID!, $contactId: ID!, $result: Json) {
  resumeContactFlow(flowId: $flowId, contactId: $contactId, result: $result) {
    success
    errors {
      key
      message
    }
  }
}
```

Variables:

```json
{
  "flowId": "1",
  "contactId": "2",
  "result": "{\"status\": \"success\", \"message\": \"done\"}"
}
```

Notice that the value of `result` is a **string** that itself contains escaped JSON, not a nested JSON object. This is true whether you send `result` inline in the query or via `variables`.

### Other things to check if you still see a 400

- Make sure the request body follows the standard GraphQL-over-HTTP format, i.e. a JSON object with `query` and `variables` keys - not `flowId`/`contactId`/`result` sent as top-level REST parameters.
- Make sure `Content-Type: application/json` is set on the request.
- Double check the query syntax itself (matching braces, no trailing commas) - a `400` almost always means the query failed to parse/validate, while errors from Glific's business logic (invalid flow/contact id, no active "Wait for Results" context, etc.) come back as a `200` with an `errors` array in the response body.
