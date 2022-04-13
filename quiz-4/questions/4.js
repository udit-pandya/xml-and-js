/**
 * Function to get vehicle object by VIN
 * - should return a promise
 * - should reject if no VIN passed
 *   error message: "No VIN provided"
 * - should reject if no matches found
 *   error message: "No items matching ${vin}"
 * @param {*} data - see shape in ../../data.example.json
 * @returns vehicle object
 */
const getByVIN = (data, vin) => {

    return new Promise((resolve, reject) => {

        if(!vin) reject(`No VIN provided`);
        
        let vehicles = [];
        data.map((obj) =>
            obj.vehicle.filter((vehicle) => {
                if(vehicle.vin === vin) {
                    vehicles.push(vehicle);
                }
            } )
        );
        
        if(vehicles.length > 0) {
            resolve(vehicles[0]);
        } else {
            reject(`No items matching ${vin}`);
        }
    })
};

module.exports = getByVIN;
