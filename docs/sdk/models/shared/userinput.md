# UserInput

The User object provides all of the details for an user, as well as some configuration.

## Example Usage

```typescript
import { UserInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserInput = {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delegatedUserId`                                                                                                                                  | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The id of the user to whom tasks will be automatically reassigned to.                                                                              |
| `roleIds`                                                                                                                                          | *string*[]                                                                                                                                         | :heavy_minus_sign:                                                                                                                                 | A list of unique identifiers that maps to ConductorOne's user roles let you assign users permissions tailored to the work they do in the software. |
| `status`                                                                                                                                           | [shared.UserSchemasStatus](../../../sdk/models/shared/userschemasstatus.md)                                                                        | :heavy_minus_sign:                                                                                                                                 | The status of the user in the system.                                                                                                              |