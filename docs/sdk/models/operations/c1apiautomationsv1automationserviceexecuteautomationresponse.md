# C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse

## Example Usage

```typescript
import { C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse = {
  contentType: "<value>",
  statusCode: 172677,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `executeAutomationResponse`                                                                 | [shared.ExecuteAutomationResponse](../../../sdk/models/shared/executeautomationresponse.md) | :heavy_minus_sign:                                                                          | Successful response                                                                         |