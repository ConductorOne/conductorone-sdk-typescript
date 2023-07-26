# connector

### Available Operations

* [create](#create) - Create
* [createDelegated](#createdelegated) - Create Delegated
* [delete](#delete) - Delete
* [get](#get) - Get
* [getCredentials](#getcredentials) - Get Credentials
* [list](#list) - List
* [revokeCredential](#revokecredential) - Revoke Credential
* [rotateCredential](#rotatecredential) - Rotate Credential
* [update](#update) - Update
* [updateDelegated](#updatedelegated) - Update Delegated

## create

 Create a configured connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceCreateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.create({
  connectorServiceCreateRequest: {
    connectorExpandMask: {
      paths: [
        "saepe",
        "eius",
        "aspernatur",
      ],
    },
    catalogId: "perferendis",
    config: {
      "optio": "accusamus",
    },
    description: "ad",
    userIds: [
      "suscipit",
      "deserunt",
      "provident",
      "minima",
    ],
  },
  appId: "repellendus",
}).then((res: C1ApiAppV1ConnectorServiceCreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.C1ApiAppV1ConnectorServiceCreateRequest](../../models/operations/c1apiappv1connectorservicecreaterequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceCreateResponse](../../models/operations/c1apiappv1connectorservicecreateresponse.md)>**


## createDelegated

 Create a connector that is pending a connector config.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceCreateDelegatedResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.createDelegated({
  connectorServiceCreateDelegatedRequest: {
    connectorExpandMask: {
      paths: [
        "similique",
        "alias",
        "at",
      ],
    },
    catalogId: "quaerat",
    description: "tempora",
    displayName: "vel",
    userIds: [
      "officiis",
      "qui",
      "dolorum",
      "a",
    ],
  },
  appId: "esse",
}).then((res: C1ApiAppV1ConnectorServiceCreateDelegatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.C1ApiAppV1ConnectorServiceCreateDelegatedRequest](../../models/operations/c1apiappv1connectorservicecreatedelegatedrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceCreateDelegatedResponse](../../models/operations/c1apiappv1connectorservicecreatedelegatedresponse.md)>**


## delete

 Delete a connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceDeleteResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.delete({
  connectorServiceDeleteRequest: {},
  appId: "harum",
  id: "73cf3be4-53f8-470b-b26b-5a73429cdb1a",
}).then((res: C1ApiAppV1ConnectorServiceDeleteResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.C1ApiAppV1ConnectorServiceDeleteRequest](../../models/operations/c1apiappv1connectorservicedeleterequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceDeleteResponse](../../models/operations/c1apiappv1connectorservicedeleteresponse.md)>**


## get

 Get a connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceGetResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.get({
  appId: "totam",
  id: "422bb679-d232-4271-9bf0-cbb1e31b8b90",
}).then((res: C1ApiAppV1ConnectorServiceGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.C1ApiAppV1ConnectorServiceGetRequest](../../models/operations/c1apiappv1connectorservicegetrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceGetResponse](../../models/operations/c1apiappv1connectorservicegetresponse.md)>**


## getCredentials

 Get credentials for a connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceGetCredentialsResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.getCredentials({
  appId: "delectus",
  connectorId: "dolorem",
  id: "443a1108-e0ad-4cf4-b921-879fce953f73",
}).then((res: C1ApiAppV1ConnectorServiceGetCredentialsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.C1ApiAppV1ConnectorServiceGetCredentialsRequest](../../models/operations/c1apiappv1connectorservicegetcredentialsrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceGetCredentialsResponse](../../models/operations/c1apiappv1connectorservicegetcredentialsresponse.md)>**


## list

 List connectors for an app.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceListResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.list({
  appId: "vero",
  pageSize: 9493.19,
  pageToken: "dignissimos",
}).then((res: C1ApiAppV1ConnectorServiceListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.C1ApiAppV1ConnectorServiceListRequest](../../models/operations/c1apiappv1connectorservicelistrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceListResponse](../../models/operations/c1apiappv1connectorservicelistresponse.md)>**


## revokeCredential

 Revoke credentials for a connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceRevokeCredentialResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.revokeCredential({
  connectorServiceRevokeCredentialRequest: {},
  appId: "hic",
  connectorId: "distinctio",
  id: "c7abd74d-d39c-40f5-92cf-f7c70a45626d",
}).then((res: C1ApiAppV1ConnectorServiceRevokeCredentialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.C1ApiAppV1ConnectorServiceRevokeCredentialRequest](../../models/operations/c1apiappv1connectorservicerevokecredentialrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceRevokeCredentialResponse](../../models/operations/c1apiappv1connectorservicerevokecredentialresponse.md)>**


## rotateCredential

 Rotate credentials for a connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceRotateCredentialResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.rotateCredential({
  connectorServiceRotateCredentialRequest: {},
  appId: "magnam",
  connectorId: "ratione",
}).then((res: C1ApiAppV1ConnectorServiceRotateCredentialResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.C1ApiAppV1ConnectorServiceRotateCredentialRequest](../../models/operations/c1apiappv1connectorservicerotatecredentialrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceRotateCredentialResponse](../../models/operations/c1apiappv1connectorservicerotatecredentialresponse.md)>**


## update

 Update a connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceUpdateResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { ConnectorStatusStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.update({
  connectorServiceUpdateRequestInput: {
    connector: {
      connectorStatus: {
        completedAt: new Date("2022-06-28T08:50:44.084Z"),
        lastError: "dicta",
        startedAt: new Date("2022-01-08T01:04:15.076Z"),
        status: ConnectorStatusStatus.SyncStatusUnspecified,
        updatedAt: new Date("2022-02-20T07:12:08.273Z"),
      },
      oAuth2AuthorizedAs: {},
      appId: "excepturi",
      config: {
        "nostrum": "sapiente",
        "quisquam": "saepe",
        "ea": "impedit",
        "corporis": "veniam",
      },
      description: "aliquid",
      displayName: "inventore",
      id: "46c3e250-fb00-48c4-ae14-1aac366c8dd6",
      userIds: [
        "quasi",
        "tempora",
        "numquam",
      ],
    },
    connectorExpandMask: {
      paths: [
        "provident",
      ],
    },
    updateMask: "ipsa",
  },
  appId: "molestiae",
  id: "474778a7-bd46-46d2-8c10-ab3cdca42519",
}).then((res: C1ApiAppV1ConnectorServiceUpdateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.C1ApiAppV1ConnectorServiceUpdateRequest](../../models/operations/c1apiappv1connectorserviceupdaterequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceUpdateResponse](../../models/operations/c1apiappv1connectorserviceupdateresponse.md)>**


## updateDelegated

 Update a delegated connector.


### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiAppV1ConnectorServiceUpdateDelegatedResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import { ConnectorStatusStatus } from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    oauth: "",
  },
});

sdk.connector.updateDelegated({
  connectorServiceUpdateDelegatedRequestInput: {
    connector: {
      connectorStatus: {
        completedAt: new Date("2022-09-23T10:04:47.931Z"),
        lastError: "debitis",
        startedAt: new Date("2022-11-13T06:50:40.250Z"),
        status: ConnectorStatusStatus.SyncStatusUnspecified,
        updatedAt: new Date("2021-08-15T10:59:14.485Z"),
      },
      oAuth2AuthorizedAs: {},
      appId: "recusandae",
      config: {
        "distinctio": "quod",
      },
      description: "dignissimos",
      displayName: "inventore",
      id: "78e4796f-2a70-4c68-8282-aa482562f222",
      userIds: [
        "occaecati",
        "atque",
        "et",
        "esse",
      ],
    },
    connectorExpandMask: {
      paths: [
        "accusamus",
        "veritatis",
        "esse",
        "quod",
      ],
    },
    updateMask: "nam",
  },
  connectorAppId: "vero",
  connectorId: "aliquid",
}).then((res: C1ApiAppV1ConnectorServiceUpdateDelegatedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.C1ApiAppV1ConnectorServiceUpdateDelegatedRequest](../../models/operations/c1apiappv1connectorserviceupdatedelegatedrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.C1ApiAppV1ConnectorServiceUpdateDelegatedResponse](../../models/operations/c1apiappv1connectorserviceupdatedelegatedresponse.md)>**

