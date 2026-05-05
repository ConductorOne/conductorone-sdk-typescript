# FunctionTestResult

FunctionTestResult contains the result of a single test case execution.

## Example Usage

```typescript
import { FunctionTestResult } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionTestResult = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `assertions`                                                                                      | [shared.FunctionTestResultAssertion](../../../sdk/models/shared/functiontestresultassertion.md)[] | :heavy_minus_sign:                                                                                | The assertions evaluated during the test.                                                         |
| `error`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | Error message if the test errored (distinct from assertion failure).                              |
| `logs`                                                                                            | [shared.FunctionTestResultLog](../../../sdk/models/shared/functiontestresultlog.md)[]             | :heavy_minus_sign:                                                                                | The log entries captured during the test.                                                         |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | The test name.                                                                                    |
| `status`                                                                                          | [shared.FunctionTestResultStatus](../../../sdk/models/shared/functiontestresultstatus.md)         | :heavy_minus_sign:                                                                                | The test result status.                                                                           |