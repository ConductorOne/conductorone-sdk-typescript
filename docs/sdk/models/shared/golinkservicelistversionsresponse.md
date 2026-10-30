# GoLinkServiceListVersionsResponse

The GoLinkServiceListVersionsResponse message.

## Example Usage

```typescript
import { GoLinkServiceListVersionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkServiceListVersionsResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `list`                                                                | [shared.GoLinkVersion](../../../sdk/models/shared/golinkversion.md)[] | :heavy_minus_sign:                                                    | The list field.                                                       |
| `nextPageToken`                                                       | *string*                                                              | :heavy_minus_sign:                                                    | The nextPageToken field.                                              |