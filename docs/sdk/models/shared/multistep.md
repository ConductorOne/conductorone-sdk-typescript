# MultiStep

MultiStep indicates that this provision step has multiple steps to process.

## Example Usage

```typescript
import { MultiStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MultiStep = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `provisionSteps`                                                          | [shared.ProvisionPolicy](../../../sdk/models/shared/provisionpolicy.md)[] | :heavy_minus_sign:                                                        | The array of provision steps to process.                                  |