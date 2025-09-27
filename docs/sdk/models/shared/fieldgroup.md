# FieldGroup

The FieldGroup message.

## Example Usage

```typescript
import { FieldGroup } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FieldGroup = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Nice name this group (e.g. renders as a Tab label)                                   |
| `fieldNames`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Field names are "guaranteed" to be unique, but can be repeated in and between lists. |
| `helpText`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Optional. User-facing help text.                                                     |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | Unique ID.                                                                           |