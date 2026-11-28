# ExternalOAuthGrantInfo

ExternalOAuthGrantInfo is the API representation of an ExternalOAuthGrant.

## Example Usage

```typescript
import { ExternalOAuthGrantInfo } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalOAuthGrantInfo = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | User-set display name; falls back to the client_name on the parent client when empty.         |
| `grantId`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The grantId field.                                                                            |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `mcpClientId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The mcpClientId field.                                                                        |
| `scopedRoleIds`                                                                               | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The scopedRoleIds field.                                                                      |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The userId field.                                                                             |