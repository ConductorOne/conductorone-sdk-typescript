# ActorObjectPermissions

The ActorObjectPermissions message.

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