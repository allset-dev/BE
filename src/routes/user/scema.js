import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  addrLine1: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  kovil: String,
  native: String,
  spouseName: String,
  kidsCount: String,
  metro: String,
  occupation: String,
  spouseOccupation: String,
  password: String,
  isAdmin: String,
  resetPassword: String,
  memberApproval: String,
  comments: String,
  spouseLastName: String,
  addressbookconsent: String,
  addressbookphotofilename: String,
});

export default mongoose.model("user", userSchema);

// spouseName -> spouseFirstName
// memberApproval -> isApproved
