# C1ApiAutomationsV1AutomationServiceListAutomationsResponse

## Example Usage

```typescript
import { C1ApiAutomationsV1AutomationServiceListAutomationsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAutomationsV1AutomationServiceListAutomationsResponse = {
  contentType: "<value>",
  statusCode: 379111,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `listAutomationsResponse`                                                               | [shared.ListAutomationsResponse](../../../sdk/models/shared/listautomationsresponse.md) | :heavy_minus_sign:                                                                      | Successful response                                                                     |