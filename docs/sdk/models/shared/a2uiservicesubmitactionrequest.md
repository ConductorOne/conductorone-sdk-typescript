# A2UIServiceSubmitActionRequest

A2UIServiceSubmitActionRequest submits a user action.

## Example Usage

```typescript
import { A2UIServiceSubmitActionRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIServiceSubmitActionRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The actionName field.                                                                         |
| `clientTimestamp`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `context`                                                                                     | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | The context field.                                                                            |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The conversationId field.                                                                     |
| `dataModelJson`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The dataModelJson field.                                                                      |
| `sourceComponentId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The sourceComponentId field.                                                                  |