# FunctionTestResultLog

A log entry captured during a test.

## Example Usage

```typescript
import { FunctionTestResultLog } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FunctionTestResultLog = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `level`                                    | *string*                                   | :heavy_minus_sign:                         | The log level (e.g., "info", "error").     |
| `log`                                      | *string*                                   | :heavy_minus_sign:                         | The log message content.                   |
| `source`                                   | *string*                                   | :heavy_minus_sign:                         | The log source (e.g., "stdout", "stderr"). |