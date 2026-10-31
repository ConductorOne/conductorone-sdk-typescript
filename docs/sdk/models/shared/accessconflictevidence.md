# AccessConflictEvidence

AccessConflictEvidence is the detail shown for an access-conflict finding.

This message contains a oneof named detail. Only a single field of the following list may be set at a time:
  - monitorViolation


## Example Usage

```typescript
import { AccessConflictEvidence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessConflictEvidence = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `monitorDisplayName`                                                                                                  | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The conflict monitor's display name when the finding was last observed.                                               |
| `monitorViolation`                                                                                                    | [shared.AccessConflictMonitorViolationEvidence](../../../sdk/models/shared/accessconflictmonitorviolationevidence.md) | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |