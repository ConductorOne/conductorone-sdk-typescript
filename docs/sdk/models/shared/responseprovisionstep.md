# ResponseProvisionStep

The ResponseProvisionStep message.

This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - complete
  - errored


## Example Usage

```typescript
import { ResponseProvisionStep } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResponseProvisionStep = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `responseProvisionStepComplete`                                                                                 | [shared.ResponseProvisionStepComplete](../../../sdk/models/shared/responseprovisionstepcomplete.md)             | :heavy_minus_sign:                                                                                              | The ResponseProvisionStepComplete message.                                                                      |
| `responseProvisionStepErrored`                                                                                  | [shared.ResponseProvisionStepErrored](../../../sdk/models/shared/responseprovisionsteperrored.md)               | :heavy_minus_sign:                                                                                              | The ResponseProvisionStepErrored message.                                                                       |
| `version`                                                                                                       | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | version contains the constant value "v1". Future versions of the Webhook Response<br/> will use a different string. |