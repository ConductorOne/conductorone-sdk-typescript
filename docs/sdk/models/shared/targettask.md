# TargetTask

Target for approving a task

## Example Usage

```typescript
import { TargetTask } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TargetTask = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `policyStepId`                                         | *string*                                               | :heavy_minus_sign:                                     | ID of the policy step requiring step-up authentication |
| `taskId`                                               | *string*                                               | :heavy_minus_sign:                                     | ID of the task being approved                          |