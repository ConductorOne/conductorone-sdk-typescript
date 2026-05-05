# ServicePrincipalServiceListBindingsResponse

The ServicePrincipalServiceListBindingsResponse message.

## Example Usage

```typescript
import { ServicePrincipalServiceListBindingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalServiceListBindingsResponse = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `bindings`                                                                                                  | [shared.ServicePrincipalBinding](../../../sdk/models/shared/serviceprincipalbinding.md)[]                   | :heavy_minus_sign:                                                                                          | Active bindings held by the subject in this page. Empty when the<br/> subject is unbound. Order is unspecified. |
| `nextPageToken`                                                                                             | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The nextPageToken field.                                                                                    |