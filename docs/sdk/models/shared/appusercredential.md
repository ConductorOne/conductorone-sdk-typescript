# AppUserCredential

A credentials for the Application User that represents an account in the application.

This message contains a oneof named credential. Only a single field of the following list may be set at a time:
  - encryptedData


## Example Usage

```typescript
import { AppUserCredential } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserCredential = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the application.                                                                    |
| `appUserId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | A unique identifier of the application user.                                                  |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `encryptedData`                                                                               | [shared.EncryptedData](../../../sdk/models/shared/encrypteddata.md)                           | :heavy_minus_sign:                                                                            | EncryptedData is a message that contains encrypted bytes and metadata.                        |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | A unique identifier of the credential.                                                        |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |