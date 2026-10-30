# EdgeServiceListEgressTrafficEventsResponse

The EdgeServiceListEgressTrafficEventsResponse message.

## Example Usage

```typescript
import { EdgeServiceListEgressTrafficEventsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListEgressTrafficEventsResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `events`                                                                | [shared.TBTrafficEvent](../../../sdk/models/shared/tbtrafficevent.md)[] | :heavy_minus_sign:                                                      | The events field.                                                       |
| `nextPageToken`                                                         | *string*                                                                | :heavy_minus_sign:                                                      | The nextPageToken field.                                                |