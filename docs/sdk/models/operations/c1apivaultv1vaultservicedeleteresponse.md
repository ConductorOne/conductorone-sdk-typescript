# C1ApiVaultV1VaultServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiVaultV1VaultServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiVaultV1VaultServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 601302,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `vaultServiceDeleteResponse`                                                                  | [shared.VaultServiceDeleteResponse](../../../sdk/models/shared/vaultservicedeleteresponse.md) | :heavy_minus_sign:                                                                            | Empty response body. Status code indicates success.                                           |