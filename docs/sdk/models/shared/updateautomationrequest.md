# UpdateAutomationRequest

The UpdateAutomationRequest message.

## Example Usage

```typescript
import { UpdateAutomationRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateAutomationRequest = {};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `automation`                                                                                                                                                      | [shared.AutomationInput](../../../sdk/models/shared/automationinput.md)                                                                                           | :heavy_minus_sign:                                                                                                                                                | The Automation message.<br/><br/>This message contains a oneof named disabled_reason. Only a single field of the following list may be set at a time:<br/>  - circuitBreaker<br/> |
| `updateMask`                                                                                                                                                      | *string*                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                | N/A                                                                                                                                                               |