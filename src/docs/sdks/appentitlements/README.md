# AppEntitlements
(*appEntitlements*)

### Available Operations

* [get](#get) - Get
* [list](#list) - List
* [listForAppResource](#listforappresource) - List For App Resource
* [listForAppUser](#listforappuser) - List For App User
* [listUsers](#listusers) - List Users
* [update](#update) - Update

## get

Get an app entitlement by ID.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appEntitlements.get({
    appId: "<value>",
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsGetRequest](../../sdk/models/operations/c1apiappv1appentitlementsgetrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsGetResponse](../../sdk/models/operations/c1apiappv1appentitlementsgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## list

List app entitlements associated with an app.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appEntitlements.list({
    appId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsListRequest](../../sdk/models/operations/c1apiappv1appentitlementslistrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListResponse](../../sdk/models/operations/c1apiappv1appentitlementslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listForAppResource

List app entitlements associated with an app resource.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appEntitlements.listForAppResource({
    appId: "<value>",
    appResourceId: "<value>",
    appResourceTypeId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsListForAppResourceRequest](../../sdk/models/operations/c1apiappv1appentitlementslistforappresourcerequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListForAppResourceResponse](../../sdk/models/operations/c1apiappv1appentitlementslistforappresourceresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listForAppUser

List app entitlements associated with an app user.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appEntitlements.listForAppUser({
    appId: "<value>",
    appUserId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsListForAppUserRequest](../../sdk/models/operations/c1apiappv1appentitlementslistforappuserrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListForAppUserResponse](../../sdk/models/operations/c1apiappv1appentitlementslistforappuserresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUsers

List the users, as AppEntitlementUsers objects, of an app entitlement.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appEntitlements.listUsers({
    appEntitlementId: "<value>",
    appId: "<value>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsListUsersRequest](../../sdk/models/operations/c1apiappv1appentitlementslistusersrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsListUsersResponse](../../sdk/models/operations/c1apiappv1appentitlementslistusersresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update an app entitlement by ID.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
  const sdk = new ConductoroneSDKTypescript({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
      oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const result = await sdk.appEntitlements.update({
    updateAppEntitlementRequest: {
      appEntitlement: {
        provisionPolicy: {
          connectorProvision: {},
          delegatedProvision: {},
          manualProvision: {
            userIds: [
              "<value>",
            ],
          },
          webhookProvision: {},
        },
        complianceFrameworkValueIds: [
          "<value>",
        ],
        durationUnset: {},
        sourceConnectorIds: {
          "key": "<value>",
        },
      },
      appEntitlementExpandMask: {
        paths: [
          "<value>",
        ],
      },
    },
    appId: "<value>",
    id: "<id>",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementsUpdateRequest](../../sdk/models/operations/c1apiappv1appentitlementsupdaterequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementsUpdateResponse](../../sdk/models/operations/c1apiappv1appentitlementsupdateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
