# UpdateAppRequest

The UpdateAppRequest message contains the app to update and the fields to update.

## Example Usage

```typescript
import { UpdateAppRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateAppRequest = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `app`                                                                                 | [shared.AppInput](../../../sdk/models/shared/appinput.md)                             | :heavy_minus_sign:                                                                    | The App object provides all of the details for an app, as well as some configuration. |
| `updateMask`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |