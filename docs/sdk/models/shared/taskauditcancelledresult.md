# TaskAuditCancelledResult

The TaskAuditCancelledResult message.

## Example Usage

```typescript
import { TaskAuditCancelledResult } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAuditCancelledResult = {};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cancelReason`                                                                                                                                                                   | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | Human-readable reason the action was cancelled. Already populated on the<br/> model-side CanceledResult (e.g., "action is invalid - ticket is closed");<br/> this surfaces it to the UI. |