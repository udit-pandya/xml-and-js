/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */
const getUserNameAndVehicleAge = (data) => {
    return new Promise((resolve) => {
        let users = [];
        data.map((user) => {
            let age = 0;
            user.vehicle.map((vehicle) => {                
                age += vehicle.age;
            })
            users.push({userName: user.userName, totalAge:age})
        });
        
        resolve(users);
    })
};

module.exports = getUserNameAndVehicleAge;
