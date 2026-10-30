# ExternalOAuthClientServiceRevokeResponse

The ExternalOAuthClientServiceRevokeResponse message.

## Example Usage

```typescript
import { ExternalOAuthClientServiceRevokeResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalOAuthClientServiceRevokeResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `complete`                                                                                                 | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | False when grants remain to retire. The client is already revoked; call<br/> Revoke again to finish the sweep. |