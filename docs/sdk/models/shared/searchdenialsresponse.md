# SearchDenialsResponse

SearchDenialsResponse contains one page of denial episodes.

## Example Usage

```typescript
import { SearchDenialsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchDenialsResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `episodes`                                                                | [shared.DenialEpisode](../../../sdk/models/shared/denialepisode.md)[]     | :heavy_minus_sign:                                                        | Episodes ordered by most recent refusal, then unique ID, both descending. |
| `nextPageToken`                                                           | *string*                                                                  | :heavy_minus_sign:                                                        | Token for the next page. Empty when no more episodes remain.              |