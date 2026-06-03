# UpdateUserDeveloperPreferencesResponse

The UpdateUserDeveloperPreferencesResponse message.

## Example Usage

```typescript
import { UpdateUserDeveloperPreferencesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateUserDeveloperPreferencesResponse = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `userDeveloperPreferences`                                                                                   | [shared.UserDeveloperPreferences](../../../sdk/models/shared/userdeveloperpreferences.md)                    | :heavy_minus_sign:                                                                                           | UserDeveloperPreferences holds a user's developer-tooling preferences,<br/> organized into per-feature clusters. |