# RequestCatalogManagementServiceGetResponse

The request catalog management service get response returns a request catalog view with the expanded items in the expanded array indicated by the expand mask in the request.

## Example Usage

```typescript
import { RequestCatalogManagementServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceGetResponse = {};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                                      | [shared.RequestCatalogManagementServiceGetResponseExpanded](../../../sdk/models/shared/requestcatalogmanagementservicegetresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                              | List of serialized related objects.                                                                                                             |
| `requestCatalogView`                                                                                                                            | [shared.RequestCatalogView](../../../sdk/models/shared/requestcatalogview.md)                                                                   | :heavy_minus_sign:                                                                                                                              | The request catalog view contains the serialized request catalog and paths to objects referenced by the request catalog.                        |