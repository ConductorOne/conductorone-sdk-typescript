# PersonalClientSearchServiceSearchRequest

The PersonalClientSearchServiceSearchRequest message.

## Example Usage

```typescript
import { PersonalClientSearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalClientSearchServiceSearchRequest = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `pageSize`                                                | *number*                                                  | :heavy_minus_sign:                                        | The pageSize field.                                       |
| `pageToken`                                               | *string*                                                  | :heavy_minus_sign:                                        | The pageToken field.                                      |
| `query`                                                   | *string*                                                  | :heavy_minus_sign:                                        | The query field.                                          |
| `users`                                                   | [shared.UserRef](../../../sdk/models/shared/userref.md)[] | :heavy_minus_sign:                                        | The users field.                                          |