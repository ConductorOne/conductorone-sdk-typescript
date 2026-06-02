# UserIntrospectRequest

The IntrospectRequest message.

## Example Usage

```typescript
import { UserIntrospectRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserIntrospectRequest = {};
```

## Fields

| Field                                                                                                                                                                                                 | Type                                                                                                                                                                                                  | Required                                                                                                                                                                                              | Description                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userExpandMask`                                                                                                                                                                                      | [shared.UserExpandMask](../../../sdk/models/shared/userexpandmask.md)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                    | The user expand mask is used to indicate which related objects should be expanded in the response.<br/> The supported paths are 'role_ids', 'manager_ids', 'delegated_user_id', 'directory_ids', and '*'. |