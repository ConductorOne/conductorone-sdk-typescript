# C1ApiAppV1AppUserServiceListOwnedServiceAccountsResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUserServiceListOwnedServiceAccountsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUserServiceListOwnedServiceAccountsResponse = {
  contentType: "<value>",
  statusCode: 362191,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `listOwnedServiceAccountsResponse`                                                                        | [shared.ListOwnedServiceAccountsResponse](../../../sdk/models/shared/listownedserviceaccountsresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |