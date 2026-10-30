# AccessReviewReport

The AccessReviewReport message.

## Example Usage

```typescript
import { AccessReviewReport } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewReport = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessReviewId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The accessReviewId field.                                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `downloadUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The downloadUrl field.                                                                        |
| `format`                                                                                      | [shared.Format](../../../sdk/models/shared/format.md)                                         | :heavy_minus_sign:                                                                            | Output format of the generated file (XLSX / JSON / CSV).                                      |
| `hashes`                                                                                      | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | The hashes field.                                                                             |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `state`                                                                                       | [shared.AccessReviewReportState](../../../sdk/models/shared/accessreviewreportstate.md)       | :heavy_minus_sign:                                                                            | The state field.                                                                              |