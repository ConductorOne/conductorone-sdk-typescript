# Deny

Deny rejects the sign-in.

## Example Usage

```typescript
import { Deny } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Deny = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `reasonAdmin`                     | *string*                          | :heavy_minus_sign:                | Reason shown in admin-only audit. |
| `reasonUser`                      | *string*                          | :heavy_minus_sign:                | Reason safe to show the end user. |