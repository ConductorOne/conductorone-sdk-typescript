# GetAppManagedStateBindingResponse

GetAppManagedStateBindingResponse contains the managed state of a discovered application.

## Example Usage

```typescript
import { GetAppManagedStateBindingResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GetAppManagedStateBindingResponse = {};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `appManagementState`                                                                                                          | [shared.AppManagedStateBindingView](../../../sdk/models/shared/appmanagedstatebindingview.md)                                 | :heavy_minus_sign:                                                                                                            | N/A                                                                                                                           |
| `expanded`                                                                                                                    | [shared.GetAppManagedStateBindingResponseExpanded](../../../sdk/models/shared/getappmanagedstatebindingresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                            | Related objects requested through expand_mask. REST Get requests do not support expansions; REST Promote requests do.         |