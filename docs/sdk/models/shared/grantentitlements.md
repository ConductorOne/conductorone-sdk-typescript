# GrantEntitlements

The GrantEntitlements message.

This message contains a oneof named inclusion. Only a single field of the following list may be set at a time:
  - inclusionList
  - inclusionCriteria
  - inclusionListCel


This message contains a oneof named exclusion. Only a single field of the following list may be set at a time:
  - exclusionNone
  - exclusionList
  - exclusionCriteria
  - exclusionListCel


## Example Usage

```typescript
import { GrantEntitlements } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GrantEntitlements = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `grantEntitlementExclusionCriteria`                                                                         | [shared.GrantEntitlementExclusionCriteria](../../../sdk/models/shared/grantentitlementexclusioncriteria.md) | :heavy_minus_sign:                                                                                          | The GrantEntitlementExclusionCriteria message.                                                              |
| `grantEntitlementExclusionList`                                                                             | [shared.GrantEntitlementExclusionList](../../../sdk/models/shared/grantentitlementexclusionlist.md)         | :heavy_minus_sign:                                                                                          | The GrantEntitlementExclusionList message.                                                                  |
| `grantEntitlementExclusionListCel`                                                                          | [shared.GrantEntitlementExclusionListCel](../../../sdk/models/shared/grantentitlementexclusionlistcel.md)   | :heavy_minus_sign:                                                                                          | The GrantEntitlementExclusionListCel message.                                                               |
| `grantEntitlementExclusionNone`                                                                             | [shared.GrantEntitlementExclusionNone](../../../sdk/models/shared/grantentitlementexclusionnone.md)         | :heavy_minus_sign:                                                                                          | The GrantEntitlementExclusionNone message.                                                                  |
| `grantEntitlementInclusionCriteria`                                                                         | [shared.GrantEntitlementInclusionCriteria](../../../sdk/models/shared/grantentitlementinclusioncriteria.md) | :heavy_minus_sign:                                                                                          | The GrantEntitlementInclusionCriteria message.                                                              |
| `grantEntitlementInclusionList`                                                                             | [shared.GrantEntitlementInclusionList](../../../sdk/models/shared/grantentitlementinclusionlist.md)         | :heavy_minus_sign:                                                                                          | The GrantEntitlementInclusionList message.                                                                  |
| `grantEntitlementInclusionListCel`                                                                          | [shared.GrantEntitlementInclusionListCel](../../../sdk/models/shared/grantentitlementinclusionlistcel.md)   | :heavy_minus_sign:                                                                                          | The GrantEntitlementInclusionListCel message.                                                               |
| `useSubjectUser`                                                                                            | *boolean*                                                                                                   | :heavy_minus_sign:                                                                                          | If true, the step will use the subject user of the automation as the subject.                               |
| `userIdCel`                                                                                                 | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The userIdCel field.                                                                                        |
| `userRef`                                                                                                   | [shared.UserRef](../../../sdk/models/shared/userref.md)                                                     | :heavy_minus_sign:                                                                                          | N/A                                                                                                         |