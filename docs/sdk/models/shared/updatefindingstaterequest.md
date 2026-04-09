# UpdateFindingStateRequest

The UpdateFindingStateRequest message.

This message contains a oneof named action. Only a single field of the following list may be set at a time:
  - snooze
  - suppress
  - acceptRisk
  - unsuppress
  - resolve


## Example Usage

```typescript
import { UpdateFindingStateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateFindingStateRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `acceptRiskAction`                                                              | [shared.AcceptRiskAction](../../../sdk/models/shared/acceptriskaction.md)       | :heavy_minus_sign:                                                              | AcceptRiskAction parameters for UpdateFindingState.                             |
| `resolveAction`                                                                 | [shared.ResolveAction](../../../sdk/models/shared/resolveaction.md)             | :heavy_minus_sign:                                                              | ResolveAction parameters for UpdateFindingState (manual resolve).               |
| `snoozeAction`                                                                  | [shared.SnoozeAction](../../../sdk/models/shared/snoozeaction.md)               | :heavy_minus_sign:                                                              | SnoozeAction parameters for UpdateFindingState.                                 |
| `suppressStateAction`                                                           | [shared.SuppressStateAction](../../../sdk/models/shared/suppressstateaction.md) | :heavy_minus_sign:                                                              | SuppressStateAction parameters for UpdateFindingState.                          |
| `unsuppressAction`                                                              | [shared.UnsuppressAction](../../../sdk/models/shared/unsuppressaction.md)       | :heavy_minus_sign:                                                              | UnsuppressAction parameters for UpdateFindingState.                             |