const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 charcters"],
    },
    address: {
      type: String,
      require: [true, "Please add an address"],
    },
    district: {
      type: String,
      require: [true, "Please add a district"],
    },
    province: {
      type: String,
      require: [true, "Please add a province"],
    },
    postalcode: {
      type: String,
      require: [true, "Please add a postalcode"],
      maxlength: [5, "Postal code can not be more than 5 digits"],
    },
    tel: {
      type: String,
    },
    region: {
      type: String,
      require: [true, "Please add a region"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Cascade delete reservations when a hotel is deleted
HotelSchema.pre("deleteOne", { document: true, querr: false}, async function(next){
  console.log(`Reservation being removed from hotel ${this._id}`);
  await this.model('Reservation').deleteMany({hotel: this._id});
  next();
});

//reverse populate with virtuals
HotelSchema.virtual("reservations", {
  ref: "Reservation",
  localField: "_id",
  foreignField: "hotel",
  justOne: false,
});

module.exports = mongoose.model("Hotel", HotelSchema);