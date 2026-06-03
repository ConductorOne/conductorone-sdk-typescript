# BulkUpdateFindingStateRequest

The BulkUpdateFindingStateRequest message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - snooze
  - suppress
  - acceptRisk
  - unsuppress
  - assignOwner
  - reopen


## Example Usage

```typescript
import { BulkUpdateFindingStateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BulkUpdateFindingStateRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `acceptRisk`                                                                        | [shared.BulkAcceptRiskAction](../../../sdk/models/shared/bulkacceptriskaction.md)   | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `assignOwner`                                                                       | [shared.BulkAssignOwnerAction](../../../sdk/models/shared/bulkassignowneraction.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `refs`                                                                              | [shared.FindingRef](../../../sdk/models/shared/findingref.md)[]                     | :heavy_minus_sign:                                                                  | By-ID mode: specify individual finding refs.                                        |
| `reopen`                                                                            | [shared.BulkReopenAction](../../../sdk/models/shared/bulkreopenaction.md)           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `findingSearchRequest`                                                              | [shared.FindingSearchRequest](../../../sdk/models/shared/findingsearchrequest.md)   | :heavy_minus_sign:                                                                  | The FindingSearchRequest message.                                                   |
| `snooze`                                                                            | [shared.BulkSnoozeAction](../../../sdk/models/shared/bulksnoozeaction.md)           | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `suppress`                                                                          | [shared.BulkSuppressAction](../../../sdk/models/shared/bulksuppressaction.md)       | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `unsuppress`                                                                        | [shared.BulkUnsuppressAction](../../../sdk/models/shared/bulkunsuppressaction.md)   | :heavy_minus_sign:                                                                  | N/A                                                                                 |