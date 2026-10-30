# AuthzenTestSubject

AuthzenTestSubject identifies the AuthZEN subject for a test evaluation.

## Example Usage

```typescript
import { AuthzenTestSubject } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenTestSubject = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `id`                       | *string*                   | :heavy_minus_sign:         | Subject identifier.        |
| `properties`               | Record<string, *any*>      | :heavy_minus_sign:         | N/A                        |
| `type`                     | *string*                   | :heavy_minus_sign:         | Subject type, e.g. "user". |