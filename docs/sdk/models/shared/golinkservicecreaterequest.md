# GoLinkServiceCreateRequest

The GoLinkServiceCreateRequest message.

## Example Usage

```typescript
import { GoLinkServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkServiceCreateRequest = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The description field.                                                        |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
| `prerequisite`                                                                | [shared.GoLinkPrerequisite](../../../sdk/models/shared/golinkprerequisite.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `routes`                                                                      | [shared.GoLinkRouteConfig](../../../sdk/models/shared/golinkrouteconfig.md)[] | :heavy_minus_sign:                                                            | The routes field.                                                             |
| `target`                                                                      | [shared.GoLinkTargetInput](../../../sdk/models/shared/golinktargetinput.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |