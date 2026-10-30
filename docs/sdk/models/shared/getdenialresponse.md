# GetDenialResponse

GetDenialResponse contains a denial episode and its first-refusal context.

## Example Usage

```typescript
import { GetDenialResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetDenialResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `episode`                                                                       | [shared.DenialEpisode](../../../sdk/models/shared/denialepisode.md)             | :heavy_minus_sign:                                                              | N/A                                                                             |
| `firstDenialMoney`                                                              | [shared.DenialMoneySnapshot](../../../sdk/models/shared/denialmoneysnapshot.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `historicalTrace`                                                               | [shared.AdmissionTrace](../../../sdk/models/shared/admissiontrace.md)           | :heavy_minus_sign:                                                              | N/A                                                                             |