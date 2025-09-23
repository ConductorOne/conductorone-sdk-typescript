# SDK Test Suite (Jest)

This directory contains end-to-end tests that exercise the generated SDK against a live ConductorOne environment. Tests use Jest and require valid API credentials and several resource identifiers from your org.

## How tests run
- Tests import a preconfigured SDK from `src/test/setup.ts`.
- `dotenv` loads credentials and IDs from `.env` / `.env.local`.
- Each test calls one or more SDK methods and asserts `statusCode === 200` and a non-empty typed response.
- Some tests are conditional: if a required env var is not set, they log a skip message and do nothing.

Run a single test:
```bash
npm test -- src/test/sdk/apps.test.ts
```
Run the whole suite:
```bash
npm test
```

## Required environment variables
Set these in `.env.local` (preferred) or `.env`.

Authentication and API endpoint:
- CONE_API_ENDPOINT: Your API host (without protocol), e.g. `api.conductor.one`.
- CONE_CLIENT_ID: OAuth client ID with access to your org.
- CONE_CLIENT_SECRET: OAuth client secret.

Common resource identifiers (used by many tests):
- CONE_APP_ID: App ID used by app-scoped tests.
- CONE_RESOURCE_TYPE_ID: Resource type ID under the app.
- CONE_RESOURCE_ID: Resource ID of an app resource.
- CONE_APP_ENTITLEMENT_ID: Entitlement ID within the app.
- CONE_IDENTITY_USER_ID: Identity user ID relevant to entitlement/user-binding tests.

Cross-app proxy tests:
- CONE_SRC_APP_ID: Source app ID.
- CONE_SRC_APP_ENTITLEMENT_ID: Entitlement ID in the source app.

Automation tests (if used):
- CONE_AUTOMATION_EXECUTION_ID: Numeric ID of an existing automation execution.

Optional for app access requests defaults:
- CONE_REQUEST_POLICY_ID: Policy ID used to configure defaults.
- CONE_CATALOG_ID: Request catalog ID used to configure defaults.

Task-related tests:
- CONE_TASK_ID: A 27-character alphanumeric Task ID for audit queries.

## Preconditions / data expectations
- App/resource tests: IDs must belong to the same org and tenant as your credentials.
- Entitlements: `CONE_APP_ENTITLEMENT_ID` must exist under `CONE_APP_ID`.
- App users: Listing requires a valid `CONE_APP_ID` that has app users.
- App resource owners: `CONE_RESOURCE_TYPE_ID` and `CONE_RESOURCE_ID` must identify an existing resource in `CONE_APP_ID`.
- App access requests defaults:
  - GET will return 404 if no defaults exist for `CONE_APP_ID`.
  - To exercise create/get/cancel, provide `CONE_APP_ID` and supporting IDs (e.g., `CONE_RESOURCE_TYPE_ID`, `CONE_REQUEST_POLICY_ID`, `CONE_CATALOG_ID`). Some backends apply changes asynchronously; a small retry may be necessary before GET returns 200.
- Task audit: `CONE_TASK_ID` must match regex `^[a-zA-Z0-9]{27}$` and refer to an existing task; otherwise the API returns 400.

## Skipping tests
Many tests check for required env vars and log a message instead of failing when inputs are missing. To avoid false negatives, either set all needed variables or run only the tests that match your available data.

## Troubleshooting
- 401/403: Verify credentials and org access for your client.
- 404 on GET-by-ID: The resource may not exist (wrong ID or wrong app).
- 400 validation errors: Ensure IDs conform to expected formats and relationships (e.g., entitlement belongs to app).
- Long-running operations (create/apply): The backend may be asynchronous; add short retries before asserting GET responses.
