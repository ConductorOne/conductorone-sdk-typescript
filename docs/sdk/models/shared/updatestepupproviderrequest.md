# UpdateStepUpProviderRequest

The UpdateStepUpProviderRequest message.

## Example Usage

```typescript
import { UpdateStepUpProviderRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateStepUpProviderRequest = {};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stepUpProvider`                                                                                                                                                     | [shared.StepUpProviderInput](../../../sdk/models/shared/stepupproviderinput.md)                                                                                      | :heavy_minus_sign:                                                                                                                                                   | The StepUpProvider message.<br/><br/>This message contains a oneof named settings. Only a single field of the following list may be set at a time:<br/>  - oauth2<br/>  - microsoft<br/> |
| `updateMask`                                                                                                                                                         | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |