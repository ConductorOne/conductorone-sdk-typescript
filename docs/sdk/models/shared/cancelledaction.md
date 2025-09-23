# CancelledAction

The outcome of a provision instance that is cancelled.

## Example Usage

```typescript
import { CancelledAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CancelledAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cancelledAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cancelledByUserId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The userID, usually the system, that cancells a provision instance.                           |