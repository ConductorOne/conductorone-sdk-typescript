# CreateAutomationRequestInput

The CreateAutomationRequest message.

## Example Usage

```typescript
import { CreateAutomationRequestInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAutomationRequestInput = {};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appEntitlementAutomation`                                                                                                                                                                          | [shared.AppEntitlementAutomationInput](../../../sdk/models/shared/appentitlementautomationinput.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                  | The AppEntitlementAutomation message.<br/><br/>This message contains a oneof named conditions. Only a single field of the following list may be set at a time:<br/>  - none<br/>  - entitlements<br/>  - cel<br/>  - basic<br/> |