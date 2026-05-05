# StringField

The StringField message.

## Example Usage

```typescript
import { StringField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StringField = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `secret`                                                               | *boolean*                                                              | :heavy_minus_sign:                                                     | If secret, value is write-only in UI and a password-type form is used. |
| `valueValidator`                                                       | [shared.StringRules](../../../sdk/models/shared/stringrules.md)        | :heavy_minus_sign:                                                     | N/A                                                                    |