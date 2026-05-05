# ExpressionProvisioner

ExpressionProvisioner evaluates CEL expressions to determine provisioners.

## Example Usage

```typescript
import { ExpressionProvisioner } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExpressionProvisioner = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `allowReassignment`                                         | *boolean*                                                   | :heavy_minus_sign:                                          | Whether the provisioner can reassign the task.              |
| `expressions`                                               | *string*[]                                                  | :heavy_minus_sign:                                          | The CEL expressions to evaluate.                            |
| `fallbackUserIds`                                           | *string*[]                                                  | :heavy_minus_sign:                                          | Fallback user IDs if expression evaluation yields no users. |