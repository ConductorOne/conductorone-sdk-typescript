# StepUpMicrosoftSettings

StepUpMicrosoftSettings represents a Microsoft Entra Provider using Conditional Access Policies to enforce step-up authentication.

## Example Usage

```typescript
import { StepUpMicrosoftSettings } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StepUpMicrosoftSettings = {};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `conditionalAccessIds`          | *string*[]                      | :heavy_minus_sign:              | The conditionalAccessIds field. |
| `tenant`                        | *string*                        | :heavy_minus_sign:              | The tenant field.               |