# ConnectorServiceGetCredentialsResponse

ConnectorServiceGetCredentialsResponse is the response returned by the get method.

## Example Usage

```typescript
import { ConnectorServiceGetCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceGetCredentialsResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `connectorCredential`                                                           | [shared.ConnectorCredential](../../../sdk/models/shared/connectorcredential.md) | :heavy_minus_sign:                                                              | ConnectorCredential is used by a connector to authenticate with conductor one.  |