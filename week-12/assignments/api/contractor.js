const contractors = require("../data/mock_data.json");

const getAllContractors = (term, cost_from, cost_to, material_type, valueTerm) =>
  new Promise((resolve) => {
    let data = contractors;

    if(term) {

        switch(term) {
            case "first_name":
                data = data.filter((contractor) => contractor.first_name.toLowerCase().includes(valueTerm));
                break;
            case "last_name":
                data = data.filter((contractor) => contractor.last_name.toLowerCase().includes(valueTerm));
                break;
            case "gender":
                data = data.filter((contractor) => contractor.gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            case "email":
                data = data.filter((contractor) => contractor.email.toLowerCase().includes(valueTerm));
                break;
            case "company":
                data = data.filter((contractor) => contractor.company.toLowerCase().includes(valueTerm));
                break;
            case "role":
                data = data.filter((contractor) => contractor.role.toLowerCase().includes(valueTerm));
                break;
            case "ip_address":
                data = data.filter((contractor) => contractor.ip_address.includes(valueTerm));
                break;    
            default:
                // do nothing
                break;
        }
    }
    
    if (cost_from && cost_from != "" && cost_to && cost_to != "") {
        data = data.filter((contractor) => Number(contractor.material_cost.replace("$","")) >= Number(cost_from) && Number(contractor.material_cost.replace("$","")) <= Number(cost_to));
    }
    
    if(material_type && material_type != "all") {
        data = data.filter((contractor) => contractor.material_name.toLowerCase() === material_type);
    }
    
    resolve({ code: 200, data: data });
  });

const getContractorById = (id) =>
  new Promise((resolve) => {
    const contractor = contractors.find((contractor) => contractor.id === Number(id.trim()));

    if (contractor) {
        resolve({ code: 200, data: Array(contractor) });
    } else {
        resolve({
            code: 404,
            data: { message: `No contractor found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllContractors,
  getContractorById,
};

// build : browerift main.js -o dist/bundle.js