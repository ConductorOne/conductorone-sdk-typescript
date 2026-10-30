# ActorObjectPermissions

Legacy: do not use for new objects. Retained only for the existing
 AppResource / AppEntitlement / access-review consumers, which will migrate to
 c1.api.authorization.v1.ActorObjectPermissions in IGA-2331. New object views
 should reference c1.api.authorization.v1.ActorObjectPermissions instead.

## Example Usage

```typescript
import { ActorObjectPermissions } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ActorObjectPermissions = {};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `delete`                  | *boolean*                 | :heavy_minus_sign:        | The delete field.         |
| `edit`                    | *boolean*                 | :heavy_minus_sign:        | The edit field.           |
| `extra`                   | Record<string, *boolean*> | :heavy_minus_sign:        | The extra field.          |
| `read`                    | *boolean*                 | :heavy_minus_sign:        | The read field.           |