# GoLinkInput

GoLink is the API representation of a short link.

## Example Usage

```typescript
import { GoLinkInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The description field.                                                        |
| `displayName`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The displayName field.                                                        |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The id field.                                                                 |
| `prerequisite`                                                                | [shared.GoLinkPrerequisite](../../../sdk/models/shared/golinkprerequisite.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `routes`                                                                      | [shared.GoLinkRouteConfig](../../../sdk/models/shared/golinkrouteconfig.md)[] | :heavy_minus_sign:                                                            | The routes field.                                                             |
| `status`                                                                      | [shared.GoLinkStatus](../../../sdk/models/shared/golinkstatus.md)             | :heavy_minus_sign:                                                            | The status field.                                                             |
| `target`                                                                      | [shared.GoLinkTargetInput](../../../sdk/models/shared/golinktargetinput.md)   | :heavy_minus_sign:                                                            | N/A                                                                           |