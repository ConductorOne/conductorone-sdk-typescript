# ModelAPIKey

ModelAPIKey is returned by Get/List operations (metadata only, no secret).

This message contains a oneof named credential_format. Only a single field of the following list may be set at a time:
  - anthropic


## Example Usage

```typescript
import { ModelAPIKey } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ModelAPIKey = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `anthropic`                                                                                   | [shared.AnthropicCredentialFormat](../../../sdk/models/shared/anthropiccredentialformat.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The app this key is bound to.                                                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The human-readable display name for this key.                                                 |
| `edgeId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Edge inference route this key is bound to.                                                |
| `expiresTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the model API key.                                                           |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scopeCeiling`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The maximum scopes this key may use (intersection with live grants).                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |