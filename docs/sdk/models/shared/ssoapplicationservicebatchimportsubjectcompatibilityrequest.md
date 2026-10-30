# SSOApplicationServiceBatchImportSubjectCompatibilityRequest

SSOApplicationServiceBatchImportSubjectCompatibilityRequest validates or
 imports a bounded batch of per-user subject bindings.

## Example Usage

```typescript
import { SSOApplicationServiceBatchImportSubjectCompatibilityRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceBatchImportSubjectCompatibilityRequest = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `apply`                                                                                                         | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | When false, validate without writing. Clients should validate every batch<br/> before beginning the apply pass. |
| `entries`                                                                                                       | [shared.SSOSubjectCompatibilityImportEntry](../../../sdk/models/shared/ssosubjectcompatibilityimportentry.md)[] | :heavy_minus_sign:                                                                                              | Client-parsed rows. Each request is bounded to 50 entries.                                                      |
| `importId`                                                                                                      | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Client-generated identifier shared by every batch from one source file.                                         |