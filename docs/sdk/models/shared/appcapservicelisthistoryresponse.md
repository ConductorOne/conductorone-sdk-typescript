# AppCapServiceListHistoryResponse

The AppCapServiceListHistoryResponse message.

## Example Usage

```typescript
import { AppCapServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppCapServiceListHistoryResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.AppCapHistoryEntry](../../../sdk/models/shared/appcaphistoryentry.md)[] | :heavy_minus_sign:                                                              | The list field.                                                                 |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |