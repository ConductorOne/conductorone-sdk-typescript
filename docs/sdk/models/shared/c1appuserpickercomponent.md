# C1AppUserPickerComponent

C1AppUserPickerComponent selects one of the caller's own accounts (app users) within an app.

## Example Usage

```typescript
import { C1AppUserPickerComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1AppUserPickerComponent = {};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                                 | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | The appId field.                                                                                                                        |
| `label`                                                                                                                                 | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)                                                                     | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |
| `required`                                                                                                                              | *boolean*                                                                                                                               | :heavy_minus_sign:                                                                                                                      | Selection is mandatory. Server sets it only when the user has more than one<br/> eligible account; with none or one the picker isn't shown. |
| `value`                                                                                                                                 | [shared.DynamicString](../../../sdk/models/shared/dynamicstring.md)                                                                     | :heavy_minus_sign:                                                                                                                      | N/A                                                                                                                                     |