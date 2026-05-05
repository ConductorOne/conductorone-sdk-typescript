# ExportServiceListEventsResponse

ExportServiceListEventsResponse is the response containing audit events for an export.

## Example Usage

```typescript
import { ExportServiceListEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportServiceListEventsResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `list`                                                                                 | Record<string, *any*>[]                                                                | :heavy_minus_sign:                                                                     | List contains an array of JSON OCSF events.                                            |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The token to retrieve the next page of results, or empty if there are no more results. |