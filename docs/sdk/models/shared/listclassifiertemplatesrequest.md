# ListClassifierTemplatesRequest

The ListClassifierTemplatesRequest message.

## Example Usage

```typescript
import { ListClassifierTemplatesRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListClassifierTemplatesRequest = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `latestOnly`                                                        | *boolean*                                                           | :heavy_minus_sign:                                                  | When true, only the latest version of each template id is returned. |
| `pageSize`                                                          | *number*                                                            | :heavy_minus_sign:                                                  | The pageSize field.                                                 |
| `pageToken`                                                         | *string*                                                            | :heavy_minus_sign:                                                  | The pageToken field.                                                |