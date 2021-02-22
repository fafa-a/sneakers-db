const { request } = require("undici");
import Sneaker from "../classes/Sneaker.js";
(async function getInfo() {
  const { statusCode, headers, body } = await request(
    `https://stockx.com/api/browse?productCategory=sneakers&currency=EUR&_search=CZ9084-001&dataType=product`,
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "User-Agent":
          "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
      },
      http2: true,
    }
  );

  console.log("response received", statusCode);
  console.log("headers", headers);

  for await (const data of body) {
    console.log("data", data.toString());
  }
})();
