import fs from "fs";
import path from 'path';
import Product from "./objects/product.js";

const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);

export const productsProcessor = {
  getParsedProducts() {
    let products = [];
    try {
      const file = path.join(__dirname, "..", "data-sources", "products.json");
      console.log("PATH: " + file);
      const importedProducts = JSON.parse(
        fs.readFileSync(file, "utf8")
      );
      if (importedProducts !== null) {
        importedProducts.map((product) => {
          products.push(
            new Product(product.name, product.cost, product.category)
          );
        });
        console.log("...Finished processing all products");
        return products;
      }
    } catch (error) {
      console.error("Error while processing imported products...", error);
      return null;
    }
  },
};
