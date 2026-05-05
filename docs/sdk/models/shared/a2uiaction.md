# A2UIAction

Action represents what happens when a component is activated (e.g., button click).

This message contains a oneof named action_type. Only a single field of the following list may be set at a time:
  - event
  - functionCall


## Example Usage

```typescript
import { A2UIAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIAction = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `serverEvent`                                                     | [shared.ServerEvent](../../../sdk/models/shared/serverevent.md)   | :heavy_minus_sign:                                                | ServerEvent triggers a server-side action.                        |
| `functionCall`                                                    | [shared.FunctionCall](../../../sdk/models/shared/functioncall.md) | :heavy_minus_sign:                                                | FunctionCall represents a client-side function invocation.        |