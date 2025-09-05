# C1ApiAppV1AppEntitlementsCreateAutomationResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsCreateAutomationResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsCreateAutomationResponse = {
  contentType: "<value>",
  statusCode: 68851,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `createAutomationResponse`                                                                | [shared.CreateAutomationResponse](../../../sdk/models/shared/createautomationresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |