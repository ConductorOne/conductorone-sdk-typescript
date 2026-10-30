# C1ApiCredentialInventoryV1RecoveryPolicyServiceCreateResponse

## Example Usage

```typescript
import { C1ApiCredentialInventoryV1RecoveryPolicyServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCredentialInventoryV1RecoveryPolicyServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 737740,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `recoveryPolicyServiceCreateResponse`                                                                           | [shared.RecoveryPolicyServiceCreateResponse](../../../sdk/models/shared/recoverypolicyservicecreateresponse.md) | :heavy_minus_sign:                                                                                              | Successful response                                                                                             |