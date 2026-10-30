# FunctionInvocationResultRef

FunctionInvocationResultRef describes an invocation result held outside the
 invocation object. It never carries a storage URI or a download URL.

## Example Usage

```typescript
import { FunctionInvocationResultRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionInvocationResultRef = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mediaType`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The mediaType field.                                                                          |
| `path`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The path field.                                                                               |
| `sha256`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Base64url SHA-256 of the result bytes.                                                        |
| `sizeBytes`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The sizeBytes field.                                                                          |
| `storage`                                                                                     | [shared.Storage](../../../sdk/models/shared/storage.md)                                       | :heavy_minus_sign:                                                                            | The storage field.                                                                            |