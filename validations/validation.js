import validator from "validator";

export const validateSchoolData = (req, res, next) => {
    let { name, address, latitude, longitude } = req.body;
    name = name?.trim();
    address = address?.trim();
    if (!name || !address || latitude === "" || longitude === "" || latitude === undefined || longitude === undefined || latitude === null || longitude === null) {
        return res.status(400).json({
            success: false,
            message:
                "All fields are required"
        });

    }
    if (!validator.isLength(name, {
        min: 3,
        max: 100
    })
    ) {
        return res.status(400).json({
            success: false,
            message:
                "Name must be between 3 and 100 characters"
        });

    }
    if (
        !validator.isLength(address, {
            min: 5,
            max: 255
        })
    ) {

        return res.status(400).json({
            success: false,
            message:
                "Address must be between 5 and 255 characters"
        });

    }
    latitude = Number(latitude);

    longitude = Number(longitude);
    if (!validator.isFloat(
        latitude.toString(),
        {
            min: -90,
            max: 90
        }
    )
    ) {

        return res.status(400).json({
            success: false,
            message:
                "Latitude must be between -90 and 90"
        });

    }

    if (!validator.isFloat(
        longitude.toString(),
        {
            min: -180,
            max: 180
        }
    )
    ) {

        return res.status(400).json({
            success: false,
            message:
                "Longitude must be between -180 and 180"
        });

    }


    req.body = {
        name,
        address,
        latitude,
        longitude
    };

    next();
};