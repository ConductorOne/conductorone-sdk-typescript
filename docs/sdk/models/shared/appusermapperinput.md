# AppUserMapperInput

AppUserMapper configures custom account mapping for uplift.

## Example Usage

```typescript
import { AppUserMapperInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMapperInput = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `mappingCases`                                                                                    | [shared.AppUserMapperMatchCaseInput](../../../sdk/models/shared/appusermappermatchcaseinput.md)[] | :heavy_minus_sign:                                                                                | Ordered list of match cases. Each case defines a pair of CEL key extractors.                      |