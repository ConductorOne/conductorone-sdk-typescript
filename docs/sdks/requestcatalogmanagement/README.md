# RequestCatalogManagement
(*requestCatalogManagement*)

## Overview

### Available Operations

* [list](#list) - List
* [create](#create) - Create
* [listAllEntitlementIdsPerApp](#listallentitlementidsperapp) - List All Entitlement Ids Per App
* [listEntitlementsPerCatalog](#listentitlementspercatalog) - List Entitlements Per Catalog
* [updateAppEntitlements](#updateappentitlements) - Update App Entitlements
* [removeAppEntitlements](#removeappentitlements) - Remove App Entitlements
* [addAppEntitlements](#addappentitlements) - Add App Entitlements
* [deleteRequestableEntry](#deleterequestableentry) - Delete Requestable Entry
* [getRequestableEntry](#getrequestableentry) - Get Requestable Entry
* [createRequestableEntry](#createrequestableentry) - Create Requestable Entry
* [removeAccessEntitlements](#removeaccessentitlements) - Remove Access Entitlements
* [addAccessEntitlements](#addaccessentitlements) - Add Access Entitlements
* [listEntitlementsForAccess](#listentitlementsforaccess) - List Entitlements For Access
* [delete](#delete) - Delete
* [get](#get) - Get
* [update](#update) - Update
* [deleteBundleAutomation](#deletebundleautomation) - Delete Bundle Automation
* [getBundleAutomation](#getbundleautomation) - Get Bundle Automation
* [setBundleAutomation](#setbundleautomation) - Set Bundle Automation
* [createBundleAutomation](#createbundleautomation) - Create Bundle Automation
* [resumePausedBundleAutomation](#resumepausedbundleautomation) - Resume Paused Bundle Automation
* [forceRunBundleAutomation](#forcerunbundleautomation) - Force Run Bundle Automation

## list

Get a list of request catalogs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.List" method="get" path="/api/v1/catalogs" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementList } from "conductorone-sdk-typescript/funcs/requestCatalogManagementList.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementList(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## create

Creates a new request catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.Create" method="post" path="/api/v1/catalogs" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.create();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementCreate } from "conductorone-sdk-typescript/funcs/requestCatalogManagementCreate.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementCreate(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.RequestCatalogManagementServiceCreateRequest](../../sdk/models/shared/requestcatalogmanagementservicecreaterequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicecreateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAllEntitlementIdsPerApp

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ListAllEntitlementIdsPerApp method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.ListAllEntitlementIdsPerApp" method="get" path="/api/v1/catalogs/{catalog_id}/requestable_entitlementIDs" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.listAllEntitlementIdsPerApp({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementListAllEntitlementIdsPerApp } from "conductorone-sdk-typescript/funcs/requestCatalogManagementListAllEntitlementIdsPerApp.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementListAllEntitlementIdsPerApp(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementListAllEntitlementIdsPerApp failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistallentitlementidsperapprequest.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                             |
| `options.retries`                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                           |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistallentitlementidsperappresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEntitlementsPerCatalog

List entitlements in a catalog that are requestable.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.ListEntitlementsPerCatalog" method="get" path="/api/v1/catalogs/{catalog_id}/requestable_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.listEntitlementsPerCatalog({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementListEntitlementsPerCatalog } from "conductorone-sdk-typescript/funcs/requestCatalogManagementListEntitlementsPerCatalog.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementListEntitlementsPerCatalog(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementListEntitlementsPerCatalog failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementspercatalogrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                           |
| `options.retries`                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementspercatalogresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAppEntitlements

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.UpdateAppEntitlements method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.UpdateAppEntitlements" method="post" path="/api/v1/catalogs/{catalog_id}/requestable_entitlements/update" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.updateAppEntitlements({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementUpdateAppEntitlements } from "conductorone-sdk-typescript/funcs/requestCatalogManagementUpdateAppEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementUpdateAppEntitlements(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementUpdateAppEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceupdateappentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceupdateappentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAppEntitlements

Remove requestable entitlements from a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.RemoveAppEntitlements" method="delete" path="/api/v1/catalogs/{catalog_id}/requestable_entries" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.removeAppEntitlements({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementRemoveAppEntitlements } from "conductorone-sdk-typescript/funcs/requestCatalogManagementRemoveAppEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementRemoveAppEntitlements(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementRemoveAppEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveappentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveappentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## addAppEntitlements

Add requestable entitlements to a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.AddAppEntitlements" method="post" path="/api/v1/catalogs/{catalog_id}/requestable_entries" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.addAppEntitlements({
    catalogId: null,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementAddAppEntitlements } from "conductorone-sdk-typescript/funcs/requestCatalogManagementAddAppEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementAddAppEntitlements(conductoroneSDKTypescript, {
    catalogId: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementAddAppEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddappentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddappentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteRequestableEntry

Delete a single requestable entry

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.DeleteRequestableEntry" method="delete" path="/api/v1/catalogs/{catalog_id}/requestable_entries/{app_id}/{entitlement_id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.deleteRequestableEntry({
    catalogId: "<id>",
    appId: "<id>",
    entitlementId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementDeleteRequestableEntry } from "conductorone-sdk-typescript/funcs/requestCatalogManagementDeleteRequestableEntry.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementDeleteRequestableEntry(conductoroneSDKTypescript, {
    catalogId: "<id>",
    appId: "<id>",
    entitlementId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementDeleteRequestableEntry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestableEntryRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeleterequestableentryrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestableEntryResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeleterequestableentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getRequestableEntry

Get a single requestable entry

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.GetRequestableEntry" method="get" path="/api/v1/catalogs/{catalog_id}/requestable_entries/{app_id}/{entitlement_id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.getRequestableEntry({
    catalogId: "<id>",
    appId: "<id>",
    entitlementId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementGetRequestableEntry } from "conductorone-sdk-typescript/funcs/requestCatalogManagementGetRequestableEntry.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementGetRequestableEntry(conductoroneSDKTypescript, {
    catalogId: "<id>",
    appId: "<id>",
    entitlementId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementGetRequestableEntry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestableEntryRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetrequestableentryrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestableEntryResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetrequestableentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createRequestableEntry

Create a single requestable entry

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.CreateRequestableEntry" method="put" path="/api/v1/catalogs/{catalog_id}/requestable_entries/{app_id}/{entitlement_id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.createRequestableEntry({
    catalogId: "<id>",
    appId: "<id>",
    entitlementId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementCreateRequestableEntry } from "conductorone-sdk-typescript/funcs/requestCatalogManagementCreateRequestableEntry.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementCreateRequestableEntry(conductoroneSDKTypescript, {
    catalogId: "<id>",
    appId: "<id>",
    entitlementId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementCreateRequestableEntry failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateRequestableEntryRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicecreaterequestableentryrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateRequestableEntryResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicecreaterequestableentryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccessEntitlements

Remove visibility bindings (access entitlements) to a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.RemoveAccessEntitlements" method="delete" path="/api/v1/catalogs/{catalog_id}/visibility_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.removeAccessEntitlements({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementRemoveAccessEntitlements } from "conductorone-sdk-typescript/funcs/requestCatalogManagementRemoveAccessEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementRemoveAccessEntitlements(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementRemoveAccessEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveaccessentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `options`                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                       |
| `options.retries`                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                     |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceremoveaccessentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## addAccessEntitlements

Add visibility bindings (access entitlements) to a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.AddAccessEntitlements" method="post" path="/api/v1/catalogs/{catalog_id}/visibility_bindings" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.addAccessEntitlements({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementAddAccessEntitlements } from "conductorone-sdk-typescript/funcs/requestCatalogManagementAddAccessEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementAddAccessEntitlements(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementAddAccessEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddaccessentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceaddaccessentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listEntitlementsForAccess

List visibility bindings (access entitlements) for a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.ListEntitlementsForAccess" method="get" path="/api/v1/catalogs/{catalog_id}/visibility_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.listEntitlementsForAccess({
    catalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementListEntitlementsForAccess } from "conductorone-sdk-typescript/funcs/requestCatalogManagementListEntitlementsForAccess.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementListEntitlementsForAccess(conductoroneSDKTypescript, {
    catalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementListEntitlementsForAccess failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementsforaccessrequest.md) | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `options`                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                         |
| `options.retries`                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicelistentitlementsforaccessresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## delete

Delete a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.Delete" method="delete" path="/api/v1/catalogs/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.delete({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementDelete } from "conductorone-sdk-typescript/funcs/requestCatalogManagementDelete.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementDelete(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeleterequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeleteresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get

Get a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.Get" method="get" path="/api/v1/catalogs/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementGet } from "conductorone-sdk-typescript/funcs/requestCatalogManagementGet.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementGet(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## update

Update a catalog.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.Update" method="post" path="/api/v1/catalogs/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.update({
    id: null,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementUpdate } from "conductorone-sdk-typescript/funcs/requestCatalogManagementUpdate.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementUpdate(conductoroneSDKTypescript, {
    id: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceupdaterequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceupdateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteBundleAutomation

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.DeleteBundleAutomation method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.DeleteBundleAutomation" method="delete" path="/api/v1/catalogs/{request_catalog_id}/bundle_automation" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.deleteBundleAutomation({
    requestCatalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementDeleteBundleAutomation } from "conductorone-sdk-typescript/funcs/requestCatalogManagementDeleteBundleAutomation.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementDeleteBundleAutomation(conductoroneSDKTypescript, {
    requestCatalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementDeleteBundleAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeletebundleautomationrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicedeletebundleautomationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getBundleAutomation

Get bundle automation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.GetBundleAutomation" method="get" path="/api/v1/catalogs/{request_catalog_id}/bundle_automation" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.getBundleAutomation({
    requestCatalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementGetBundleAutomation } from "conductorone-sdk-typescript/funcs/requestCatalogManagementGetBundleAutomation.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementGetBundleAutomation(conductoroneSDKTypescript, {
    requestCatalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementGetBundleAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetbundleautomationrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicegetbundleautomationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setBundleAutomation

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.SetBundleAutomation method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.SetBundleAutomation" method="post" path="/api/v1/catalogs/{request_catalog_id}/bundle_automation" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.setBundleAutomation({
    requestCatalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementSetBundleAutomation } from "conductorone-sdk-typescript/funcs/requestCatalogManagementSetBundleAutomation.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementSetBundleAutomation(conductoroneSDKTypescript, {
    requestCatalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementSetBundleAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicesetbundleautomationrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicesetbundleautomationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createBundleAutomation

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.CreateBundleAutomation method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.CreateBundleAutomation" method="post" path="/api/v1/catalogs/{request_catalog_id}/bundle_automation/create" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.createBundleAutomation({
    requestCatalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementCreateBundleAutomation } from "conductorone-sdk-typescript/funcs/requestCatalogManagementCreateBundleAutomation.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementCreateBundleAutomation(conductoroneSDKTypescript, {
    requestCatalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementCreateBundleAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateBundleAutomationRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicecreatebundleautomationrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceCreateBundleAutomationResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementservicecreatebundleautomationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## resumePausedBundleAutomation

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ResumePausedBundleAutomation method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.ResumePausedBundleAutomation" method="post" path="/api/v1/catalogs/{request_catalog_id}/bundle_automation/resume" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.resumePausedBundleAutomation({
    requestCatalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementResumePausedBundleAutomation } from "conductorone-sdk-typescript/funcs/requestCatalogManagementResumePausedBundleAutomation.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementResumePausedBundleAutomation(conductoroneSDKTypescript, {
    requestCatalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementResumePausedBundleAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                    | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceresumepausedbundleautomationrequest.md) | :heavy_check_mark:                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                               |
| `options.retries`                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                             |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceresumepausedbundleautomationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## forceRunBundleAutomation

Invokes the c1.api.requestcatalog.v1.RequestCatalogManagementService.ForceRunBundleAutomation method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.requestcatalog.v1.RequestCatalogManagementService.ForceRunBundleAutomation" method="post" path="/api/v1/catalogs/{request_catalog_id}/bundle_automation/run" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.requestCatalogManagement.forceRunBundleAutomation({
    requestCatalogId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { requestCatalogManagementForceRunBundleAutomation } from "conductorone-sdk-typescript/funcs/requestCatalogManagementForceRunBundleAutomation.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await requestCatalogManagementForceRunBundleAutomation(conductoroneSDKTypescript, {
    requestCatalogId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("requestCatalogManagementForceRunBundleAutomation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                            | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                            | [operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceforcerunbundleautomationrequest.md) | :heavy_check_mark:                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                           |
| `options`                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                       |
| `options.retries`                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                     |

### Response

**Promise\<[operations.C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse](../../sdk/models/operations/c1apirequestcatalogv1requestcatalogmanagementserviceforcerunbundleautomationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |