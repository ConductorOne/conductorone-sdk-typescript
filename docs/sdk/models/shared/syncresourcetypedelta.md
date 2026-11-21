# SyncResourceTypeDelta

SyncResourceTypeDelta compares resource, entitlement and grant counts for one resource type.

## Example Usage

```typescript
import { SyncResourceTypeDelta } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncResourceTypeDelta = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `entitlements`                                                                   | [shared.SyncCountDelta](../../../sdk/models/shared/synccountdelta.md)            | :heavy_minus_sign:                                                               | N/A                                                                              |
| `grants`                                                                         | [shared.SyncCountDelta](../../../sdk/models/shared/synccountdelta.md)            | :heavy_minus_sign:                                                               | N/A                                                                              |
| `resourceTypeId`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | Connector-defined resource type identifier, not an individual record identifier. |
| `resources`                                                                      | [shared.SyncCountDelta](../../../sdk/models/shared/synccountdelta.md)            | :heavy_minus_sign:                                                               | N/A                                                                              |