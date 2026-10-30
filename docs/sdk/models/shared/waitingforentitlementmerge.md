# WaitingForEntitlementMerge

Describes a provision step that is paused until the target entitlement, created ahead of connector sync with a Baton match ID, is merged with its connector-synced counterpart.

## Example Usage

```typescript
import { WaitingForEntitlementMerge } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitingForEntitlementMerge = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `appEntitlementId`                                    | *string*                                              | :heavy_minus_sign:                                    | The ID of the entitlement being waited on.            |
| `appId`                                               | *string*                                              | :heavy_minus_sign:                                    | The ID of the app the awaited entitlement belongs to. |