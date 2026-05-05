# SSFReceiverEventSearchServiceSearchResponse

SSFReceiverEventSearchServiceSearchResponse contains the matching events and a pagination token.

## Example Usage

```typescript
import { SSFReceiverEventSearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverEventSearchServiceSearchResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `list`                                                                      | [shared.SSFReceiverEvent](../../../sdk/models/shared/ssfreceiverevent.md)[] | :heavy_minus_sign:                                                          | The SSF events matching the search criteria.                                |
| `nextPageToken`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Token to retrieve the next page. Empty when there are no more results.      |