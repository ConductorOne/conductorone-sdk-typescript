# DirectoryView

The directory view contains a directory and an app_path which is a JSONPATH set to the location in the expand mask that the expanded app will live if requested by the expander.

## Example Usage

```typescript
import { DirectoryView } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryView = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `appPath`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | JSONPATH expression indicating the location of the App object in the  array. |
| `directory`                                                                  | [shared.Directory](../../../sdk/models/shared/directory.md)                  | :heavy_minus_sign:                                                           | N/A                                                                          |