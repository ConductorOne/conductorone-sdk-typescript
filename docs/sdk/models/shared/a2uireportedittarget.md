# A2UIReportEditTarget

The A2UIReportEditTarget message.

## Example Usage

```typescript
import { A2UIReportEditTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIReportEditTarget = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appliedRunId`                                           | *string*                                                 | :heavy_minus_sign:                                       | Present after this edit result has been durably applied. |
| `expectedProgramId`                                      | *string*                                                 | :heavy_minus_sign:                                       | The expectedProgramId field.                             |
| `reportId`                                               | *string*                                                 | :heavy_minus_sign:                                       | The reportId field.                                      |