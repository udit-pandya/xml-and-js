/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */

const getAllStates = (data) => {
    return new Promise((resolve) => {
        let states = [];
        let filteredData = data.map((obj) =>
            obj.address.map((addr) => states.push(addr.state) )
        );

        filteredData = states.filter((item, pos, self) => {
            return self.indexOf(item) == pos;
        })
        
        resolve(filteredData);
    })
};

module.exports = getAllStates;
