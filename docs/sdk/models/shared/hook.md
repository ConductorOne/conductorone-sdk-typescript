# Hook

Hook represents a customer-configured interception point for tool calls.

This message contains a oneof named hook_type. Only a single field of the following list may be set at a time:
  - function
  - builtinPattern


## Example Usage

```typescript
import { Hook } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Hook = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `builtinPattern`                                                                              | [shared.BuiltInPattern](../../../sdk/models/shared/builtinpattern.md)                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The description field.                                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The displayName field.                                                                        |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The enabled field.                                                                            |
| `event`                                                                                       | [shared.Event](../../../sdk/models/shared/event.md)                                           | :heavy_minus_sign:                                                                            | The event field.                                                                              |
| `filter`                                                                                      | [shared.HookFilter](../../../sdk/models/shared/hookfilter.md)                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `function`                                                                                    | [shared.HookFunctionRef](../../../sdk/models/shared/hookfunctionref.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The id field.                                                                                 |
| `priority`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | The priority field.                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |