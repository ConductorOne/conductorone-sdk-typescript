# UserIntrospectResponse

The IntrospectResponse message.

## Example Usage

```typescript
import { UserIntrospectResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserIntrospectResponse = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                          | [shared.UserIntrospectResponseExpanded](../../../sdk/models/shared/userintrospectresponseexpanded.md)[]             | :heavy_minus_sign:                                                                                                  | The expanded field.                                                                                                 |
| `userView`                                                                                                          | [shared.UserView](../../../sdk/models/shared/userview.md)                                                           | :heavy_minus_sign:                                                                                                  | The UserView object provides a user response object, as well as JSONPATHs to related objects provided by expanders. |