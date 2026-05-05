# StepUpMicrosoftSettings

StepUpMicrosoftSettings configures a Microsoft Entra step-up provider using Conditional Access.

## Example Usage

```typescript
import { StepUpMicrosoftSettings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpMicrosoftSettings = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `conditionalAccessIds`                                                              | *string*[]                                                                          | :heavy_minus_sign:                                                                  | Authentication context IDs (C1-C99). Required for ACRS mode; ignored for OIDC mode. |
| `tenant`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | Microsoft Entra tenant ID (GUID or domain). Used for response validation.           |
| `validationMode`                                                                    | [shared.ValidationMode](../../../sdk/models/shared/validationmode.md)               | :heavy_minus_sign:                                                                  | Validation approach. See MicrosoftValidationMode for details on each mode.          |