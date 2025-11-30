# Action

The Action message.

This message contains a oneof named target. Only a single field of the following list may be set at a time:
  - automation


## Example Usage

```typescript
import { Action } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Action = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `actionTargetAutomation`                                                              | [shared.ActionTargetAutomation](../../../sdk/models/shared/actiontargetautomation.md) | :heavy_minus_sign:                                                                    | The ActionTargetAutomation message.                                                   |