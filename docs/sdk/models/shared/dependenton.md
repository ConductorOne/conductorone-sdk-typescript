# DependentOn

DependentOn means the fields in field_names are only valid if every
 dependency is satisfied

## Example Usage

```typescript
import { DependentOn } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DependentOn = {};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependencies`                                                                                                                                                                                       | [shared.Dependency](../../../sdk/models/shared/dependency.md)[]                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                   | The fields that must all be satisfied for the primary field_names to be valid                                                                                                                        |
| ~~`dependencyFieldNames`~~                                                                                                                                                                           | *string*[]                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                   | :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>Deprecated: use dependencies. Each name is read as a presence-only dependency. |