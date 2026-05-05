# SearchUserOwnershipResponse

The SearchUserOwnershipResponse message contains a paginated list of ownership entries.

## Example Usage

```typescript
import { SearchUserOwnershipResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchUserOwnershipResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.UserOwnershipEntry](../../../sdk/models/shared/userownershipentry.md)[]      | :heavy_minus_sign:                                                                   | The list of ownership entries for the requested user.                                |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | Pagination token for the next page of results. Empty when there are no more results. |