# FindingDispatchOutcomeNotify

FindingDispatchOutcomeNotify notifies recipients once a dispatch settles.

## Example Usage

```typescript
import { FindingDispatchOutcomeNotify } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingDispatchOutcomeNotify = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `onDone`              | *boolean*             | :heavy_minus_sign:    | The onDone field.     |
| `onError`             | *boolean*             | :heavy_minus_sign:    | The onError field.    |
| `recipients`          | *string*[]            | :heavy_minus_sign:    | The recipients field. |