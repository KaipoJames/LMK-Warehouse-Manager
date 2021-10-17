import { createID } from "../../utils/util.js";

/**
 * This class is our representation of a product.
 * Any product data we parse from a third-party course will get processed in this class
 */
class Product {
  constructor(name, cost, category, description) {
    this.warehouse_id = createID();
    this.name = name;
    this.cost = cost;
    this.category = category;
    this.description = description;
    this.in_stock = true,
    //this.provider_id = getProviderId(provider); // Look up if provider exists in DB, if true, return ProviderId
    this.scheduled_for_shipping = false;
    this.shipment_id = null;
    this.visible = true;
    this.locked = false;
    this.damage_notes = [];
    this.inspections = [];
    console.log(`Generated new product '${this.name}' with id '${this._id}' at ${this.created_at}`);
  }

  getWarehouseId() {
    return this.warehouse_id;
  }
  setWarehouseId(warehouse_id) {
    this.warehouse_id = warehouse_id;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getCost() {
    return this.cost;
  }
  setCost(cost) {
    this.cost = cost;
  }

  getCategory() {
    return this.category;
  }
  setCategory(category) {
    this.category = category;
  }

  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }

  getInStock() {
    return this.in_stock;
  }
  setInStock(in_stock) {
    this.in_stock = in_stock;
  }

  getScheduledForShipping() {
    return this.scheduled_for_shipping;
  }
  setScheduledForShipping(scheduled_for_shipping) {
    this.scheduled_for_shipping = scheduled_for_shipping;
  }

  getShipmentId() {
    return this.shipment_id;
  }
  setShipmentId(shipmentId) {
    this.shipmentId = shipmentId;
  }

  getVisible() {
    return this.visible;
  }
  setVisible(visible) {
    this.visible = visible;
  }

  getLocked() {
    return this.locked;
  }
  setLocked(locked) {
    this.locked = locked;
  }

  getDamageNotes() {
    return this.damage_notes;
  }
  setDamageNotes(damageNotes) {
    this.damageNotes = damageNotes;
  }

}

export default Product;
