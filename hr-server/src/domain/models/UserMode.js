import { Schema } from "mongoose"

const JobApplicationSchema = new Schema({
    status: { type: String, enum: ['New', 'Scheduleds', 'Selected', 'Ongoing', 'Rejected'], default: 'New' },
    experience: {
        type: String,
        required: false
    },
    resumeLink: { type: String },
});

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    designation: { type: String, required: false },
    role: {
        type: String,
        enum: ['Admin', 'HR', 'Employee'],
        required: true
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
        required: true
    }

})

export const User = mongoose.model('User', UserSchema);