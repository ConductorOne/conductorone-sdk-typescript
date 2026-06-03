# UpdateUserDeveloperPreferencesRequest

The UpdateUserDeveloperPreferencesRequest message.

## Example Usage

```typescript
import { UpdateUserDeveloperPreferencesRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateUserDeveloperPreferencesRequest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `terraformPreferences`                                                                     | [shared.TerraformPreferences](../../../sdk/models/shared/terraformpreferences.md)          | :heavy_minus_sign:                                                                         | TerraformPreferences groups the user's preferences for the "Show<br/> Terraform code" feature. |