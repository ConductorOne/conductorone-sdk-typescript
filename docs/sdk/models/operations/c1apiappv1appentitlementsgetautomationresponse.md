# C1ApiAppV1AppEntitlementsGetAutomationResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsGetAutomationResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsGetAutomationResponse = {
  contentType: "<value>",
  statusCode: 208527,
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                 | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response content type for this operation                                                                                 |
| `statusCode`                                                                                                                  | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | HTTP response status code for this operation                                                                                  |
| `rawResponse`                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                         | :heavy_check_mark:                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                       |
| `appEntitlementServiceGetAutomationResponse`                                                                                  | [shared.AppEntitlementServiceGetAutomationResponse](../../../sdk/models/shared/appentitlementservicegetautomationresponse.md) | :heavy_minus_sign:                                                                                                            | Successful response                                                                                                           |