# AuthzenPolicy

AuthzenPolicy is one immutable CEL policy revision scoped to an app. A
 revision is never edited in place; activate it by setting a server's
 active_policy_id.

This message contains a oneof named engine. Only a single field of the following list may be set at a time:
  - cel


## Example Usage

```typescript
import { AuthzenPolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenPolicy = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | App identifier.                                                                               |
| `cel`                                                                                         | [shared.AuthzenCelPolicy](../../../sdk/models/shared/authzencelpolicy.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdByUserId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who created this revision.                                                 |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Free-text description of what this revision changes or is for.                                |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display name for the policy revision.                                                         |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Policy identifier.                                                                            |