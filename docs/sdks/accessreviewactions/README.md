# AccessReviewActions

## Overview

### Available Operations

* [generateReport](#generatereport) - Generate Report

## generateReport

Generate a report of the campaign's reviews and decisions. The format
 defaults to JSON (also available: CSV, XLSX). Works on in-flight (OPEN)
 and closed campaigns. Asynchronous — the report record is created
 immediately; the file is materialized in the background.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewActionsService.GenerateReport" method="post" path="/api/v1/access_review/{access_review_id}/report" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewActions.generateReport({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewActionsGenerateReport } from "conductorone-sdk-typescript/funcs/accessReviewActionsGenerateReport.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewActionsGenerateReport(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewActionsGenerateReport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.C1ApiAccessreviewV1AccessReviewActionsServiceGenerateReportRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewactionsservicegeneratereportrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewActionsServiceGenerateReportResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewactionsservicegeneratereportresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |