# DirectoryServiceGetResponse

The Directory Service Get Response returns a directory view with a directory and JSONPATHs indicating the
 location in the expanded array that items are expanded as indicated by the expand mask in the request.

## Example Usage

```typescript
import { DirectoryServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryServiceGetResponse = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `directoryView`                                                                                                   | [shared.DirectoryView](../../../sdk/models/shared/directoryview.md)                                               | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `expanded`                                                                                                        | [shared.DirectoryServiceGetResponseExpanded](../../../sdk/models/shared/directoryservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                | List of serialized related objects.                                                                               |