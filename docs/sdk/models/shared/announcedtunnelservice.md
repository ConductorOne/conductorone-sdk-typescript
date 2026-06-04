# AnnouncedTunnelService

AnnouncedTunnelService is one service entry the appliance declared in its
 wormhole HELLO frame. Read live from the discovery store; not persisted.

## Example Usage

```typescript
import { AnnouncedTunnelService } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AnnouncedTunnelService = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `name`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Logical name of the service as declared by the appliance.     |
| `port`                                                        | *number*                                                      | :heavy_minus_sign:                                            | TCP port the service listens on inside the appliance network. |
| `servicePath`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Optional URL path prefix for the service.                     |
| `serviceType`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Application-level protocol type (e.g. "http", "grpc").        |
| `transportType`                                               | *string*                                                      | :heavy_minus_sign:                                            | Transport protocol used by the wormhole tunnel (e.g. "tcp").  |