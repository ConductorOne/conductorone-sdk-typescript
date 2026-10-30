# ResourceScope

ResourceScope narrows which entitlements an analysis considers, without
 changing the cohort. Coverage denominators stay the population the
 ProfileFilters and AccessScope select; only the entitlement universe shrinks.
 It is never a cohort definition on its own.

## Example Usage

```typescript
import { ResourceScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceScope = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appIds`           | *string*[]         | :heavy_minus_sign: | The appIds field.  |