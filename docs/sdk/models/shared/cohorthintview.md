# CohortHintView

The CohortHintView message.

## Example Usage

```typescript
import { CohortHintView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CohortHintView = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `attribute`                                          | *string*                                             | :heavy_minus_sign:                                   | The user attribute name used for cohort grouping.    |
| `priority`                                           | *number*                                             | :heavy_minus_sign:                                   | Relative priority of this hint.                      |
| `values`                                             | *string*[]                                           | :heavy_minus_sign:                                   | The specific attribute values targeted by this hint. |