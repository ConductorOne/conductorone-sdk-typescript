# RequestCatalogTypeChangeImpactRef

Object associated with a type-change impact.

This message contains a oneof named ref. Only a single field of the following list may be set at a time:
  - requestCatalog
  - appEntitlement
  - bundleAutomation


## Example Usage

```typescript
import { RequestCatalogTypeChangeImpactRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogTypeChangeImpactRef = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `appEntitlement`                                                                | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)     | :heavy_minus_sign:                                                              | N/A                                                                             |
| `bundleAutomation`                                                              | [shared.BundleAutomationRef](../../../sdk/models/shared/bundleautomationref.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `requestCatalog`                                                                | [shared.RequestCatalogRef](../../../sdk/models/shared/requestcatalogref.md)     | :heavy_minus_sign:                                                              | N/A                                                                             |