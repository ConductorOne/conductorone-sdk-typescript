# GetUserDeveloperPreferencesResponse

The GetUserDeveloperPreferencesResponse message.

## Example Usage

```typescript
import { GetUserDeveloperPreferencesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetUserDeveloperPreferencesResponse = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `userDeveloperPreferences`                                                                                   | [shared.UserDeveloperPreferences](../../../sdk/models/shared/userdeveloperpreferences.md)                    | :heavy_minus_sign:                                                                                           | UserDeveloperPreferences holds a user's developer-tooling preferences,<br/> organized into per-feature clusters. |