import { ConductoroneSDKTypescript } from "./";


const sdk = new ConductoroneSDKTypescript({
  serverURL: process.env.CONE_API_ENDPOINT,
  clientID: process.env.CONE_CLIENT_ID,
  clientSecret: process.env.CONE_CLIENT_SECRET,
});

async function search () {
  const res = await sdk.appEntitlementSearch.search({
    onlyGetExpiring: false,
    pageSize: 100,
    query: "",
  });

  console.log("status", res.statusCode);
  if (res.statusCode === 200) {
    // handle response
    console.log("yay");
  }
  console.dir(res.rawResponse);
}

search();
