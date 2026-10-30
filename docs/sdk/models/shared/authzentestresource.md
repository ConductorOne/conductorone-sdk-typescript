# AuthzenTestResource

AuthzenTestResource identifies the AuthZEN resource for a test evaluation.

## Example Usage

```typescript
import { AuthzenTestResource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenTestResource = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `id`                                | *string*                            | :heavy_minus_sign:                  | Resource identifier.                |
| `properties`                        | Record<string, *any*>               | :heavy_minus_sign:                  | N/A                                 |
| `type`                              | *string*                            | :heavy_minus_sign:                  | Resource type, e.g. "app_resource". |