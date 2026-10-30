# GoLinkTargetInput

The GoLinkTarget message.

This message contains a oneof named target. Only a single field of the following list may be set at a time:
  - redirect
  - action
  - chooser


## Example Usage

```typescript
import { GoLinkTargetInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkTargetInput = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `action`                                                                                  | [shared.GoLinkActionTarget](../../../sdk/models/shared/golinkactiontarget.md)             | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `chooser`                                                                                 | [shared.GoLinkChooserTargetInput](../../../sdk/models/shared/golinkchoosertargetinput.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `redirect`                                                                                | [shared.GoLinkRedirectTarget](../../../sdk/models/shared/golinkredirecttarget.md)         | :heavy_minus_sign:                                                                        | N/A                                                                                       |