# CreateRevokeTasksV2

The CreateRevokeTasksV2 message.

This message contains a oneof named user. Only a single field of the following list may be set at a time:
  - userIdCel
  - userRef
  - useSubjectUser


This message contains a oneof named inclusion. Only a single field of the following list may be set at a time:
  - inclusionList
  - inclusionAll
  - inclusionCriteria
  - inclusionListCel


This message contains a oneof named exclusion. Only a single field of the following list may be set at a time:
  - exclusionNone
  - exclusionList
  - exclusionCriteria
  - exclusionListCel


## Example Usage

```typescript
import { CreateRevokeTasksV2 } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateRevokeTasksV2 = {};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entitlementExclusionCriteria`                                                                                                                            | [shared.EntitlementExclusionCriteria](../../../sdk/models/shared/entitlementexclusioncriteria.md)                                                         | :heavy_minus_sign:                                                                                                                                        | The EntitlementExclusionCriteria message.                                                                                                                 |
| `entitlementExclusionList`                                                                                                                                | [shared.EntitlementExclusionList](../../../sdk/models/shared/entitlementexclusionlist.md)                                                                 | :heavy_minus_sign:                                                                                                                                        | The EntitlementExclusionList message.                                                                                                                     |
| `entitlementExclusionListCel`                                                                                                                             | [shared.EntitlementExclusionListCel](../../../sdk/models/shared/entitlementexclusionlistcel.md)                                                           | :heavy_minus_sign:                                                                                                                                        | The EntitlementExclusionListCel message.                                                                                                                  |
| `entitlementExclusionNone`                                                                                                                                | [shared.EntitlementExclusionNone](../../../sdk/models/shared/entitlementexclusionnone.md)                                                                 | :heavy_minus_sign:                                                                                                                                        | The EntitlementExclusionNone message.                                                                                                                     |
| `entitlementInclusionAll`                                                                                                                                 | [shared.EntitlementInclusionAll](../../../sdk/models/shared/entitlementinclusionall.md)                                                                   | :heavy_minus_sign:                                                                                                                                        | The EntitlementInclusionAll message.                                                                                                                      |
| `entitlementInclusionCriteria`                                                                                                                            | [shared.EntitlementInclusionCriteria](../../../sdk/models/shared/entitlementinclusioncriteria.md)                                                         | :heavy_minus_sign:                                                                                                                                        | The EntitlementInclusionCriteria message.                                                                                                                 |
| `entitlementInclusionList`                                                                                                                                | [shared.EntitlementInclusionList](../../../sdk/models/shared/entitlementinclusionlist.md)                                                                 | :heavy_minus_sign:                                                                                                                                        | The EntitlementInclusionList message.                                                                                                                     |
| `entitlementInclusionListCel`                                                                                                                             | [shared.EntitlementInclusionListCel](../../../sdk/models/shared/entitlementinclusionlistcel.md)                                                           | :heavy_minus_sign:                                                                                                                                        | The EntitlementInclusionListCel message.                                                                                                                  |
| `useSubjectUser`                                                                                                                                          | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | The useSubjectUser field.<br/>This field is part of the `user` oneof.<br/>See the documentation for `c1.api.automations.v1.CreateRevokeTasksV2` for more details. |
| `userIdCel`                                                                                                                                               | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | The userIdCel field.<br/>This field is part of the `user` oneof.<br/>See the documentation for `c1.api.automations.v1.CreateRevokeTasksV2` for more details. |
| `userRef`                                                                                                                                                 | [shared.UserRef](../../../sdk/models/shared/userref.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                        | A reference to a user.                                                                                                                                    |