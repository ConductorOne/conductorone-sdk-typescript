# DirectoryServiceCreateResponse

The DirectoryServiceCreateResponse message.

## Example Usage

```typescript
import { DirectoryServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryServiceCreateResponse = {};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `directoryView`                                                                                                                                                                  | [shared.DirectoryView](../../../sdk/models/shared/directoryview.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                               | The directory view contains a directory and an app_path which is a JSONPATH set to the location in the expand mask that the expanded app will live if requested by the expander. |
| `expanded`                                                                                                                                                                       | [shared.DirectoryServiceCreateResponseExpanded](../../../sdk/models/shared/directoryservicecreateresponseexpanded.md)[]                                                          | :heavy_minus_sign:                                                                                                                                                               | List of serialized related objects.                                                                                                                                              |