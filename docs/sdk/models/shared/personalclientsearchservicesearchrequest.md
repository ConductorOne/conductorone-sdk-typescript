# PersonalClientSearchServiceSearchRequest

The PersonalClientSearchServiceSearchRequest message.

## Example Usage

```typescript
import { PersonalClientSearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalClientSearchServiceSearchRequest = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `pageSize`                                                       | *number*                                                         | :heavy_minus_sign:                                               | The maximum number of results to return per page.                |
| `pageToken`                                                      | *string*                                                         | :heavy_minus_sign:                                               | A pagination token returned from a previous Search call.         |
| `query`                                                          | *string*                                                         | :heavy_minus_sign:                                               | A text query to filter personal clients by display name.         |
| `users`                                                          | [shared.UserRef](../../../sdk/models/shared/userref.md)[]        | :heavy_minus_sign:                                               | Filter results to personal clients owned by the specified users. |