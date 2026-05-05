# ServicePrincipalInput

ServicePrincipal represents a tenant-managed non-human identity.

## Example Usage

```typescript
import { ServicePrincipalInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalInput = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `displayName`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | The display name of the service principal.                                              |
| `user`                                                                                  | [shared.UserInput](../../../sdk/models/shared/userinput.md)                             | :heavy_minus_sign:                                                                      | The User object provides all of the details for an user, as well as some configuration. |