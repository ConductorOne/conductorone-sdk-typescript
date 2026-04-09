# ExternalClientSearchServiceSearchResponse

The ExternalClientSearchServiceSearchResponse message.

## Example Usage

```typescript
import { ExternalClientSearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalClientSearchServiceSearchResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.ExternalClientInfo](../../../sdk/models/shared/externalclientinfo.md)[] | :heavy_minus_sign:                                                              | Uses ExternalClientInfo with user_id populated for admin views                  |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |