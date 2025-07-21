# C1ApiAppV1AppEntitlementsProxyGetResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsProxyGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsProxyGetResponse = {
  contentType: "<value>",
  statusCode: 308209,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `getAppEntitlementProxyResponse`                                                                      | [shared.GetAppEntitlementProxyResponse](../../../sdk/models/shared/getappentitlementproxyresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |