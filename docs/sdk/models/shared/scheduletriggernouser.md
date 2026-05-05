# ScheduleTriggerNoUser

ScheduleTriggerNoUser fires on a cron schedule with no subject user (e.g. reports, syncs, orchestration).
 Minimum cron interval is enforced at 1 hour in validation.

## Example Usage

```typescript
import { ScheduleTriggerNoUser } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScheduleTriggerNoUser = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `advanced`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The advanced field.                                                                           |
| `cronSpec`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The cronSpec field.                                                                           |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timezone`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The timezone field.                                                                           |