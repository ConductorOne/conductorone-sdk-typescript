# SubjectAppLimitServiceListHistoryResponse

The SubjectAppLimitServiceListHistoryResponse message.

## Example Usage

```typescript
import { SubjectAppLimitServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SubjectAppLimitServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `list`                                                                                            | [shared.SubjectAppLimitHistoryEntry](../../../sdk/models/shared/subjectapplimithistoryentry.md)[] | :heavy_minus_sign:                                                                                | The list field.                                                                                   |
| `nextPageToken`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | The nextPageToken field.                                                                          |