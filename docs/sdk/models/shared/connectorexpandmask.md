# ConnectorExpandMask

The ConnectorExpandMask is used to expand related objects on a connector.

## Example Usage

```typescript
import { ConnectorExpandMask } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorExpandMask = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `paths`                                                                             | *string*[]                                                                          | :heavy_minus_sign:                                                                  | Paths that you want expanded in the response. Possible values are "app_id" and "*". |