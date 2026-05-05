# SSFReceiverEventSearchServiceSearchRequest

SSFReceiverEventSearchServiceSearchRequest carries the search query and optional filters for narrowing results.

## Example Usage

```typescript
import { SSFReceiverEventSearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSFReceiverEventSearchServiceSearchRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `eventType`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Restricts results to events matching this wire event type URI. Optional.    |
| `matchedUserId`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | Restricts results to events matched to this ConductorOne user ID. Optional. |
| `outcome`                                                                   | [shared.Outcome](../../../sdk/models/shared/outcome.md)                     | :heavy_minus_sign:                                                          | Restricts results to events with this processing outcome. Optional.         |
| `pageSize`                                                                  | *number*                                                                    | :heavy_minus_sign:                                                          | Maximum number of events to return per page.                                |
| `pageToken`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | Token from a previous SearchResponse to fetch the next page of results.     |
| `query`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | Full-text search query matched against event fields.                        |
| `streamId`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | Restricts results to events from this SSF receiver stream. Optional.        |