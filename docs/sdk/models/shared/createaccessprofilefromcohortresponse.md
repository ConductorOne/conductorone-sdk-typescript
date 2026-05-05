# CreateAccessProfileFromCohortResponse

The CreateAccessProfileFromCohortResponse message.

## Example Usage

```typescript
import { CreateAccessProfileFromCohortResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAccessProfileFromCohortResponse = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `accessProfileId`                                    | *string*                                             | :heavy_minus_sign:                                   | The ID of the created access profile.                |
| `celExpression`                                      | *string*                                             | :heavy_minus_sign:                                   | The CEL expression generated for dynamic membership. |