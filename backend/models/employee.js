import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 30,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      maxLength: 10,
      trim: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
    isProfileComplete: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "Employee",
    },
    department: {
      type: String,
    },
    managerProjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    employeeProjects: [
      {
        project: {
          type: Schema.Types.ObjectId,
          ref: "Project",
        },
        task: {
          type: Schema.Types.ObjectId,
          ref: "Task",
        },
      },
    ],
    clientProjects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  { timestamps: true }
);

const model = mongoose.model("Employee", employeeSchema);
export default model;
