# AppUserMergeCelRule

A rule that matches when both CEL expressions produce the same key. Each expression
 reads the variable `account` and returns a string or a list of strings; an empty key
 never matches.

## Example Usage

```typescript
import { AppUserMergeCelRule } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeCelRule = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `existingAppUserKeyCel`                                           | *string*                                                          | :heavy_minus_sign:                                                | The expression evaluated against each existing account. Required. |
| `incomingKeyCel`                                                  | *string*                                                          | :heavy_minus_sign:                                                | The expression evaluated against the incoming account record.     |