# DevicePlacementProvision

This provision step is fulfilled by a Latchkey member device producing an MLS Welcome for the recipient. It has no assignee and no instructions because the step is not human-actionable.

## Example Usage

```typescript
import { DevicePlacementProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DevicePlacementProvision = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `vaultBoundaryId`          | *string*                   | :heavy_minus_sign:         | The vaultBoundaryId field. |