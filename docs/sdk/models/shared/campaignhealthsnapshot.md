# CampaignHealthSnapshot

Campaign health snapshot. Read-only; updated by backend maintenance processors.

## Example Usage

```typescript
import { CampaignHealthSnapshot } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CampaignHealthSnapshot = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `phantomLockedCount`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of pending actions locked by terminal (dead) submissions.                              |