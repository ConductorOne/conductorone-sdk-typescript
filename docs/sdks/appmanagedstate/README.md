# AppManagedState

## Overview

### Available Operations

* [list](#list) - List
* [get](#get) - Get
* [promote](#promote) - Promote

## list

List the managed states of applications discovered by a connector.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppManagedStateService.List" method="get" path="/api/v1/apps/{app_id}/resource_types/{resource_type_id}/managed_state_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appManagedState.list({
    appId: "<id>",
    resourceTypeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appManagedStateList } from "conductorone-sdk-typescript/funcs/appManagedStateList.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appManagedStateList(conductoroneSDKTypescript, {
    appId: "<id>",
    resourceTypeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appManagedStateList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppManagedStateServiceListRequest](../../sdk/models/operations/c1apiappv1appmanagedstateservicelistrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiAppV1AppManagedStateServiceListResponse](../../sdk/models/operations/c1apiappv1appmanagedstateservicelistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get

Get the managed state of a discovered application.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppManagedStateService.Get" method="get" path="/api/v1/apps/{app_id}/resource_types/{resource_type_id}/managed_state_bindings/{resource_id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appManagedState.get({
    appId: "<id>",
    resourceTypeId: "<id>",
    resourceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appManagedStateGet } from "conductorone-sdk-typescript/funcs/appManagedStateGet.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appManagedStateGet(conductoroneSDKTypescript, {
    appId: "<id>",
    resourceTypeId: "<id>",
    resourceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appManagedStateGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppManagedStateServiceGetRequest](../../sdk/models/operations/c1apiappv1appmanagedstateservicegetrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiAppV1AppManagedStateServiceGetResponse](../../sdk/models/operations/c1apiappv1appmanagedstateservicegetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## promote

Promote an unmanaged application into a managed application.
 Returns AlreadyExists when the application is already managed. The new application inherits source owners when user_ids is omitted.
 Concurrent promotion requests are not supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppManagedStateService.Promote" method="post" path="/api/v1/apps/{app_id}/resource_types/{resource_type_id}/managed_state_bindings/{resource_id}/promote" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appManagedState.promote({
    appId: "<id>",
    resourceTypeId: "<id>",
    resourceId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appManagedStatePromote } from "conductorone-sdk-typescript/funcs/appManagedStatePromote.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appManagedStatePromote(conductoroneSDKTypescript, {
    appId: "<id>",
    resourceTypeId: "<id>",
    resourceId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appManagedStatePromote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppManagedStateServicePromoteRequest](../../sdk/models/operations/c1apiappv1appmanagedstateservicepromoterequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiAppV1AppManagedStateServicePromoteResponse](../../sdk/models/operations/c1apiappv1appmanagedstateservicepromoteresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |