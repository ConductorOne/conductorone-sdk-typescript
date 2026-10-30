# GraphAppGrantCount

The number of grants a user holds in a single application.

## Example Usage

```typescript
import { GraphAppGrantCount } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GraphAppGrantCount = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appId`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The ID of the application.                               |
| `grantCount`                                             | *number*                                                 | :heavy_minus_sign:                                       | The number of grants the user holds in this application. |