import mongoose from 'mongoose';

const productSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true,
        },
        cost:{ type: Number },
        category_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        description:{ type: String },
        inStock:{ type: Boolean, default: true },
        scheduled_for_shipping:{ type: Boolean, default: false },
        shipment_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Shipment' },
        visible:{ type: Boolean, default: true },
        locked:{ type: Boolean, default: false },
        damage_notes: [{ type: String }],
        inspections_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Inspection' }]
    },
    { timestamps: true },
);

const Product = mongoose.model('Product', productSchema);
 
export default Product;