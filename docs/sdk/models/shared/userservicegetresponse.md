# UserServiceGetResponse

The UserServiceGetResponse returns a user view which has a user including JSONPATHs to the expanded items in the expanded array.

## Example Usage

```typescript
import { UserServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserServiceGetResponse = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                          | [shared.UserServiceGetResponseExpanded](../../../sdk/models/shared/userservicegetresponseexpanded.md)[]             | :heavy_minus_sign:                                                                                                  | List of serialized related objects.                                                                                 |
| `userView`                                                                                                          | [shared.UserView](../../../sdk/models/shared/userview.md)                                                           | :heavy_minus_sign:                                                                                                  | The UserView object provides a user response object, as well as JSONPATHs to related objects provided by expanders. |