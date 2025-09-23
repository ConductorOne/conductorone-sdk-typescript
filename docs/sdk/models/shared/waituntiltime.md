# WaitUntilTime

Waits until a specific time of the day (UTC)

## Example Usage

```typescript
import { WaitUntilTime } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitUntilTime = {};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `hours`             | *number*            | :heavy_minus_sign:  | The hours field.    |
| `minutes`           | *number*            | :heavy_minus_sign:  | The minutes field.  |
| `timezone`          | *string*            | :heavy_minus_sign:  | The timezone field. |