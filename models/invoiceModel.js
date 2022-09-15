import mongoose, {model, models} from "mongoose";
import {v1} from "uuid";

const invoiceSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
        default: function genuuid() {
            return v1();
        }
    },
    date: {
        type: Date,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
})

export default models.Invoice || model('Invoice', invoiceSchema)