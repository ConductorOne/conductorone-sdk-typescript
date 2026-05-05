# FunctionsServiceTestRequest

FunctionsServiceTestRequest runs tests for a function at a specific commit.

## Example Usage

```typescript
import { FunctionsServiceTestRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceTestRequest = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `commitId`                                                     | *string*                                                       | :heavy_minus_sign:                                             | The commit ID to test. If empty, the published commit is used. |