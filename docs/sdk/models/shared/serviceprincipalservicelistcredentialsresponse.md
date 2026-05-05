# ServicePrincipalServiceListCredentialsResponse

The ServicePrincipalServiceListCredentialsResponse message.

## Example Usage

```typescript
import { ServicePrincipalServiceListCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalServiceListCredentialsResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `list`                                                                                          | [shared.ServicePrincipalCredential](../../../sdk/models/shared/serviceprincipalcredential.md)[] | :heavy_minus_sign:                                                                              | The list field.                                                                                 |
| `nextPageToken`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | The nextPageToken field.                                                                        |