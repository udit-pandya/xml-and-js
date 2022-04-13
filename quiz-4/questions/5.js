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
const getEmailDomains = (data) => {
    return new Promise((resolve) => {
        let domains = [];
        let filteredData = data.map((user) =>
            domains.push(user.email.split("@")[1])
        );

        filteredData = domains.filter((item, pos, self) => {
            return self.indexOf(item) == pos;
        })
        
        resolve(filteredData);
    })
};

module.exports = getEmailDomains;
