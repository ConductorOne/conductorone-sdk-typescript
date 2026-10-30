# PersonalDeviceServiceSearchResponse

The PersonalDeviceServiceSearchResponse message.

## Example Usage

```typescript
import { PersonalDeviceServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalDeviceServiceSearchResponse = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `list`                                                                       | [shared.PersonalDevice](../../../sdk/models/shared/personaldevice.md)[]      | :heavy_minus_sign:                                                           | The devices the calling user has registered, matching the search criteria.   |
| `nextPageToken`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | A token to retrieve the next page of results, or empty if there are no more. |