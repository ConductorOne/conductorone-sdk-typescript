# CreateFindingTaskRequest

The CreateFindingTaskRequest message.

## Example Usage

```typescript
import { CreateFindingTaskRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateFindingTaskRequest = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `policyId`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional policy ID. Defaults to the app's grant policy or the built-in<br/> "Finding Review" policy. |