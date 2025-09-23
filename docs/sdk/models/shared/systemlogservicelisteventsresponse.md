# SystemLogServiceListEventsResponse

The SystemLogServiceListEventsResponse message.

## Example Usage

```typescript
import { SystemLogServiceListEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SystemLogServiceListEventsResponse = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `list`                                      | Record<string, *any*>[]                     | :heavy_minus_sign:                          | List contains an array of JSON OCSF events. |
| `nextPageToken`                             | *string*                                    | :heavy_minus_sign:                          | The nextPageToken field.                    |