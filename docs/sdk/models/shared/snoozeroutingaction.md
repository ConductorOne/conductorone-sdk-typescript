# SnoozeRoutingAction

SnoozeRoutingAction snoozes a matched finding for a relative duration
 (resolved to snooze_until = now + duration at execution time).

## Example Usage

```typescript
import { SnoozeRoutingAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SnoozeRoutingAction = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `duration`         | *string*           | :heavy_minus_sign: | N/A                |
| `reason`           | *string*           | :heavy_minus_sign: | The reason field.  |