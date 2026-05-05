# ManuallyManagedUsersResponse

The ManuallyManagedUsersResponse message.

## Example Usage

```typescript
import { ManuallyManagedUsersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ManuallyManagedUsersResponse = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `bulkActionId`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | The ID of the bulk action created to process the membership additions. |
| `failedUsersErrorMap`                                                  | Record<string, *string*>                                               | :heavy_minus_sign:                                                     | A map of user IDs to error messages for users that could not be added. |