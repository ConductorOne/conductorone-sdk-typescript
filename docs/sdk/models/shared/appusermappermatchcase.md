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
| `appId`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | The app this match case belongs to.                                  |
| `appUserKeyCel`                                                      | *string*                                                             | :heavy_minus_sign:                                                   | CEL expression evaluated against an AppUser to produce match key(s). |
| `caseIndex`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | The ordered index of this match case within the mapper.              |
| `userKeyCel`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | CEL expression evaluated against a User to produce match key(s).     |