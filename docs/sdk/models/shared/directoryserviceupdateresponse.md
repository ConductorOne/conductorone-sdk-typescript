# DirectoryServiceUpdateResponse

The DirectoryServiceUpdateResponse message.

## Example Usage

```typescript
import { DirectoryServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DirectoryServiceUpdateResponse = {};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `directoryView`                                                                                                         | [shared.DirectoryView](../../../sdk/models/shared/directoryview.md)                                                     | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `expanded`                                                                                                              | [shared.DirectoryServiceUpdateResponseExpanded](../../../sdk/models/shared/directoryserviceupdateresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                      | List of serialized related objects.                                                                                     |