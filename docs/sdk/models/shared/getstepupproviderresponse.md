# GetStepUpProviderResponse

The GetStepUpProviderResponse message.

## Example Usage

```typescript
import { GetStepUpProviderResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetStepUpProviderResponse = {};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stepUpProvider`                                                                                                                                                     | [shared.StepUpProvider](../../../sdk/models/shared/stepupprovider.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                   | The StepUpProvider message.<br/><br/>This message contains a oneof named settings. Only a single field of the following list may be set at a time:<br/>  - oauth2<br/>  - microsoft<br/> |