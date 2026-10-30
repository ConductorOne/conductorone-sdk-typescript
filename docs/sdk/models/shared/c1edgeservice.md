# C1EdgeService

C1EdgeService names the hosted Edge or AuthZEN service a trust under the
 C1_EDGE provider lets the fleet act for.

## Example Usage

```typescript
import { C1EdgeService } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1EdgeService = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `appId`                                                           | *string*                                                          | :heavy_minus_sign:                                                | App owning the hosted service.                                    |
| `resourceId`                                                      | *string*                                                          | :heavy_minus_sign:                                                | ID of the hosted Edge or AuthZEN server.                          |
| `resourceKind`                                                    | [shared.ResourceKind](../../../sdk/models/shared/resourcekind.md) | :heavy_minus_sign:                                                | Kind of the hosted service.                                       |