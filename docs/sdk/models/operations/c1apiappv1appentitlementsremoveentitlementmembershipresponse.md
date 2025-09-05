# C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse = {
  contentType: "<value>",
  statusCode: 539186,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `removeEntitlementMembershipResponse`                                                                           | [shared.RemoveEntitlementMembershipResponse](../../../sdk/models/shared/removeentitlementmembershipresponse.md) | :heavy_minus_sign:                                                                                              | Successful response                                                                                             |