# C1ApiCredentialInventoryV1RecoveryPolicyServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiCredentialInventoryV1RecoveryPolicyServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCredentialInventoryV1RecoveryPolicyServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 484249,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `recoveryPolicyServiceDeleteResponse`                                                                           | [shared.RecoveryPolicyServiceDeleteResponse](../../../sdk/models/shared/recoverypolicyservicedeleteresponse.md) | :heavy_minus_sign:                                                                                              | Successful response                                                                                             |