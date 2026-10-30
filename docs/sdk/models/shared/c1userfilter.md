# C1UserFilter

C1UserFilter is used to configure a picker for selecting ConductorOne users.
 This is distinct from AppUserFilter which selects accounts within a connected app.

## Example Usage

```typescript
import { C1UserFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1UserFilter = {};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `excludeUserIds`                                                                                                                                    | *string*[]                                                                                                                                          | :heavy_minus_sign:                                                                                                                                  | Remove these users from the selectable set, after user_ids is applied.                                                                              |
| `includeDeactivated`                                                                                                                                | *boolean*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                  | Make deactivated and deleted users selectable. Defaults to enabled-only.                                                                            |
| `userIds`                                                                                                                                           | *string*[]                                                                                                                                          | :heavy_minus_sign:                                                                                                                                  | Restrict the selectable set to these users. Empty means every user is selectable.<br/> Capped at the number of refs SearchUsers accepts in one request. |