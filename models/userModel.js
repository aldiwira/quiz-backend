const Mongoose = require('mongoose')
const Bcrypt = require('bcrypt')

const userSchema = new Mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  isLogin: {
    type: Boolean,
    require: true
  }
}, {
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  }
})

// encrypt password before inject to db
userSchema.pre('save', (next) => {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = Bcrypt.hashSync(this.password, 8)
})

module.exports = Mongoose.model("users", userSchema)
