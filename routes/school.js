import express from "express";

import connection from "../database/connection.js";

import { calculateDistance } from "../utils/distance.js";

import { validateSchoolData } from "../validations/validation.js";

const router = express.Router();
// ADD SCHOOL API

router.post("/addSchool", validateSchoolData, (req, res) => {
    const { name, address, latitude, longitude } = req.body;
    const sql = "INSERT INTO schools(name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    connection.query(sql,
        [
            name,
            address,
            latitude,
            longitude
        ],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });

            }
            res.status(201).json({
                success: true,
                message:
                    "School Added Successfully"
            });

        }
    );

}
);

// LIST SCHOOLS API

router.get("/listSchools", (req, res) => {

    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);
    if (isNaN(userLatitude) || isNaN(userLongitude)) {
        return res.status(400).json({
            success: false,
            message:
                "Invalid Coordinates"
        });

    }
    const sql = "SELECT * FROM schools";
    connection.query(sql, (err, schools) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message:
                    "Database Error"
            });

        }
        const sortedSchools = schools.map((school) => {
            const distance =
                calculateDistance(
                    userLatitude,
                    userLongitude,
                    school.latitude,
                    school.longitude
                );
            return {
                ...school,
                distance:
                    distance.toFixed(2) +
                    " KM"
            };
        }).sort(
            (a, b) =>
                parseFloat(a.distance) -
                parseFloat(b.distance)
        );
        res.status(200).json({
            success: true,
            count:
                sortedSchools.length,
            data: sortedSchools
        });

    });

});



export default router;