# TaskAuditConditionalPolicyExecutionResult

The TaskAuditConditionalPolicyExecutionResult message.

## Example Usage

```typescript
import { TaskAuditConditionalPolicyExecutionResult } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditConditionalPolicyExecutionResult = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `condition`                 | *string*                    | :heavy_minus_sign:          | The condition field.        |
| `conditionMatched`          | *boolean*                   | :heavy_minus_sign:          | The conditionMatched field. |
| `defaultCondition`          | *boolean*                   | :heavy_minus_sign:          | The defaultCondition field. |
| `error`                     | *string*                    | :heavy_minus_sign:          | The error field.            |
| `policyKey`                 | *string*                    | :heavy_minus_sign:          | The policyKey field.        |