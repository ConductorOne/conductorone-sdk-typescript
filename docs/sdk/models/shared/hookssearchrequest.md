# HooksSearchRequest

The HooksSearchRequest message.

## Example Usage

```typescript
import { HooksSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HooksSearchRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `pageSize`                                                | *number*                                                  | :heavy_minus_sign:                                        | The pageSize field.                                       |
| `pageToken`                                               | *string*                                                  | :heavy_minus_sign:                                        | The pageToken field.                                      |
| `query`                                                   | *string*                                                  | :heavy_minus_sign:                                        | The query field.                                          |
| `refs`                                                    | [shared.HookRef](../../../sdk/models/shared/hookref.md)[] | :heavy_minus_sign:                                        | The refs field.                                           |