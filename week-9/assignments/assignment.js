const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};
    
const loadData = (path) => {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ({ target }) => {
          if (target.readyState == 4 && target.status == 200) {
            resolve(target.responseXML);
          }
        };
        xhttp.open("GET", path, true);
        xhttp.send();
    });
}
    
const generateTableRow = (item) => {
     
        const name = Array.from(item.getElementsByTagName(`firstName`))[0].textContent 
            + " " + Array.from(item.getElementsByTagName(`lastName`))[0].textContent;
        const email = Array.from(item.getElementsByTagName(`email`))[0].textContent;
        const gender = Array.from(item.getElementsByTagName(`gender`))[0].textContent;
        const ipAddress = Array.from(item.getElementsByTagName(`ipAddress`))[0].textContent;
        const id = item.attributes[0].textContent;
    
        return `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${gender}</td>
            <td>${ipAddress}</td>
        </tr>`;
};
    
const renderTable = (xmlData, term) => {
    const tableBody = document.getElementById("table-body");
    
    if (!tableBody) {
        throw new Error("No table element found");
    }
    
    let nodes = Array.from(xmlData.documentElement.childNodes).filter(
        ({ nodeName }) => nodeName === `people`
    );

    if(term) {
        nodes = nodes.filter((node) => Array.from(node.getElementsByTagName('firstName'))[0].textContent.toLowerCase().includes(term)
            || Array.from(node.getElementsByTagName('lastName'))[0].textContent.toLowerCase().includes(term)
        )
    }

    tableBody.innerHTML = '';
    
    nodes.map((peopleNode) =>
        tableBody.appendChild(htmlToElement(generateTableRow(peopleNode)))
    );
}    
    
loadData(`http://127.0.0.1:5500/week-6/assignments/people.xml`).then((data) => renderTable(data));
  
const onSubmit = (event) => {
    event.preventDefault();

    const term = event.target.name.value;
    console.log(term);
    loadData(`http://127.0.0.1:5500/week-6/assignments/people.xml`).then((data) => renderTable(data, term));
}

const onReset = () => {
    loadData(`http://127.0.0.1:5500/week-6/assignments/people.xml`).then((data) => renderTable(data));
};
    