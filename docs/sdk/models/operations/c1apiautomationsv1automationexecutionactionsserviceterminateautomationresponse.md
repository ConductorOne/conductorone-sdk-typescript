# C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse

## Example Usage

```typescript
import { C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAutomationsV1AutomationExecutionActionsServiceTerminateAutomationResponse =
    {
      contentType: "<value>",
      statusCode: 20654,
    };
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `terminateAutomationResponse`                                                                   | [shared.TerminateAutomationResponse](../../../sdk/models/shared/terminateautomationresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |