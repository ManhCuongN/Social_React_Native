const mongoose = require("mongoose");

const registerEcomSchema = new mongoose.Schema(
  {
    content: String,
    images: {
      type: Array,
      required: true,
    },
    numberPhone: String,
    identification: String,
    nameItem: String,
    status: { type: Boolean, default: false },
    user: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("registerEcom", registerEcomSchema);
