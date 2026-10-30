# PersonalDeviceClient

PersonalDeviceClient is a single app client on a device. The client
 authenticates with its own asymmetric key; there is no client secret.

## Example Usage

```typescript
import { PersonalDeviceClient } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalDeviceClient = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The full client_id of the device credential.                                                  |
| `clientName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The human-friendly client name from its registration metadata.                                |
| `consumerKeyId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The stable identity of this client's per-app key.                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `deviceOs`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The device operating system captured for this client, e.g. "macos-14.5".                      |
| `deviceSurface`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The device surface captured for this client, e.g. "macos-desktop".                            |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the device credential.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique ID of the device client (the local part of client_id).                             |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `softwareId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | An identifier for the client software, from its registration metadata.                        |
| `softwareVersion`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The version of the client software, from its registration metadata.                           |