# AppManagedState

AppManagedState identifies whether a discovered application is managed.

This message contains a oneof named state. Only a single field of the following list may be set at a time:
  - unmanaged
  - managed


## Example Usage

```typescript
import { AppManagedState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppManagedState = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `managed`                                                                                 | [shared.AppManagedStateManaged](../../../sdk/models/shared/appmanagedstatemanaged.md)     | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `unmanaged`                                                                               | [shared.AppManagedStateUnmanaged](../../../sdk/models/shared/appmanagedstateunmanaged.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |