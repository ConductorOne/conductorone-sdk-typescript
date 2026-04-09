# ServiceAccountMisclassificationType

ServiceAccountMisclassificationType: account classified as human but
 detected as service account, or vice versa.
 Target: AppUserTarget (the misclassified account).

## Example Usage

```typescript
import { ServiceAccountMisclassificationType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServiceAccountMisclassificationType = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `currentAccountType`                                                            | [shared.CurrentAccountType](../../../sdk/models/shared/currentaccounttype.md)   | :heavy_minus_sign:                                                              | What the account is currently classified as in ConductorOne.                    |
| `detectedAccountType`                                                           | [shared.DetectedAccountType](../../../sdk/models/shared/detectedaccounttype.md) | :heavy_minus_sign:                                                              | What the detector thinks the account actually is.                               |