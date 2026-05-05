# BusinessHours

BusinessHours defines a weekly time window in a specific timezone.

## Example Usage

```typescript
import { BusinessHours } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BusinessHours = {};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `days`                     | *number*[]                 | :heavy_minus_sign:         | 0=Sun, 1=Mon, ..., 6=Sat.  |
| `end`                      | *string*                   | :heavy_minus_sign:         | "HH:MM" in 24-hour format. |
| `start`                    | *string*                   | :heavy_minus_sign:         | "HH:MM" in 24-hour format. |
| `timezone`                 | *string*                   | :heavy_minus_sign:         | The timezone field.        |