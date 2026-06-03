# TunnelAppliance

TunnelAppliance is the live state of the customer-side appliance for one
 bridge.

## Example Usage

```typescript
import { TunnelAppliance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TunnelAppliance = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `announcedServiceCount`                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of services the appliance is currently announcing.                                     |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `links`                                                                                       | [shared.TunnelApplianceLink](../../../sdk/models/shared/tunnelappliancelink.md)[]             | :heavy_minus_sign:                                                                            | Wormhole relays currently holding a Link for this bridge. Typically of<br/> length 1.         |
| `status`                                                                                      | [shared.TunnelApplianceStatus](../../../sdk/models/shared/tunnelappliancestatus.md)           | :heavy_minus_sign:                                                                            | The status field.                                                                             |