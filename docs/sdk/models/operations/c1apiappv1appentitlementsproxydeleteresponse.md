# C1ApiAppV1AppEntitlementsProxyDeleteResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsProxyDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsProxyDeleteResponse = {
  contentType: "<value>",
  statusCode: 751783,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `deleteAppEntitlementProxyResponse`                                                                         | [shared.DeleteAppEntitlementProxyResponse](../../../sdk/models/shared/deleteappentitlementproxyresponse.md) | :heavy_minus_sign:                                                                                          | Successful response                                                                                         |