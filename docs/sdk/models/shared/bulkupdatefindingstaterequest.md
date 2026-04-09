# BulkUpdateFindingStateRequest

The BulkUpdateFindingStateRequest message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - snooze
  - suppress
  - acceptRisk
  - unsuppress
  - assignOwner


## Example Usage

```typescript
import { BulkUpdateFindingStateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BulkUpdateFindingStateRequest = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `bulkAcceptRiskAction`                                                              | [shared.BulkAcceptRiskAction](../../../sdk/models/shared/bulkacceptriskaction.md)   | :heavy_minus_sign:                                                                  | The BulkAcceptRiskAction message.                                                   |
| `bulkAssignOwnerAction`                                                             | [shared.BulkAssignOwnerAction](../../../sdk/models/shared/bulkassignowneraction.md) | :heavy_minus_sign:                                                                  | The BulkAssignOwnerAction message.                                                  |
| `refs`                                                                              | [shared.FindingRef](../../../sdk/models/shared/findingref.md)[]                     | :heavy_minus_sign:                                                                  | By-ID mode: specify individual finding refs.                                        |
| `findingSearchRequest`                                                              | [shared.FindingSearchRequest](../../../sdk/models/shared/findingsearchrequest.md)   | :heavy_minus_sign:                                                                  | The FindingSearchRequest message.                                                   |
| `bulkSnoozeAction`                                                                  | [shared.BulkSnoozeAction](../../../sdk/models/shared/bulksnoozeaction.md)           | :heavy_minus_sign:                                                                  | The BulkSnoozeAction message.                                                       |
| `bulkSuppressAction`                                                                | [shared.BulkSuppressAction](../../../sdk/models/shared/bulksuppressaction.md)       | :heavy_minus_sign:                                                                  | The BulkSuppressAction message.                                                     |
| `bulkUnsuppressAction`                                                              | [shared.BulkUnsuppressAction](../../../sdk/models/shared/bulkunsuppressaction.md)   | :heavy_minus_sign:                                                                  | The BulkUnsuppressAction message.                                                   |