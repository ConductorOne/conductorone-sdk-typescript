# C1ApiFunctionsV1FunctionsServiceGetLockFileResponse

## Example Usage

```typescript
import { C1ApiFunctionsV1FunctionsServiceGetLockFileResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFunctionsV1FunctionsServiceGetLockFileResponse = {
  contentType: "<value>",
  statusCode: 139415,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `functionsServiceGetLockFileResponse`                                                                           | [shared.FunctionsServiceGetLockFileResponse](../../../sdk/models/shared/functionsservicegetlockfileresponse.md) | :heavy_minus_sign:                                                                                              | FunctionsServiceGetLockFileResponse returns the deno lock file content for a commit.                            |