import Mongoose from "mongoose";

const AFNProductSchema = new Mongoose.Schema({
  "seller-sku": String,
  "fulfillment-channel-sku": String,
  asin: String,
  "condition-type": String,
  "Warehouse-Condition-code": String,
  "Quantity Available": Number,
});
export const Product = Mongoose.model("product", AFNProductSchema);

const MerchantListingDataSchema = new Mongoose.Schema({
  "item-name": String,
  "item-description": String,
  "listing-id": String,
  "seller-sku": String,
  price: String,
  quantity: String,
  "open-date": String,
  "image-url": String,
  "item-is-marketplace": String,
  "product-id-type": String,
  "zshop-shipping-fee": String,
  "item-note": String,
  "item-condition": String,
  "zshop-category1": String,
  "zshop-browse-path": String,
  "zshop-storefront-feature": String,
  asin1: String,
  asin2: String,
  asin3: String,
  "will-ship-internationally": String,
  "expedited-shipping": String,
  "zshop-boldface": String,
  "product-id": String,
  "bid-for-featured-placement": String,
  "add-delete": String,
  "pending-quantity": String,
  "fulfillment-channel": String,
  "Business Price": String,
  "Quantity Price Type": String,
  "Quantity Lower Bound 1": String,
  "Quantity Price 1": String,
  "Quantity Lower Bound 2": String,
  "Quantity Price 2": String,
  "Quantity Lower Bound 3": String,
  "Quantity Price 3": String,
  "Quantity Lower Bound 4": String,
  "Quantity Price 4": String,
  "Quantity Lower Bound 5": String,
  "Quantity Price 5": String,
  "merchant-shipping-group": String,
  "Progressive Price Type": String,
  "Progressive Lower Bound 1": String,
  "Progressive Price 1": String,
  "Progressive Lower Bound 2": String,
  "Progressive Price 2": String,
  "Progressive Lower Bound 3": String,
  "Progressive Price 3": String,
});
export const Listing = new Mongoose.model("listing", MerchantListingDataSchema);