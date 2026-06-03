# GetAutomationResponse

The GetAutomationResponse message.

## Example Usage

```typescript
import { GetAutomationResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAutomationResponse = {};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `automation`                                                                                                                                                      | [shared.Automation](../../../sdk/models/shared/automation.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                | The Automation message.<br/><br/>This message contains a oneof named disabled_reason. Only a single field of the following list may be set at a time:<br/>  - circuitBreaker<br/> |