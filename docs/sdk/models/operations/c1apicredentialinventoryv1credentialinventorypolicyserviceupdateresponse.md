# C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceUpdateResponse = {
    contentType: "<value>",
    statusCode: 34256,
  };
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `credentialInventoryPolicyServiceUpdateResponse`                                                                                      | [shared.CredentialInventoryPolicyServiceUpdateResponse](../../../sdk/models/shared/credentialinventorypolicyserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |