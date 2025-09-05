# DefaultBehavior

The DefaultBehavior message.

## Example Usage

```typescript
import { DefaultBehavior } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultBehavior = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectorId`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | this checks if the entitlement is enabled by provisioning in a specific connector<br/> this can happen automatically and doesn't need any extra info |