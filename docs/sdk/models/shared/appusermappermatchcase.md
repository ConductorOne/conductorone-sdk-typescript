# AppUserMapperMatchCase

AppUserMapperMatchCase defines a single matching rule for uplift account mapping.

## Example Usage

```typescript
import { AppUserMapperMatchCase } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMapperMatchCase = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `appUserKeyCel`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | CEL expression evaluated against an AppUser to produce match key(s). |
| `userKeyCel`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | CEL expression evaluated against a User to produce match key(s).     |