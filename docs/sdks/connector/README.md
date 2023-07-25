# connector

### Available Operations

* [createDelegated](#createdelegated) - Create Delegated
* [delete](#delete) - Delete
* [get](#get) - Get
* [getCredentials](#getcredentials) - Get Credentials
* [list](#list) - List
* [revokeCredential](#revokecredential) - Revoke Credential
* [rotateCredential](#rotatecredential) - Rotate Credential
* [update](#update) - Update
* [updateDelegated](#updatedelegated) - Update Delegated

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
        "atque",
      ],
    },
    catalogId: "sit",
    description: "fugiat",
    displayName: "ab",
    userIds: [
      "dolorum",
      "iusto",
      "voluptate",
    ],
  },
  appId: "dolorum",
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
  appId: "deleniti",
  id: "9ebf737a-e420-43ce-9e6a-95d8a0d446ce",
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
  appId: "qui",
  id: "af7a73cf-3be4-453f-870b-326b5a73429c",
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
  appId: "pariatur",
  connectorId: "soluta",
  id: "1a8422bb-679d-4232-a715-bf0cbb1e31b8",
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
  appId: "tempore",
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
  appId: "cupiditate",
  connectorId: "aperiam",
  id: "f3443a11-08e0-4adc-b4b9-21879fce953f",
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
  appId: "voluptate",
  connectorId: "consectetur",
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
        completedAt: new Date("2020-02-26T11:54:04.858Z"),
        lastError: "dignissimos",
        startedAt: new Date("2020-11-08T11:03:10.206Z"),
        status: ConnectorStatusStatus.SyncStatusError,
        updatedAt: new Date("2022-05-15T21:16:33.535Z"),
      },
      oAuth2AuthorizedAs: {},
      appId: "facilis",
      config: {
        "ducimus": "dolore",
        "quibusdam": "illum",
        "sequi": "natus",
        "impedit": "aut",
      },
      description: "voluptatibus",
      displayName: "exercitationem",
      id: "d2cff7c7-0a45-4626-9436-813f16d9f5fc",
      userIds: [
        "ea",
        "impedit",
        "corporis",
        "veniam",
      ],
    },
    connectorExpandMask: {
      paths: [
        "inventore",
        "magnam",
      ],
    },
    updateMask: "ea",
  },
  appId: "quo",
  id: "3e250fb0-08c4-42e1-81aa-c366c8dd6b14",
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
        completedAt: new Date("2022-11-14T00:12:37.683Z"),
        lastError: "provident",
        startedAt: new Date("2022-07-11T02:03:34.375Z"),
        status: ConnectorStatusStatus.SyncStatusRunning,
        updatedAt: new Date("2022-09-27T07:50:41.350Z"),
      },
      oAuth2AuthorizedAs: {},
      appId: "esse",
      config: {
        "rem": "fuga",
        "reprehenderit": "quidem",
      },
      description: "fugiat",
      displayName: "ut",
      id: "66d28c10-ab3c-4dca-8251-904e523c7e0b",
      userIds: [
        "dignissimos",
        "inventore",
        "nihil",
        "totam",
      ],
    },
    connectorExpandMask: {
      paths: [
        "aliquam",
        "odio",
        "occaecati",
        "commodi",
      ],
    },
    updateMask: "sapiente",
  },
  connectorAppId: "dolores",
  connectorId: "deserunt",
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

