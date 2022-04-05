const { getAllContractors, getContractorById } = require("./api/contractor");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id, first_name, last_name, email, gender, company, role, ip_address, material_id, material_name, material_cost }) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${company}</td>
        <td>${role}</td>
        <td>${ip_address}</td>
        <td>${material_id}</td>
        <td>${material_name}</td>
        <td>${material_cost}</td>
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};


// const withFilters = Boolean(window.location.search);

// if (withFilters) {
//     const params = new URLSearchParams(window.location.search);
//     term = params.get(`filters`);
//     valueTerm = params.get(`input-value`).toLowerCase();
//     cost_from = params.get(`input-cost-from`).replace("$","");
//     cost_to = params.get(`input-cost-to`).replace("$","");
//     material_type = params.get(`filters_material`).toLowerCase();
//     const inputControl = document.getElementById(`input-value-term`);
//     inputControl.value = valueTerm;
// }

// if(term === `id`) {
//   getContractorById(valueTerm).then(({ data }) => renderTable(data));
// } else {
//   getAllContractors(term, cost_from, cost_to, material_type, valueTerm).then(({ data }) => renderTable(data));
// }
getAllContractors().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;

  const cost_from = event.target.input_cost_from.value;
  const cost_to = event.target.input_cost_to.value;
  const material_type = event.target.filters_material.value;
  const valueTerm = event.target.input.value;
  
  if(term === `id`) {
    getContractorById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllContractors(term, cost_from == "" ? "" : cost_from , cost_to, material_type.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllContractors().then(({ data }) => renderTable(data));
};

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);
