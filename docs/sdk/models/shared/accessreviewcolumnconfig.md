# AccessReviewColumnConfig

Configuration for which columns are visible in the reviewer task list.

## Example Usage

```typescript
import { AccessReviewColumnConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessReviewColumnConfig = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `columns`                                                                                                                | [shared.Columns](../../../sdk/models/shared/columns.md)[]                                                                | :heavy_minus_sign:                                                                                                       | Ordered list of columns visible to reviewers.<br/> If empty, the default column set for the campaign's default_view is used. |