# VirtualMCPPresentation

VirtualMCPPresentation selects one presentation mode and provides a stable
 location for mode-specific settings.

This message contains a oneof named mode. Only a single field of the following list may be set at a time:
  - rawTools
  - codeMode
  - dynamicTools


## Example Usage

```typescript
import { VirtualMCPPresentation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: VirtualMCPPresentation = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `codeMode`                                                                                                    | [shared.VirtualMCPCodeModePresentation](../../../sdk/models/shared/virtualmcpcodemodepresentation.md)         | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `dynamicTools`                                                                                                | [shared.VirtualMCPDynamicToolsPresentation](../../../sdk/models/shared/virtualmcpdynamictoolspresentation.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `rawTools`                                                                                                    | [shared.VirtualMCPRawToolsPresentation](../../../sdk/models/shared/virtualmcprawtoolspresentation.md)         | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |