# SpendRemedyReviewTarget

A missing row is not a deleted version. Current state may differ from capture.

This message contains a oneof named state. Only a single field of the following list may be set at a time:
  - absent
  - live
  - deleted


## Example Usage

```typescript
import { SpendRemedyReviewTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SpendRemedyReviewTarget = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `absent`                                                                                        | [shared.SpendRemedyAbsentTarget](../../../sdk/models/shared/spendremedyabsenttarget.md)         | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `deleted`                                                                                       | [shared.SpendRemedyControlsSnapshot](../../../sdk/models/shared/spendremedycontrolssnapshot.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `live`                                                                                          | [shared.SpendRemedyControlsSnapshot](../../../sdk/models/shared/spendremedycontrolssnapshot.md) | :heavy_minus_sign:                                                                              | N/A                                                                                             |