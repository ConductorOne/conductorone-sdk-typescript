# EdgeServiceListUnattributedInferenceTrafficEventsResponse

The EdgeServiceListUnattributedInferenceTrafficEventsResponse message.

## Example Usage

```typescript
import { EdgeServiceListUnattributedInferenceTrafficEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListUnattributedInferenceTrafficEventsResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `events`                                                                | [shared.TBTrafficEvent](../../../sdk/models/shared/tbtrafficevent.md)[] | :heavy_minus_sign:                                                      | The events field.                                                       |
| `nextPageToken`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | The nextPageToken field.                                                |