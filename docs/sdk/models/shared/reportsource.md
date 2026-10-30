# ~~ReportSource~~

ReportSource is one provenance entry: what a run read to produce its numbers.

 Retired: ReportingService.GetRunProvenance derives provenance from the
 durable surface and program snapshots rather than this copied list. Kept
 because a published message may not be deleted.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { ReportSource } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ReportSource = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `count`                                      | *number*                                     | :heavy_minus_sign:                           | Rows contributing.                           |
| `kind`                                       | *string*                                     | :heavy_minus_sign:                           | The kind field.                              |
| `label`                                      | *string*                                     | :heavy_minus_sign:                           | The label field.                             |
| `ref`                                        | *string*                                     | :heavy_minus_sign:                           | Tool + query fingerprint, or object type/id. |