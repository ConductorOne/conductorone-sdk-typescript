# ShadowAppType

ShadowAppType: a UsageResource was discovered outside the tenant's
 governed connector reach. Dedup is the full UsageResource identity, so the
 type payload carries nothing beyond the discriminator itself -- the
 complete identity lives on usage_resource_target.

## Example Usage

```typescript
import { ShadowAppType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ShadowAppType = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |