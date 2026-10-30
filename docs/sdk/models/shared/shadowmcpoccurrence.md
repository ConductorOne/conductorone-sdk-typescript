# ShadowMcpOccurrence

ShadowMcpOccurrence is one device running a shadow-mcp finding's MCP
 product, resolved live from DeviceInventoryMcpObservation rather than
 stored on the Finding -- see ShadowMcpEvidence's own doc for why occurrence
 detail isn't persisted there.

## Example Usage

```typescript
import { ShadowMcpOccurrence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ShadowMcpOccurrence = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `deviceId`                                                                                                            | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The deviceId field.                                                                                                   |
| `firstSeenAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `harnessKind`                                                                                                         | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The harnessKind field.                                                                                                |
| `lastSeenAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |
| `userId`                                                                                                              | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Resolved owner of the device (device_registration's user_principal_id).<br/> Empty when the device has no resolved owner. |