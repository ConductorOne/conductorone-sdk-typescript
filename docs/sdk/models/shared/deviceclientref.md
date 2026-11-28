# DeviceClientRef

DeviceClientRef identifies a device or command-line client.

## Example Usage

```typescript
import { DeviceClientRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeviceClientRef = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The client's ID, without the domain: the part before "@" of the full client ID, e.g. "blue-whale-12345". |