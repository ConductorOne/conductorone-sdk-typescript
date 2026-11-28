# DirectoryMergeRule

## Overview

### Available Operations

* [listDirectoryMergeRules](#listdirectorymergerules) - List Directory Merge Rules
* [setDirectoryMergeRules](#setdirectorymergerules) - Set Directory Merge Rules

## listDirectoryMergeRules

ListDirectoryMergeRules returns the directory's rules in evaluation order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.directory.v1.DirectoryMergeRuleService.ListDirectoryMergeRules" method="get" path="/api/v1/directories/{app_id}/merge_rules" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.directoryMergeRule.listDirectoryMergeRules({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { directoryMergeRuleListDirectoryMergeRules } from "conductorone-sdk-typescript/funcs/directoryMergeRuleListDirectoryMergeRules.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await directoryMergeRuleListDirectoryMergeRules(conductoroneSDKTypescript, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("directoryMergeRuleListDirectoryMergeRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.C1ApiDirectoryV1DirectoryMergeRuleServiceListDirectoryMergeRulesRequest](../../sdk/models/operations/c1apidirectoryv1directorymergeruleservicelistdirectorymergerulesrequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.C1ApiDirectoryV1DirectoryMergeRuleServiceListDirectoryMergeRulesResponse](../../sdk/models/operations/c1apidirectoryv1directorymergeruleservicelistdirectorymergerulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setDirectoryMergeRules

SetDirectoryMergeRules replaces the directory's whole rule list in one step. The list order is the
 evaluation order. The list must contain each built-in rule exactly once. A custom rule with an empty
 ID is created; a custom rule with an ID must be one of the directory's current custom rules; current
 custom rules left out of the list are deleted. Read-only fields are ignored. Fails with
 INVALID_ARGUMENT for an invalid list and with RESOURCE_EXHAUSTED when the list exceeds the maximum
 number of rules. When the list matches the saved rules nothing changes and the current rules are
 returned.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.directory.v1.DirectoryMergeRuleService.SetDirectoryMergeRules" method="post" path="/api/v1/directories/{app_id}/merge_rules" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.directoryMergeRule.setDirectoryMergeRules({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { directoryMergeRuleSetDirectoryMergeRules } from "conductorone-sdk-typescript/funcs/directoryMergeRuleSetDirectoryMergeRules.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await directoryMergeRuleSetDirectoryMergeRules(conductoroneSDKTypescript, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("directoryMergeRuleSetDirectoryMergeRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.C1ApiDirectoryV1DirectoryMergeRuleServiceSetDirectoryMergeRulesRequest](../../sdk/models/operations/c1apidirectoryv1directorymergeruleservicesetdirectorymergerulesrequest.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[operations.C1ApiDirectoryV1DirectoryMergeRuleServiceSetDirectoryMergeRulesResponse](../../sdk/models/operations/c1apidirectoryv1directorymergeruleservicesetdirectorymergerulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |