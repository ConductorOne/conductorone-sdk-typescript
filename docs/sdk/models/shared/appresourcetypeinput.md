# AppResourceTypeInput

The AppResourceType is referenced by an app entitlement defining its resource types. Commonly things like Group or Role.

## Example Usage

```typescript
import { AppResourceTypeInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceTypeInput = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `displayName`                              | *string*                                   | :heavy_minus_sign:                         | The display name of the app resource type. |
| `traitIds`                                 | *string*[]                                 | :heavy_minus_sign:                         | Associated trait ids                       |