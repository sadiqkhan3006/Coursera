const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});
const purchaseSchema = new mongoose.Schema({
  userId: { type: ObjectId, ref: "User" },
  courseId: { type: ObjectId, ref: "Course" },
});
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: { type: ObjectId, ref: "Admin" },
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = {
  User,
  Admin,
  Course,
  Purchase,
};
