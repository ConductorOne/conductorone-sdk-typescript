# C1ApiVaultV1VaultServiceCreateResponse

## Example Usage

```typescript
import { C1ApiVaultV1VaultServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiVaultV1VaultServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 657850,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `vaultServiceCreateResponse`                                                                  | [shared.VaultServiceCreateResponse](../../../sdk/models/shared/vaultservicecreateresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |