# C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse = {
  contentType: "<value>",
  statusCode: 561924,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `addAutomationExclusionResponse`                                                                      | [shared.AddAutomationExclusionResponse](../../../sdk/models/shared/addautomationexclusionresponse.md) | :heavy_minus_sign:                                                                                    | Empty response with a status code indicating success.                                                 |