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

Invokes the c1.api.app.v1.ConnectorService.CreateDelegated method.

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
        "libero",
        "voluptas",
      ],
    },
    catalogId: "deserunt",
    description: "quam",
    displayName: "ipsum",
    userIds: [
      "qui",
      "cupiditate",
    ],
  },
  appId: "maxime",
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

Invokes the c1.api.app.v1.ConnectorService.Delete method.

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
  appId: "pariatur",
  id: "b1a8422b-b679-4d23-a271-5bf0cbb1e31b",
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

Invokes the c1.api.app.v1.ConnectorService.Get method.

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
  appId: "quos",
  id: "b90f3443-a110-48e0-adcf-4b921879fce9",
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

Invokes the c1.api.app.v1.ConnectorService.GetCredentials method.

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
  appId: "quis",
  connectorId: "ipsum",
  id: "f73ef7fb-c7ab-4d74-9d39-c0f5d2cff7c7",
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

Invokes the c1.api.app.v1.ConnectorService.List method.

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
  appId: "alias",
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

Invokes the c1.api.app.v1.ConnectorService.RevokeCredential method.

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
  appId: "officia",
  connectorId: "tempora",
  id: "5626d436-813f-416d-9f5f-ce6c556146c3",
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

Invokes the c1.api.app.v1.ConnectorService.RotateCredential method.

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
  appId: "recusandae",
  connectorId: "aspernatur",
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

Invokes the c1.api.app.v1.ConnectorService.Update method.

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
        completedAt: new Date("2022-12-12T11:58:39.585Z"),
        lastError: "a",
        startedAt: new Date("2022-12-21T19:37:25.645Z"),
        status: ConnectorStatusStatus.SyncStatusUnspecified,
        updatedAt: new Date("2021-06-17T11:25:30.782Z"),
      },
      oAuth2AuthorizedAs: {
        authEmail: "aliquam",
        authorizedAt: new Date("2022-02-12T18:08:46.973Z"),
      },
      appId: "inventore",
      catalogId: "non",
      config: {
        "dolorum": "laborum",
      },
      description: "placeat",
      displayName: "velit",
      downloadUrl: "eum",
      id: "6c8dd6b1-4429-4074-b477-8a7bd466d28c",
      userIds: [
        "ipsa",
      ],
    },
    connectorExpandMask: {
      paths: [
        "quidem",
        "neque",
        "quo",
      ],
    },
    updateMask: "illum",
  },
  appId: "quo",
  id: "a4251904-e523-4c7e-8bc7-178e4796f2a7",
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

Invokes the c1.api.app.v1.ConnectorService.UpdateDelegated method.

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
        completedAt: new Date("2022-03-20T23:14:37.473Z"),
        lastError: "eum",
        startedAt: new Date("2021-12-24T16:30:16.544Z"),
        status: ConnectorStatusStatus.SyncStatusUnspecified,
        updatedAt: new Date("2022-09-18T00:06:33.286Z"),
      },
      oAuth2AuthorizedAs: {
        authEmail: "fuga",
        authorizedAt: new Date("2022-06-12T08:30:58.411Z"),
      },
      appId: "atque",
      catalogId: "explicabo",
      config: {
        "nisi": "fugit",
        "sapiente": "consequuntur",
      },
      description: "ratione",
      displayName: "explicabo",
      downloadUrl: "saepe",
      id: "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
      userIds: [
        "consectetur",
        "esse",
        "blanditiis",
        "provident",
      ],
    },
    connectorExpandMask: {
      paths: [
        "nulla",
        "quas",
        "esse",
        "quasi",
      ],
    },
    updateMask: "a",
  },
  connectorAppId: "error",
  connectorId: "sint",
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

