# InvokeFunctionDispatcher

InvokeFunctionDispatcher runs a published C1 function by id.

## Example Usage

```typescript
import { InvokeFunctionDispatcher } from "conductorone-sdk-typescript/sdk/models/shared";

let value: InvokeFunctionDispatcher = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `args`                                                                                                       | Record<string, *string*>                                                                                     | :heavy_minus_sign:                                                                                           | Arguments passed to the function, keyed by arg name (v0: verbatim values;<br/> CEL evaluation is a later phase). |
| `functionCommitId`                                                                                           | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Optional pinned function commit; empty floats to the published commit.                                       |
| `functionId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | ID of the published function to invoke.                                                                      |