# LocalDirectoryConfigServiceCreateResponse

The LocalDirectoryConfigServiceCreateResponse message.

## Example Usage

```typescript
import { LocalDirectoryConfigServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LocalDirectoryConfigServiceCreateResponse = {};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `localDirectoryConfig`                                                                                                                                                                           | [shared.LocalDirectoryConfig](../../../sdk/models/shared/localdirectoryconfig.md)                                                                                                                | :heavy_minus_sign:                                                                                                                                                                               | LocalDirectoryConfig is the public representation of a C1-managed local<br/> directory configuration. The underlying directory infrastructure is provided<br/> by the linked App (identified by app_id). |