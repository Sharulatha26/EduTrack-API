const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the student's name"]
        },
        age: {
            type: Number,
            required: [true, "Please enter the student's age"]
        },
        email: {
            type: String,
            required: [true, "Please enter the student's email"],
            unique: true
        },
        phone: {
            type: String,
            required: [true, "Please enter the student's phone number"]
        },
        department: {
            type: String,
            required: [true, "Please enter the student's department"]
        },
        year: {
            type: Number,
            required: [true, "Please enter the student's year of study"]
        },
        address: {
            street: String,
            city: String,
            state: String,
            zip: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true // Automatically adds createdAt & updatedAt fields
    }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
