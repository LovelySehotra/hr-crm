import { Schema ,mongoose }  from "mongoose"
import bcrypt from "bcrypt"

const JobApplicationSchema = new Schema({
    status: { type: String, enum: ['new', 'scheduleds', 'selected', 'ongoing', 'rejected'], default: 'new' },
    experience: {
        type: String,
        required: false
    },
    resumeLink: { type: String },
});

const UserSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    },
    designation: { type: String, required: false },
    role: {
        type: String,
        enum: [ 'admin', 'employee',"temp"],
        default:'admin',
        required: false
    },

    jobApplication: {
        type: JobApplicationSchema,
        required: false
    },
    resume: {
        type: String,
        required: false
    },
    department: { type: String, required: false },
    todayTask: {
        type: String,
        required: false
    },
    joiningDate: {
        type: Date,
        required: false
    },
    workingStatus: {
        type: String,
        enum: ['work from home', 'present', 'absent', 'medical leave'],
        required: false
    },
    profile: {
        privacy: {
          profilePhoto: { type: Boolean, default: true },
          about: { type: Boolean, default: true },
          status: { type: Boolean, default: true },
        },
        about: { type: String, default: "I'm using GigaSync App" },
        avatar: { type: String },
        blockedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
      },
    isAvatar: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    contacts: [{ type: Schema.Types.ObjectId, ref: "User" }],
    allChats: [{ type: Schema.Types.ObjectId, ref: "User" }],
    favoritesChats: [{ type: Schema.Types.ObjectId, ref: "User" }],
    socketId: String,
    status: { type: String, default: "offline" },
    lastSeen: { type: Date, default: Date.now }

})
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (error) {
      return next(error);
    }
  });
  
export const User = mongoose.model('User', UserSchema);