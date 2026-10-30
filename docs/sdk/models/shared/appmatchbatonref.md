# AppMatchBatonRef

AppMatchBatonRef identifies the connector application that should adopt a manually-created application during uplift.

## Example Usage

```typescript
import { AppMatchBatonRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppMatchBatonRef = {
  appId: "<id>",
  connectorId: "<id>",
  externalId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Application that owns the connector.                                                                                   |
| `connectorId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Connector that discovers the application.                                                                              |
| `externalId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Canonical connector-v2 application resource ID in<br/> `<resource_type>::<resource_id>` form (for example, `app::0oa123`). |