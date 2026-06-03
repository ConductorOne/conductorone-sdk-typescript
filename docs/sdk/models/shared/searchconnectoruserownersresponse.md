# SearchConnectorUserOwnersResponse

SearchConnectorUserOwnersResponse is the response for searching user ownership sources on a connector.

## Example Usage

```typescript
import { SearchConnectorUserOwnersResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchConnectorUserOwnersResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.ConnectorOwnerUser](../../../sdk/models/shared/connectorowneruser.md)[] | :heavy_minus_sign:                                                              | The list field.                                                                 |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |