# C1ApiPolicyV1AccountProvisionPolicyTestTestResponse

## Example Usage

```typescript
import { C1ApiPolicyV1AccountProvisionPolicyTestTestResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiPolicyV1AccountProvisionPolicyTestTestResponse = {
  contentType: "<value>",
  statusCode: 393697,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `testAccountProvisionPolicyResponse`                                                                          | [shared.TestAccountProvisionPolicyResponse](../../../sdk/models/shared/testaccountprovisionpolicyresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |