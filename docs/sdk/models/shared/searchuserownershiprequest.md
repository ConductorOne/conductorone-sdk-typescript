# SearchUserOwnershipRequest

Search for all ownership assignments for a given user. Returns apps, resources, and
 entitlements the user owns, each tagged with a UserOwnershipType discriminator.
 Filter by ownership_types to restrict results to specific kinds of ownership.

## Example Usage

```typescript
import { SearchUserOwnershipRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchUserOwnershipRequest = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ownershipTypes`                                                                        | [shared.OwnershipTypes](../../../sdk/models/shared/ownershiptypes.md)[]                 | :heavy_minus_sign:                                                                      | Filter results to only include these ownership types. If empty, all types are returned. |
| `pageSize`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | Maximum number of results to return per page.                                           |
| `pageToken`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | Pagination token from a previous response.                                              |
| `userId`                                                                                | *string*                                                                                | :heavy_minus_sign:                                                                      | The ID of the ConductorOne user whose ownership to search.                              |