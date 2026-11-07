# EdgeIntegrationUsage

EdgeIntegrationUsage identifies saved checks that reference an integration.

## Example Usage

```typescript
import { EdgeIntegrationUsage } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeIntegrationUsage = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `checkIds`                                                | *string*[]                                                | :heavy_minus_sign:                                        | Referencing check identifiers, including disabled checks. |
| `edgeId`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Edge containing the checks.                               |