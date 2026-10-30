# TaskTypeCertifyInput

The TaskTypeCertify message indicates that a task is a certify task and all related details.

This message contains a oneof named principal. Only a single field of the following list may be set at a time:
  - resource


## Example Usage

```typescript
import { TaskTypeCertifyInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeCertifyInput = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `resource`                                                                    | [shared.AppResourceRef](../../../sdk/models/shared/appresourceref.md)         | :heavy_minus_sign:                                                            | N/A                                                                           |
| `reviewSubject`                                                               | [shared.ReviewSubjectInput](../../../sdk/models/shared/reviewsubjectinput.md) | :heavy_minus_sign:                                                            | N/A                                                                           |