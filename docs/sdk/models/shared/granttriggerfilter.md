# GrantTriggerFilter

The GrantTriggerFilter message.

This message contains a oneof named entitlement_inclusion. Only a single field of the following list may be set at a time:
  - inclusionList
  - inclusionAll
  - inclusionCriteria
  - inclusionListCel


## Example Usage

```typescript
import { GrantTriggerFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantTriggerFilter = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `accountFilter`                                                                                   | [shared.AccountFilter](../../../sdk/models/shared/accountfilter.md)                               | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `entitlementFilter`                                                                               | [shared.EntitlementFilter](../../../sdk/models/shared/entitlementfilter.md)                       | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `grantFilter`                                                                                     | [shared.GrantFilter](../../../sdk/models/shared/grantfilter.md)                                   | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `entitlementInclusionAll`                                                                         | [shared.EntitlementInclusionAll](../../../sdk/models/shared/entitlementinclusionall.md)           | :heavy_minus_sign:                                                                                | The EntitlementInclusionAll message.                                                              |
| `entitlementInclusionCriteria`                                                                    | [shared.EntitlementInclusionCriteria](../../../sdk/models/shared/entitlementinclusioncriteria.md) | :heavy_minus_sign:                                                                                | The EntitlementInclusionCriteria message.                                                         |
| `entitlementInclusionList`                                                                        | [shared.EntitlementInclusionList](../../../sdk/models/shared/entitlementinclusionlist.md)         | :heavy_minus_sign:                                                                                | The EntitlementInclusionList message.                                                             |
| `entitlementInclusionListCel`                                                                     | [shared.EntitlementInclusionListCel](../../../sdk/models/shared/entitlementinclusionlistcel.md)   | :heavy_minus_sign:                                                                                | The EntitlementInclusionListCel message.                                                          |