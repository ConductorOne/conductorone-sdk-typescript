# C1ApiVaultV1VaultServiceGetResponse

## Example Usage

```typescript
import { C1ApiVaultV1VaultServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiVaultV1VaultServiceGetResponse = {
  contentType: "<value>",
  statusCode: 676747,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `vaultServiceGetResponse`                                                               | [shared.VaultServiceGetResponse](../../../sdk/models/shared/vaultservicegetresponse.md) | :heavy_minus_sign:                                                                      | Successful response                                                                     |