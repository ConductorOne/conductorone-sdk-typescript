# AppEntitlementServiceUpdateAutomationResponse

The AppEntitlementServiceUpdateAutomationResponse message.

## Example Usage

```typescript
import { AppEntitlementServiceUpdateAutomationResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementServiceUpdateAutomationResponse = {};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `appEntitlementAutomation`                                                                                                                                                                          | [shared.AppEntitlementAutomation](../../../sdk/models/shared/appentitlementautomation.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                  | The AppEntitlementAutomation message.<br/><br/>This message contains a oneof named conditions. Only a single field of the following list may be set at a time:<br/>  - none<br/>  - entitlements<br/>  - cel<br/>  - basic<br/> |