# OAuthAuthorizationConsent

OAuthAuthorizationConsent is a current consent to a managed OAuth authorization.
 Disconnected and superseded consents are not included.

## Example Usage

```typescript
import { OAuthAuthorizationConsent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OAuthAuthorizationConsent = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `authorizationDisplayName`                                                            | *string*                                                                              | :heavy_minus_sign:                                                                    | The current display name of the managed authorization.                                |
| `authorizationId`                                                                     | *string*                                                                              | :heavy_minus_sign:                                                                    | The managed authorization ID, used with grant.id when revoking this consent.          |
| `grant`                                                                               | [shared.ExternalOAuthGrantInfo](../../../sdk/models/shared/externaloauthgrantinfo.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |