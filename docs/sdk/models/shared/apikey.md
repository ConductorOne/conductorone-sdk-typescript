# APIKey

APIKey is one API key search result: a personal client or a service principal key.

This message contains a oneof named key. Only a single field of the following list may be set at a time:
  - personalClient
  - servicePrincipalKey


## Example Usage

```typescript
import { APIKey } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKey = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `personalClient`                                                                      | [shared.PersonalClient](../../../sdk/models/shared/personalclient.md)                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `servicePrincipalKey`                                                                 | [shared.ServicePrincipalAPIKey](../../../sdk/models/shared/serviceprincipalapikey.md) | :heavy_minus_sign:                                                                    | N/A                                                                                   |