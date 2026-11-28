# ConnectorSyncRunStats

The ConnectorSyncRunStats message.

## Example Usage

```typescript
import { ConnectorSyncRunStats } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorSyncRunStats = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `c1zFileSizeBytes`                    | *number*                              | :heavy_minus_sign:                    | The c1zFileSizeBytes field.           |
| `entitlements`                        | *number*                              | :heavy_minus_sign:                    | The entitlements field.               |
| `entitlementsByResourceType`          | Record<string, *number*>              | :heavy_minus_sign:                    | The entitlementsByResourceType field. |
| `grants`                              | *number*                              | :heavy_minus_sign:                    | The grants field.                     |
| `grantsByResourceType`                | Record<string, *number*>              | :heavy_minus_sign:                    | The grantsByResourceType field.       |
| `resourceTypes`                       | *number*                              | :heavy_minus_sign:                    | The resourceTypes field.              |
| `resources`                           | *number*                              | :heavy_minus_sign:                    | The resources field.                  |
| `resourcesByResourceType`             | Record<string, *number*>              | :heavy_minus_sign:                    | The resourcesByResourceType field.    |