# XAAAccessProfileScopeBinding

## Overview

### Available Operations

* [list](#list) - List
* [createBindings](#createbindings) - Create Bindings
* [deleteBindings](#deletebindings) - Delete Bindings
* [search](#search) - Search

## list

List the scopes bound to an access profile, one page at a time.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.cross_app_access.v1.XAAAccessProfileScopeBindingService.List" method="get" path="/api/v1/apps/{app_id}/xaa/access_profiles/{access_profile_id}/scope_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.xaaAccessProfileScopeBinding.list({
    appId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { xaaAccessProfileScopeBindingList } from "conductorone-sdk-typescript/funcs/xaaAccessProfileScopeBindingList.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await xaaAccessProfileScopeBindingList(conductoroneSDKTypescript, {
    appId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("xaaAccessProfileScopeBindingList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceListRequest](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicelistrequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceListResponse](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicelistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createBindings

CreateBindings binds one or more scopes (xaa_scope_ids) to an access
 profile. Every scope must belong to the profile's resource server.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.cross_app_access.v1.XAAAccessProfileScopeBindingService.CreateBindings" method="post" path="/api/v1/apps/{app_id}/xaa/access_profiles/{access_profile_id}/scope_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.xaaAccessProfileScopeBinding.createBindings({
    appId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { xaaAccessProfileScopeBindingCreateBindings } from "conductorone-sdk-typescript/funcs/xaaAccessProfileScopeBindingCreateBindings.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await xaaAccessProfileScopeBindingCreateBindings(conductoroneSDKTypescript, {
    appId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("xaaAccessProfileScopeBindingCreateBindings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceCreateBindingsRequest](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicecreatebindingsrequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceCreateBindingsResponse](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicecreatebindingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteBindings

DeleteBindings unbinds one or more scopes (xaa_scope_ids) from an access
 profile. Uses a POST .../delete action route because the scope IDs travel
 in the request body, which HTTP DELETE does not reliably support.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.cross_app_access.v1.XAAAccessProfileScopeBindingService.DeleteBindings" method="post" path="/api/v1/apps/{app_id}/xaa/access_profiles/{access_profile_id}/scope_bindings/delete" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.xaaAccessProfileScopeBinding.deleteBindings({
    appId: "<id>",
    accessProfileId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { xaaAccessProfileScopeBindingDeleteBindings } from "conductorone-sdk-typescript/funcs/xaaAccessProfileScopeBindingDeleteBindings.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await xaaAccessProfileScopeBindingDeleteBindings(conductoroneSDKTypescript, {
    appId: "<id>",
    accessProfileId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("xaaAccessProfileScopeBindingDeleteBindings failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceDeleteBindingsRequest](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicedeletebindingsrequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceDeleteBindingsResponse](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicedeletebindingsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## search

Search scope bindings, filtered by access profile or by scope, or fetch a
 specific set by ref. The by-scope direction answers "which profiles
 contain this scope" for impact analysis.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.cross_app_access.v1.XAAAccessProfileScopeBindingService.Search" method="post" path="/api/v1/search/xaa/access_profile_scope_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.xaaAccessProfileScopeBinding.search();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { xaaAccessProfileScopeBindingSearch } from "conductorone-sdk-typescript/funcs/xaaAccessProfileScopeBindingSearch.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await xaaAccessProfileScopeBindingSearch(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("xaaAccessProfileScopeBindingSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.XAAAccessProfileScopeBindingServiceSearchRequest](../../sdk/models/shared/xaaaccessprofilescopebindingservicesearchrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiCrossAppAccessV1XAAAccessProfileScopeBindingServiceSearchResponse](../../sdk/models/operations/c1apicrossappaccessv1xaaaccessprofilescopebindingservicesearchresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |