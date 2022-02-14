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
 
    const name = Array.from(item.getElementsByTagName(`firstName`))[0].textContent 
        + " " + Array.from(item.getElementsByTagName(`lastName`))[0].textContent;
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ipAddress = Array.from(item.getElementsByTagName(`ipAddress`))[0];
    const id = item.attributes[0].textContent;

    return `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${email.textContent}</td>
        <td>${gender.textContent}</td>
        <td>${ipAddress.textContent}</td>
    </tr>`;
};

const renderTable = (xmlData) => {
const table = document.getElementById("table-main");

if (!table) {
    throw new Error("No table element found");
}

const nodes = Array.from(xmlData.documentElement.childNodes).filter(
    ({ nodeName }) => nodeName === `people`
);

nodes.map((peopleNode) =>
    table.appendChild(htmlToElement(generateTableRow(peopleNode)))
);
};

loadData(`http://127.0.0.1:5500/week-6/assignments/people.xml`, renderTable);

const onReset = () => {
window.location.replace(window.location.pathname);
};
