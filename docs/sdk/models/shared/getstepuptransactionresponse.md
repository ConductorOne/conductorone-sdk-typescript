# GetStepUpTransactionResponse

Response message containing the requested step-up transaction

## Example Usage

```typescript
import { GetStepUpTransactionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetStepUpTransactionResponse = {};
```

## Fields

| Field                                                                                                                                                                                                            | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stepUpTransaction`                                                                                                                                                                                              | [shared.StepUpTransaction](../../../sdk/models/shared/stepuptransaction.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                               | StepUpTransaction represents a record of a step-up authentication attempt<br/><br/>This message contains a oneof named target. Only a single field of the following list may be set at a time:<br/>  - approveTask<br/>  - test<br/> |