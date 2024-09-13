# ManualProvision

Manual provisioning indicates that a human must intervene for the provisioning of this step.

## Example Usage

```typescript
import { ManualProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ManualProvision = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `instructions`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | This field indicates a text body of instructions for the provisioner to indicate. |
| `userIds`                                                                         | *string*[]                                                                        | :heavy_minus_sign:                                                                | An array of users that are required to provision during this step.                |