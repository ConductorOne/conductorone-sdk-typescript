# InstantiateClassifierTemplateRequest

The InstantiateClassifierTemplateRequest message.

## Example Usage

```typescript
import { InstantiateClassifierTemplateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: InstantiateClassifierTemplateRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `displayName`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Optional display name override for the created Classifier.                |
| `params`                                                                  | Record<string, *string*>                                                  | :heavy_minus_sign:                                                        | Bind-time param values keyed by TemplateParam.key (e.g. grant_policy_id). |
| `templateVersion`                                                         | *string*                                                                  | :heavy_minus_sign:                                                        | Optional; empty instantiates the latest version.                          |