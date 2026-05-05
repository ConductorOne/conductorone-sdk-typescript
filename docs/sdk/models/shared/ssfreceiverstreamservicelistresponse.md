# SSFReceiverStreamServiceListResponse

SSFReceiverStreamServiceListResponse contains a page of SSF receiver streams.

## Example Usage

```typescript
import { SSFReceiverStreamServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverStreamServiceListResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `list`                                                                        | [shared.SSFReceiverStream](../../../sdk/models/shared/ssfreceiverstream.md)[] | :heavy_minus_sign:                                                            | The SSF receiver streams in the current page.                                 |
| `nextPageToken`                                                               | *string*                                                                      | :heavy_minus_sign:                                                            | Token to retrieve the next page. Empty when there are no more results.        |