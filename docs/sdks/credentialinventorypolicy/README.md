# CredentialInventoryPolicy

## Overview

### Available Operations

* [list](#list) - List
* [create](#create) - Create
* [delete](#delete) - Delete
* [get](#get) - Get
* [update](#update) - Update
* [search](#search) - Search

## list

List all credential inventory policies in your tenant, one page at a time.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.credential_inventory.v1.CredentialInventoryPolicyService.List" method="get" path="/api/v1/credential-inventory-policies" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.credentialInventoryPolicy.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { credentialInventoryPolicyList } from "conductorone-sdk-typescript/funcs/credentialInventoryPolicyList.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await credentialInventoryPolicyList(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("credentialInventoryPolicyList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceListRequest](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicelistrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceListResponse](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicelistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## create

Create a credential inventory policy.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.credential_inventory.v1.CredentialInventoryPolicyService.Create" method="post" path="/api/v1/credential-inventory-policies" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.credentialInventoryPolicy.create();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { credentialInventoryPolicyCreate } from "conductorone-sdk-typescript/funcs/credentialInventoryPolicyCreate.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await credentialInventoryPolicyCreate(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("credentialInventoryPolicyCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CredentialInventoryPolicyServiceCreateRequest](../../sdk/models/shared/credentialinventorypolicyservicecreaterequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceCreateResponse](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicecreateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## delete

Delete a credential inventory policy by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.credential_inventory.v1.CredentialInventoryPolicyService.Delete" method="delete" path="/api/v1/credential-inventory-policies/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.credentialInventoryPolicy.delete({
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
import { credentialInventoryPolicyDelete } from "conductorone-sdk-typescript/funcs/credentialInventoryPolicyDelete.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await credentialInventoryPolicyDelete(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("credentialInventoryPolicyDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceDeleteRequest](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicedeleterequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceDeleteResponse](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicedeleteresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## get

Get a credential inventory policy by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.credential_inventory.v1.CredentialInventoryPolicyService.Get" method="get" path="/api/v1/credential-inventory-policies/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.credentialInventoryPolicy.get({
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
import { credentialInventoryPolicyGet } from "conductorone-sdk-typescript/funcs/credentialInventoryPolicyGet.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await credentialInventoryPolicyGet(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("credentialInventoryPolicyGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceGetRequest](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicegetrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceGetResponse](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicegetresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## update

Update a credential inventory policy. Supply the policy object and an
 update mask listing the fields to change; omitted fields are left as-is.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.credential_inventory.v1.CredentialInventoryPolicyService.Update" method="post" path="/api/v1/credential-inventory-policies/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.credentialInventoryPolicy.update({
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
import { credentialInventoryPolicyUpdate } from "conductorone-sdk-typescript/funcs/credentialInventoryPolicyUpdate.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await credentialInventoryPolicyUpdate(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("credentialInventoryPolicyUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceUpdateRequest](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyserviceupdaterequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceUpdateResponse](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyserviceupdateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## search

Search credential inventory policies by name, or fetch a specific set by
 ID. Returns one page of matching policies at a time.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.credential_inventory.v1.CredentialInventoryPolicyService.Search" method="post" path="/api/v1/search/credential-inventory-policies" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.credentialInventoryPolicy.search();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { credentialInventoryPolicySearch } from "conductorone-sdk-typescript/funcs/credentialInventoryPolicySearch.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await credentialInventoryPolicySearch(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("credentialInventoryPolicySearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CredentialInventoryPolicyServiceSearchRequest](../../sdk/models/shared/credentialinventorypolicyservicesearchrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceSearchResponse](../../sdk/models/operations/c1apicredentialinventoryv1credentialinventorypolicyservicesearchresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |