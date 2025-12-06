const express = require('express');
const router = express.Router();
const studentData = require('../Models/studentModel');

router.post('/students', async (req, res) => {
    try {
        const { studentName, grade, subject, createAt } = req.body;

        const newData = new studentData({ studentName, grade, subject, createAt });
        await newData.save();

        return res.status(201).json({
            message: "Added new Student Data",
            data: newData
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
});

router.get('/students', async (req, res) => {
    try {
        const students = await studentData.find();
        return res.status(200).json(students);
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
});

router.put('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedStudent = await studentData.findByIdAndUpdate(
            id,
            updates,
            { new: true, runValidators: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.status(200).json({
            message: "Student updated successfully",
            data: updatedStudent
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
});

router.delete('/students/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await studentData.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.status(200).json({
            message: "Student deleted successfully",
            data: deletedStudent
        });
    } catch (err) {
        return res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
});

module.exports = router;
