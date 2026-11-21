# AccessConflictType

AccessConflictType identifies an access-conflict finding: one conflict
 monitor and one piece of conflicting access held by the target user.

This message contains a oneof named match. Only a single field of the following list may be set at a time:
  - entitlementPair
  - aWithoutB


## Example Usage

```typescript
import { AccessConflictType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessConflictType = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `aWithoutB`                                                                                                   | [shared.AccessConflictAWithoutBMatch](../../../sdk/models/shared/accessconflictawithoutbmatch.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `entitlementPair`                                                                                             | [shared.AccessConflictEntitlementPairMatch](../../../sdk/models/shared/accessconflictentitlementpairmatch.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `monitorId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The conflict monitor that detected the conflict.                                                              |