import axios from "axios";
import Sneaker from "../classes/Sneaker.js";

(async function getInfo() {
  const URL = `https://stockx.com/api/browse?productCategory=sneakers&currency=EUR&_search=CZ9084-001&dataType=product`;
  const {
    data: { Products },
  } = await axios.get(URL, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "User-Agent":
        "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36",
    },
    http2: true,
  });

  const {
    brand,
    category,
    colorway,
    description,
    gender,
    media,
    name,
    prices,
    releaseDate,
    retailPrice,
    shoe,
    shortDescription,
    styleId,
    urlKey,
  } = Products[0];

  const item = new Sneaker({
    brandname: brand,
    category: category,
    colorway: colorway,
    description: description,
    gender: gender,
    imageLink: media,
    name: name,
    prices: prices,
    releaseDate: releaseDate.slice(0, 10),
    retailPrice: retailPrice,
    shoe: shoe,
    shortDescription: shortDescription,
    sku: styleId,
    urlKey: urlKey,
    storeLink: {
      stockX: `${URL.slice(0, 19)}${urlKey}`,
    },
  });

  console.log(item);
})();
