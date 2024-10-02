# ExportServiceListEventsResponse

The ExportServiceListEventsResponse message.

## Example Usage

```typescript
import { ExportServiceListEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExportServiceListEventsResponse = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `list`                                      | Record<string, *any*>[]                     | :heavy_minus_sign:                          | List contains an array of JSON OCSF events. |
| `nextPageToken`                             | *string*                                    | :heavy_minus_sign:                          | The nextPageToken field.                    |