# AdmissionTrace

AdmissionTrace records the bounded authority decision made during admission.

## Example Usage

```typescript
import { AdmissionTrace } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AdmissionTrace = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `allocations`                                                             | [shared.TraceAllocation](../../../sdk/models/shared/traceallocation.md)[] | :heavy_minus_sign:                                                        | Per-scope limits resolved during admission.                               |
| `authorityRefs`                                                           | [shared.AuthorityRef](../../../sdk/models/shared/authorityref.md)[]       | :heavy_minus_sign:                                                        | Configurations read during admission.                                     |