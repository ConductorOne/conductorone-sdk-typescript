# ListDebuggableConnectorsResponse

ListDebuggableConnectorsResponse contains eligible connectors from the inspected page.

## Example Usage

```typescript
import { ListDebuggableConnectorsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListDebuggableConnectorsResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `connectors`                                                                           | [shared.DebuggableConnector](../../../sdk/models/shared/debuggableconnector.md)[]      | :heavy_minus_sign:                                                                     | Connectors the caller is authorized to manage.                                         |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | Continue while this token is nonempty, even when the filtered connector list is empty. |