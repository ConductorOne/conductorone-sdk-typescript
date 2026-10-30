# UserActorObjectPermissions

ActorObjectPermissions describes which actions the calling user is permitted to perform on an object, as determined by policy.

## Example Usage

```typescript
import { UserActorObjectPermissions } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UserActorObjectPermissions = {};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `delete`                  | *boolean*                 | :heavy_minus_sign:        | The delete field.         |
| `edit`                    | *boolean*                 | :heavy_minus_sign:        | The edit field.           |
| `extra`                   | Record<string, *boolean*> | :heavy_minus_sign:        | The extra field.          |
| `read`                    | *boolean*                 | :heavy_minus_sign:        | The read field.           |