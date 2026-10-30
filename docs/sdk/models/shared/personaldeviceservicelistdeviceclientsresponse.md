# PersonalDeviceServiceListDeviceClientsResponse

The PersonalDeviceServiceListDeviceClientsResponse message.

## Example Usage

```typescript
import { PersonalDeviceServiceListDeviceClientsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalDeviceServiceListDeviceClientsResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `clients`                                                                           | [shared.PersonalDeviceClient](../../../sdk/models/shared/personaldeviceclient.md)[] | :heavy_minus_sign:                                                                  | The app clients registered on the device.                                           |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | A token to retrieve the next page of results, or empty if there are no more.        |