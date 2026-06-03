# HooksServiceCreateRequest

The HooksServiceCreateRequest message.

This message contains a oneof named hook_type. Only a single field of the following list may be set at a time:
  - function
  - builtinPattern


## Example Usage

```typescript
import { HooksServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HooksServiceCreateRequest = {
  displayName: "Dameon98",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `builtinPattern`                                                                                      | [shared.BuiltInPattern](../../../sdk/models/shared/builtinpattern.md)                                 | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `description`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The description field.                                                                                |
| `displayName`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The displayName field.                                                                                |
| `enabled`                                                                                             | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | The enabled field.                                                                                    |
| `event`                                                                                               | [shared.HooksServiceCreateRequestEvent](../../../sdk/models/shared/hooksservicecreaterequestevent.md) | :heavy_minus_sign:                                                                                    | The event field.                                                                                      |
| `hookFilter`                                                                                          | [shared.HookFilter](../../../sdk/models/shared/hookfilter.md)                                         | :heavy_minus_sign:                                                                                    | HookFilter determines which tool calls a hook applies to.                                             |
| `function`                                                                                            | [shared.HookFunctionRef](../../../sdk/models/shared/hookfunctionref.md)                               | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `priority`                                                                                            | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The priority field.                                                                                   |