# EncryptedData

EncryptedData is a message that contains encrypted bytes and metadata.

## Example Usage

```typescript
import { EncryptedData } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EncryptedData = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `description`                                         | *string*                                              | :heavy_minus_sign:                                    | The human-readable description of the encrypted data. |
| `encryptedBytes`                                      | *string*                                              | :heavy_minus_sign:                                    | The encrypted bytes.                                  |
| `keyId`                                               | *string*                                              | :heavy_minus_sign:                                    | The key ID used to encrypt the data.                  |
| `name`                                                | *string*                                              | :heavy_minus_sign:                                    | The human-readable name of the encrypted data.        |
| `provider`                                            | *string*                                              | :heavy_minus_sign:                                    | The encryption provider used to encrypt the data.     |
| `schema`                                              | *string*                                              | :heavy_minus_sign:                                    | The (optional) JSON schema of the encrypted data.     |