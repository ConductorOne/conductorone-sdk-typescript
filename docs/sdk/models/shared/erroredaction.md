# ErroredAction

The outcome of a provision instance that has errored.

## Example Usage

```typescript
import { ErroredAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ErroredAction = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The description of a provision instance that has errored.                                                                  |
| `errorCode`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The error code of a provision instance that has errored. This is only PEC-1 for now, but more will be added in the future. |
| `erroredAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |