# ServerEvent

ServerEvent triggers a server-side action.

## Example Usage

```typescript
import { ServerEvent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServerEvent = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `context`                | Record<string, *string*> | :heavy_minus_sign:       | The context field.       |
| `name`                   | *string*                 | :heavy_minus_sign:       | The name field.          |