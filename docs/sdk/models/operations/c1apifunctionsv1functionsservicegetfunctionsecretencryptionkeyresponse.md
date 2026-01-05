# C1ApiFunctionsV1FunctionsServiceGetFunctionSecretEncryptionKeyResponse

## Example Usage

```typescript
import { C1ApiFunctionsV1FunctionsServiceGetFunctionSecretEncryptionKeyResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiFunctionsV1FunctionsServiceGetFunctionSecretEncryptionKeyResponse = {
    contentType: "<value>",
    statusCode: 913647,
  };
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                         | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | HTTP response content type for this operation                                                                                                         |
| `statusCode`                                                                                                                                          | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | HTTP response status code for this operation                                                                                                          |
| `rawResponse`                                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                                 | :heavy_check_mark:                                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                                               |
| `functionsServiceGetFunctionSecretEncryptionKeyResponse`                                                                                              | [shared.FunctionsServiceGetFunctionSecretEncryptionKeyResponse](../../../sdk/models/shared/functionsservicegetfunctionsecretencryptionkeyresponse.md) | :heavy_minus_sign:                                                                                                                                    | Successful response                                                                                                                                   |