# UpdateFindingStateRequest

The UpdateFindingStateRequest message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - snooze
  - suppress
  - acceptRisk
  - unsuppress
  - resolve
  - reopen


## Example Usage

```typescript
import { UpdateFindingStateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateFindingStateRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `acceptRisk`                                                                    | [shared.AcceptRiskAction](../../../sdk/models/shared/acceptriskaction.md)       | :heavy_minus_sign:                                                              | N/A                                                                             |
| `reopen`                                                                        | [shared.ReopenAction](../../../sdk/models/shared/reopenaction.md)               | :heavy_minus_sign:                                                              | N/A                                                                             |
| `resolve`                                                                       | [shared.ResolveAction](../../../sdk/models/shared/resolveaction.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `snooze`                                                                        | [shared.SnoozeAction](../../../sdk/models/shared/snoozeaction.md)               | :heavy_minus_sign:                                                              | N/A                                                                             |
| `suppress`                                                                      | [shared.SuppressStateAction](../../../sdk/models/shared/suppressstateaction.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `unsuppress`                                                                    | [shared.UnsuppressAction](../../../sdk/models/shared/unsuppressaction.md)       | :heavy_minus_sign:                                                              | N/A                                                                             |