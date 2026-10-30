# PersonalDeviceServiceSearchRequest

The PersonalDeviceServiceSearchRequest message.

## Example Usage

```typescript
import { PersonalDeviceServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalDeviceServiceSearchRequest = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `pageSize`                                                        | *number*                                                          | :heavy_minus_sign:                                                | The maximum number of results to return per page.                 |
| `pageToken`                                                       | *string*                                                          | :heavy_minus_sign:                                                | A pagination token returned from a previous Search call.          |
| `query`                                                           | *string*                                                          | :heavy_minus_sign:                                                | An optional case-insensitive filter on the device display name.   |
| `statusFilter`                                                    | [shared.StatusFilter](../../../sdk/models/shared/statusfilter.md) | :heavy_minus_sign:                                                | Which device statuses to return. Defaults to active devices only. |