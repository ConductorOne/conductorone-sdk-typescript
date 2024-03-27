<!-- Start SDK Example Usage [usage] -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

async function run() {
    const sdk = new ConductoroneSDKTypescript({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
            oauth: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const result = await sdk.apps.create({
        owners: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->