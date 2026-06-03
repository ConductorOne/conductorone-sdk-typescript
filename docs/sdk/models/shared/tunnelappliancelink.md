# TunnelApplianceLink

The TunnelApplianceLink message.

## Example Usage

```typescript
import { TunnelApplianceLink } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TunnelApplianceLink = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `avgRtt`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `leaseExpiresAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `relayAddress`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Public address (host:port) of the relay server, suitable for use in<br/> client-side connection strings. |
| `relayId`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Identifier of the wormhole relay server holding this Link.                                           |