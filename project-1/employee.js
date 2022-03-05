let data = [];

const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
        if (target.readyState == 4 && target.status == 200) {
            callback(target.responseXML);
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};

const generateTableRow = (item) => {
    
    const empId = item.attributes[0];
    const fullname = Array.from(item.getElementsByTagName(`fullName`))[0];
    const department = Array.from(item.getElementsByTagName(`departmentName`))[0];
    const deptId = department.attributes[0];
    const salary = Array.from(item.getElementsByTagName(`salary`))[0];
    const currency = salary.attributes[0];
    const contact = Array.from(item.getElementsByTagName(`contact`))[0];
    const contactType = contact.attributes[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];

    return `<tr>
        <td>${empId.textContent}</td>
        <td>${fullname.textContent}</td>
        <td>${department.textContent}</td>
        <td>${deptId.textContent}</td>
        <td>${salary.textContent}</td>
        <td>${currency.textContent}</td>
        <td>${contact.textContent}</td>
        <td>${contactType.textContent}</td>
        <td>${gender.textContent}</td>
    </tr>`;
};

const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");

    if (!table) {
        throw new Error("No table element found");
    }

    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
        ({ nodeName }) => nodeName === `employee`
    );

    nodes.map((studentNode) =>
        table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );

    for(let item of nodes) {
        const empId = item.attributes[0];
        const fullname = Array.from(item.getElementsByTagName(`fullName`))[0];
        const department = Array.from(item.getElementsByTagName(`departmentName`))[0];
        const deptId = department.attributes[0];
        const salary = Array.from(item.getElementsByTagName(`salary`))[0];
        const currency = salary.attributes[0];
        const contact = Array.from(item.getElementsByTagName(`contact`))[0];
        const contactType = contact.attributes[0];
        const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    
        data.push({
            empId: empId.textContent,
            fullname: fullname.textContent,
            department: department.textContent,
            deptId: deptId.textContent,
            salary: salary.textContent,
            currency: currency.textContent,
            contact: contact.textContent,
            contactType: contactType.textContent,
            gender: gender.textContent
        })
    }

    filterTable();
};

loadData(`http://127.0.0.1:5500/project-1/employee.xml`, renderTable);

const resetTable = () => {
    const table = document.getElementById("table-main");
    table.innerHTML = "";
    const inputControl = document.getElementById(`input-term`);
    inputControl.value = "";
    window.location = 'http://127.0.0.1:5500/project-1/employee.html'
}

const filterTable = () => {

    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }

    let filterData= data;
    table.innerHTML = "";

    const withFilters = Boolean(window.location.search);
  
    if (withFilters) {

        const params = new URLSearchParams(window.location.search);
        const valueTerm = params.get(`value`).toLowerCase();
        const inputControl = document.getElementById(`input-term`);
        const filterName = params.get(`filters`).toLowerCase();
        inputControl.value = '';
  
        // name filter
        switch(filterName) {
            case 'name':
                filterData = data.filter(({ fullname }) => fullname.toLowerCase().includes(valueTerm));
                break;
            case 'contact':
                filterData = data.filter(({ contact }) => contact.toLowerCase() === valueTerm);
                break;
            default:
                filterData = data;
                console.log('Name default case');
                break;
        }

        // gender filter
        // radio filter
        const genderFilter = params.get(`gender`);
        
        if(genderFilter === 'Male') {
            const valueTerm = document.getElementById('male').value.toLowerCase().trim();
            filterData = filterData.filter(({ gender }) => gender.toLowerCase() === valueTerm)
        }
        else if(genderFilter === 'Female') {
            const valueTerm = document.getElementById('female').value.toLowerCase().trim();
            filterData = filterData.filter(({ gender }) => gender.toLowerCase() === valueTerm)
        }

        
        // department selection
        let deptData = [];
        const deptFilter = params.getAll(`dept`);

        if(deptFilter && deptFilter.length > 0) {

            deptFilter.forEach(element => {
                if(element === 'Information Technology') {
                    const valueTerm = document.getElementById('dept_it').value.toLowerCase().trim();
                    deptData.push(...filterData.filter(({ department }) => department.toLowerCase() === valueTerm));
                }
                else if(element === 'Computer Science') {
                    const valueTerm = document.getElementById('dept_cse').value.toLowerCase().trim();
                    deptData.push(...filterData.filter(({ department }) => department.toLowerCase() === valueTerm));
                }
                else if(element === 'Business') {
                    const valueTerm = document.getElementById('dept_bs').value.toLowerCase().trim();
                    deptData.push(...filterData.filter(({ department }) => department.toLowerCase() === valueTerm));
                }
            });
                
            if(deptData.length > 0) {
                filterData = [];
                filterData.push(...deptData);
            }    
        }
        
        // contact selection
        let contactData = [];
        const contactFilter = params.getAll(`cnt`);
        
        if(contactFilter && contactFilter.length > 0) {

            contactFilter.forEach(element=> {
                if(element === 'mobile') {
                    const valueTerm = document.getElementById('contact_mobile').value.toLowerCase().trim();
                    contactData.push(...filterData.filter(({ contactType }) => contactType.toLowerCase() === valueTerm));    
                }
                else if(element === 'home') {
                    const valueTerm = document.getElementById('contact_home').value.toLowerCase().trim();
                    contactData.push(...filterData.filter(({ contactType }) => contactType.toLowerCase() === valueTerm));
                }
                else if(element === 'office') {
                    const valueTerm = document.getElementById('contact_office').value.toLowerCase().trim();
                    contactData.push(...filterData.filter(({ contactType }) => contactType.toLowerCase() === valueTerm));
                }
            })
                
            if(contactData.length > 0) {
                filterData = [];
                filterData.push(...contactData);
            }
        }        
    }
    
    table.append(
            htmlToElement(
                `<tr>
                    <th style='padding: 0 15px'>Emp ID</th>
                    <th style='padding: 0 15px'>Full Name</th>
                    <th style='padding: 0 15px'>Department</th>
                    <th style='padding: 0 15px'>Dept ID</th>
                    <th style='padding: 0 15px'>Salary</th>
                    <th style='padding: 0 15px'>Currency</th>
                    <th style='padding: 0 15px'>Contact</th>
                    <th style='padding: 0 15px'>Contact Type</th>
                    <th style='padding: 0 15px'>Gender</th>
                </tr>`
            )
        );

    //console.log(filterData.length);
    const rows = filterData.map(({ empId, fullname, department, deptId
        , salary, currency, contact, contactType, gender  }) =>
      table.appendChild(
        htmlToElement(
          `<tr>
                <td>${empId}</td>
                <td>${fullname}</td>
                <td>${department}</td>
                <td>${deptId}</td>
                <td>${salary}</td>
                <td>${currency}</td>
                <td>${contact}</td>
                <td>${contactType}</td>
                <td>${gender}</td>
          </tr>`
        )
      )
    );
}