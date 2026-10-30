# EdgeServiceListResponse

EdgeServiceListResponse lists Edges for an app.

## Example Usage

```typescript
import { EdgeServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListResponse = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `list`                                              | [shared.Edge](../../../sdk/models/shared/edge.md)[] | :heavy_minus_sign:                                  | The list field.                                     |
| `nextPageToken`                                     | *string*                                            | :heavy_minus_sign:                                  | Token for next page.                                |