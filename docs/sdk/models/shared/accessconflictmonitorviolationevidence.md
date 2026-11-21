# AccessConflictMonitorViolationEvidence

AccessConflictMonitorViolationEvidence is the detail for an access-conflict
 finding raised by a conflict monitor run.

## Example Usage

```typescript
import { AccessConflictMonitorViolationEvidence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessConflictMonitorViolationEvidence = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `violationId`                                            | *string*                                                 | :heavy_minus_sign:                                       | The latest access violation for this conflicting access. |