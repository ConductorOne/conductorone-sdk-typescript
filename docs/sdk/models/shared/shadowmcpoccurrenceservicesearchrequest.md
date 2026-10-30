# ShadowMcpOccurrenceServiceSearchRequest

The ShadowMcpOccurrenceServiceSearchRequest message.

## Example Usage

```typescript
import { ShadowMcpOccurrenceServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ShadowMcpOccurrenceServiceSearchRequest = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `findingId`                                        | *string*                                           | :heavy_minus_sign:                                 | The shadow-mcp finding to resolve occurrences for. |
| `pageSize`                                         | *number*                                           | :heavy_minus_sign:                                 | The pageSize field.                                |
| `pageToken`                                        | *string*                                           | :heavy_minus_sign:                                 | The pageToken field.                               |