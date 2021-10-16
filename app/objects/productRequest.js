import { createID } from "../config/utils/util.js";

class ProductRequest {
    constructor(productName, quantity) {
        console.log("New Request made for " + quantity + " " + productName + "'s");
        this._id = createID();
        this.productName = productName;
        this.quantity = quantity;
        this.responded = false;
    }

    getId() {
        return this._id;
    }

    getProductName() {
        return this.productName;
    }
    setProductName(name) {
        this.productName = name;
    }

    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
}

export default ProductRequest;