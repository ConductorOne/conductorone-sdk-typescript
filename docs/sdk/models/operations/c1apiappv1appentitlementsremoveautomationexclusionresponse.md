# C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse = {
  contentType: "<value>",
  statusCode: 528324,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `removeAutomationExclusionResponse`                                                                         | [shared.RemoveAutomationExclusionResponse](../../../sdk/models/shared/removeautomationexclusionresponse.md) | :heavy_minus_sign:                                                                                          | Empty response with a status code indicating success.                                                       |