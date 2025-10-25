# ScheduleTriggerAppUser

The ScheduleTriggerAppUser message.

## Example Usage

```typescript
import { ScheduleTriggerAppUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScheduleTriggerAppUser = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The appId field.                                                                              |
| `condition`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The condition field.                                                                          |
| `cronSpec`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The cronSpec field.                                                                           |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The timezone field.                                                                           |