# OIDCClaimMapping

OIDCClaimMapping releases one user attribute to the application as one
 OIDC claim.

## Example Usage

```typescript
import { OIDCClaimMapping } from "conductorone-sdk-typescript/sdk/models/shared";

let value: OIDCClaimMapping = {
  claimName: "<value>",
  userAttributeMappingId: "<id>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `claimName`                                                                                                                           | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The name of the claim as the application sees it. Namespace custom claims<br/> so they cannot collide with the registered OIDC claim set. |
| `destination`                                                                                                                         | [shared.Destination](../../../sdk/models/shared/destination.md)                                                                       | :heavy_minus_sign:                                                                                                                    | Where the claim is released.                                                                                                          |
| `userAttributeMappingId`                                                                                                              | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | The user attribute mapping that resolves the value, including its fallback<br/> chain.                                                |