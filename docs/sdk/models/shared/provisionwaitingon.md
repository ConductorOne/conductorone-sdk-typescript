# ProvisionWaitingOn

Describes why a provision step is paused in the WAITING state.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - entitlementMerge
  - devicePlacement


## Example Usage

```typescript
import { ProvisionWaitingOn } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionWaitingOn = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `devicePlacement`                                                                             | [shared.WaitingForDevicePlacement](../../../sdk/models/shared/waitingfordeviceplacement.md)   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `entitlementMerge`                                                                            | [shared.WaitingForEntitlementMerge](../../../sdk/models/shared/waitingforentitlementmerge.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `fallbackAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startedWaitingAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |