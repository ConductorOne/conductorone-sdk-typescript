# SSFReceiverEventServiceListResponse

SSFReceiverEventServiceListResponse contains a page of received SSF events.

## Example Usage

```typescript
import { SSFReceiverEventServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverEventServiceListResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `list`                                                                      | [shared.SSFReceiverEvent](../../../sdk/models/shared/ssfreceiverevent.md)[] | :heavy_minus_sign:                                                          | The SSF events in the current page.                                         |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token to retrieve the next page. Empty when there are no more results.      |