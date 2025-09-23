# SystemLogServiceListEventsRequest

The SystemLogServiceListEventsRequest message.

## Example Usage

```typescript
import { SystemLogServiceListEventsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SystemLogServiceListEventsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The pageSize field.                                                                           |
| `pageToken`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The pageToken field.                                                                          |
| `since`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sinceEventUid`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The sinceEventUid field.                                                                      |
| `sortDirection`                                                                               | [shared.SortDirection](../../../sdk/models/shared/sortdirection.md)                           | :heavy_minus_sign:                                                                            | The sortDirection field.                                                                      |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |