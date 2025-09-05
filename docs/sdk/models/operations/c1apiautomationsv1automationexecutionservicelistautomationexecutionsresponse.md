# C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse

## Example Usage

```typescript
import { C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse =
    {
      contentType: "<value>",
      statusCode: 249830,
    };
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `listAutomationExecutionsResponse`                                                                        | [shared.ListAutomationExecutionsResponse](../../../sdk/models/shared/listautomationexecutionsresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |