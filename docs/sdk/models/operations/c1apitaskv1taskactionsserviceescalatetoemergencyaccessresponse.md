# C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse = {
  contentType: "<value>",
  statusCode: 411,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `taskServiceActionResponse`                                                                 | [shared.TaskServiceActionResponse](../../../sdk/models/shared/taskserviceactionresponse.md) | :heavy_minus_sign:                                                                          | Successful response                                                                         |