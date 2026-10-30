# SSOApplicationServiceUpdateClientRequest

SSOApplicationServiceUpdateClientRequest replaces display name, redirect
 URIs, private-key JWKS, or tightens legacy PKCE to required.

## Example Usage

```typescript
import { SSOApplicationServiceUpdateClientRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceUpdateClientRequest = {
  client: {
    authentication: {},
    displayName: "Haleigh_Johnson60",
  },
  clientId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `client`                                                                                              | [shared.SSOApplicationOIDCClientConfig](../../../sdk/models/shared/ssoapplicationoidcclientconfig.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `clientId`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | Generated client ID to update.                                                                        |