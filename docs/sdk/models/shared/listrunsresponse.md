# ListRunsResponse

The ListRunsResponse message.

## Example Usage

```typescript
import { ListRunsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListRunsResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `list`                                                                                    | [shared.RoleMiningManagementRun](../../../sdk/models/shared/roleminingmanagementrun.md)[] | :heavy_minus_sign:                                                                        | The list of role mining analysis runs.                                                    |
| `nextPageToken`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Token to retrieve the next page of results, empty if no more results.                     |