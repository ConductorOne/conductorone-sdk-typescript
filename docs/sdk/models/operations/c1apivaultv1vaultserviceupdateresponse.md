# C1ApiVaultV1VaultServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiVaultV1VaultServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiVaultV1VaultServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 994717,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `vaultServiceUpdateResponse`                                                                  | [shared.VaultServiceUpdateResponse](../../../sdk/models/shared/vaultserviceupdateresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |