# ModelAPIKeyServiceCreateRequest

The ModelAPIKeyServiceCreateRequest message.

This message contains a oneof named credential_format. Only a single field of the following list may be set at a time:
  - anthropic


## Example Usage

```typescript
import { ModelAPIKeyServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ModelAPIKeyServiceCreateRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `anthropic`                                                                                   | [shared.AnthropicCredentialFormat](../../../sdk/models/shared/anthropiccredentialformat.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The app this key will access.                                                                 |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Human-readable name for this key.                                                             |
| `edgeId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The Edge inference route for API calls with this key.                                         |
| `expiresTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scopeCeiling`                                                                                | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Maximum scopes this key may use (must be subset of caller's grants and catalog).              |