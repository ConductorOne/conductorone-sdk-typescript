# TaskAuditPolicyProvisionError

The TaskAuditPolicyProvisionError message.

## Example Usage

```typescript
import { TaskAuditPolicyProvisionError } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditPolicyProvisionError = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `comment`                                               | *string*                                                | :heavy_minus_sign:                                      | Optional comment supplied by the provisioning callback. |
| `error`                                                 | *string*                                                | :heavy_minus_sign:                                      | The error field.                                        |