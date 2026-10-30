# GatedToolCallTarget

The GatedToolCallTarget message.

## Example Usage

```typescript
import { GatedToolCallTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GatedToolCallTarget = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `appEntitlementId`          | *string*                    | :heavy_minus_sign:          | The appEntitlementId field. |
| `appId`                     | *string*                    | :heavy_minus_sign:          | The appId field.            |
| `callerKind`                | *string*                    | :heavy_minus_sign:          | The callerKind field.       |
| `connectorId`               | *string*                    | :heavy_minus_sign:          | The connectorId field.      |
| `gateId`                    | *string*                    | :heavy_minus_sign:          | The gateId field.           |
| `inputSizeBytes`            | *number*                    | :heavy_minus_sign:          | The inputSizeBytes field.   |
| `toolError`                 | *string*                    | :heavy_minus_sign:          | The toolError field.        |
| `toolId`                    | *string*                    | :heavy_minus_sign:          | The toolId field.           |
| `toolInput`                 | Record<string, *any*>       | :heavy_minus_sign:          | N/A                         |
| `toolKind`                  | *string*                    | :heavy_minus_sign:          | The toolKind field.         |
| `toolName`                  | *string*                    | :heavy_minus_sign:          | The toolName field.         |
| `toolOutput`                | *shared.ToolOutput*         | :heavy_minus_sign:          | N/A                         |