import pkg from "./database/warehouse.js";
import ProductRequest from "./models/productRequest.js";

/**
 * An attempt to locate and get an product from the warehouse.
 * If the product does not exist, an empty array is returned.
 *
 * @param {*} request | A ProductRequest Object. If no request is present, a random product and quantity is assumed.
 * @returns An array of products
 */
const retrieveProducts = (request) => {
  const { products, quantities, weights, sizes } = pkg;

  let product = {}; // The product to generate and return
  let productInfo = "";
  const requestedProducts = [];

  // If a specific product is requested, return that one. Otherwise, return a random one.
  if (!request || request === null) {
    const randomCategory = getRandomKey(products);
    const randomQuantity = getRandomKey(quantities);
    const randomWeight = getRandomKey(weights);
    const randomSize = getRandomKey(sizes);

    console.info("Request not given. Returning a random product");
    productInfo = getProductsFromStore(products, "random", randomCategory);
    product.name = productInfo[0];
    product.category = productInfo[1];
    product.cost = 2.5;

    for (let i = 0; i < getRandomNumber(1, 16); i++) {
      requestedProducts.push(product);
    }
    console.log(`Returning a random product of name ${product.name} and category ${product.category}`);
    return requestedProducts;
  } 
  else {
    productInfo = getProductsFromStore(products, request.productName);

    // console.log("Showing Products From Warehouse");
    // console.log(productInfo);
    // console.log(productInfo.length);

    if (productInfo.length !== 0) {
      product.name = productInfo[0];
      product.category = productInfo[1];
      product.cost = 2.99; // TODO: Make a function later

      for (let i = 0; i < request.quantity; i++) {
        requestedProducts.push(product);
      }
      return requestedProducts;
    } else {
      return requestedProducts;
    }
  }
};

/**
 *
 * @param {*} products | The entire list of store products
 * @param {*} product | The requested product to find, or 'random' for a random product
 * @param {*} category | Can also be given or random. Leave out if product is known
 * @returns An array containing two values: the product name and category
 */
const getProductsFromStore = (products, product, givenCategory) => {
  if (product === "random") {
    for (const category in products) {
      if (category === givenCategory) {
        const randomProduct = getRandomValue(products[category]);
        //console.debug("Located randomly chosen item " + randomProduct + " with category " + givenCategory);
        return [randomProduct, givenCategory];
      }
    }
    return null;
  }
  for (const category in products) {
    for (let i = 0; i < products[category].length; i++) {
      if (products[category][i] === product) {
        console.debug("Located item " + product + " with category " + category);
        return [product, category];
      }
    }
  }
  // TODO: Item not found, add it to the store.
  console.warn("The requested item " + product + " was not found in the warehouse.");
  return [];
};

/**
 *
 * @param {*} values | The values(product names) of a Product category
 * @returns a random value(product name)
 */
const getRandomValue = (values) => {
  if (values) {
    return values[Math.floor(Math.random() * values.length)];
  }
};

/**
 *
 * @param {*} category | A property containing sub-properties
 * @returns A random property of 'category'
 */
const getRandomKey = (category) => {
  if (category) {
    return Object.keys(category)[
      Math.floor(Math.random() * Object.keys(category).length)
    ];
  }
  return null;
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// TESTS

const request_success = retrieveProducts(new ProductRequest("strawberry", 9)); //Requested Product
console.log(request_success);

const request_fail = retrieveProducts(new ProductRequest("candies", 3)); //Requested Product
console.log(request_fail);

const randomRequest = retrieveProducts(); //Random Product
console.log(randomRequest);
