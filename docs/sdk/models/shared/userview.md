# UserView

The UserView object provides a user response object, as well as JSONPATHs to related objects provided by expanders.

## Example Usage

```typescript
import { UserView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserView = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `delegatedUserPath`                                                                                                     | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | JSONPATH expression indicating the location of the user objects of delegates of the current user in the expanded array. |
| `directoriesPath`                                                                                                       | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | JSONPATH expression indicating the location of directory objects in the expanded array.                                 |
| `managersPath`                                                                                                          | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | JSONPATH expression indicating the location of the user objects that managed the current user in the expanded array.    |
| `rolesPath`                                                                                                             | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | JSONPATH expression indicating the location of the roles of the current user in the expanded array.                     |
| `user`                                                                                                                  | [shared.User](../../../sdk/models/shared/user.md)                                                                       | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |