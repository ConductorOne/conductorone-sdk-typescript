# FunctionsServiceInvokeRequest

The FunctionsServiceInvokeRequest message.

This message contains a oneof named arg. Only a single field of the following list may be set at a time:
  - json


## Example Usage

```typescript
import { FunctionsServiceInvokeRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionsServiceInvokeRequest = {};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `commitId`                                                                                                                                                                                 | *string*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                         | The commit ID specifying which version of the function code to run.                                                                                                                        |
| `json`                                                                                                                                                                                     | *string*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                         | The JSON-encoded input data passed to the function.<br/>This field is part of the `arg` oneof.<br/>See the documentation for `c1.api.functions.v1.FunctionsServiceInvokeRequest` for more details. |
| `vfsId`                                                                                                                                                                                    | *string*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                         | Optional VFS volume ID to attach to this invocation. If empty, VFS operations will error.                                                                                                  |