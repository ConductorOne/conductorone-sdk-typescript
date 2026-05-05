# GetUserProfileTypesResponse

GetUserProfileTypesResponse is the response containing the profile types for a user.

## Example Usage

```typescript
import { GetUserProfileTypesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetUserProfileTypesResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `profileTypes`                                                                  | [shared.ProfileType](../../../sdk/models/shared/profiletype.md)[]               | :heavy_minus_sign:                                                              | The list of profile types associated with the user across their connected apps. |