import mongoose from 'mongoose'
const { Schema } = mongoose;

const bcrypt = require("bcryptjs");

interface Iuser {
  fullname: string,
  email: string,
  password: string
}

export const UserSchema = new Schema<Iuser>(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

export const User = mongoose.model("users", UserSchema);

