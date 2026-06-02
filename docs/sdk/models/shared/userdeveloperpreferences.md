# UserDeveloperPreferences

UserDeveloperPreferences holds a user's developer-tooling preferences,
 organized into per-feature clusters.

## Example Usage

```typescript
import { UserDeveloperPreferences } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserDeveloperPreferences = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `terraformPreferences`                                                                     | [shared.TerraformPreferences](../../../sdk/models/shared/terraformpreferences.md)          | :heavy_minus_sign:                                                                         | TerraformPreferences groups the user's preferences for the "Show<br/> Terraform code" feature. |