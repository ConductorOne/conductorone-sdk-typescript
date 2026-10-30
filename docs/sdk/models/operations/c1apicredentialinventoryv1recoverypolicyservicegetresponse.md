# C1ApiCredentialInventoryV1RecoveryPolicyServiceGetResponse

## Example Usage

```typescript
import { C1ApiCredentialInventoryV1RecoveryPolicyServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiCredentialInventoryV1RecoveryPolicyServiceGetResponse = {
  contentType: "<value>",
  statusCode: 184495,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `recoveryPolicyServiceGetResponse`                                                                        | [shared.RecoveryPolicyServiceGetResponse](../../../sdk/models/shared/recoverypolicyservicegetresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |