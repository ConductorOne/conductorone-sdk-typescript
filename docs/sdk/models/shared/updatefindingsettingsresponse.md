# UpdateFindingSettingsResponse

The UpdateFindingSettingsResponse message.

## Example Usage

```typescript
import { UpdateFindingSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateFindingSettingsResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `list`                                                                            | [shared.FindingTypeSetting](../../../sdk/models/shared/findingtypesetting.md)[]   | :heavy_minus_sign:                                                                | The full catalog after the write, in the same shape ListFindingSettings<br/> returns. |