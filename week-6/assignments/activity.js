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
    const fname = Array.from(item.getElementsByTagName(`firstname`))[0];
    const lname = Array.from(item.getElementsByTagName(`lastname`))[0];
    const nickname = Array.from(item.getElementsByTagName(`nickname`))[0];
    const marks = Array.from(item.getElementsByTagName(`marks`))[0];
    const rollno = item.attributes[0].textContent;

    return `<tr>
        <td>${rollno}</td>
        <td>${fname.textContent} ${lname.textContent}</td>
        <td>${nickname.textContent}</td>
        <td>${marks.textContent}</td>
    </tr>`;
  };
  
  const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `student`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
  };
  
  loadData(`http://127.0.0.1:5500/week-6/assignments/students.xml`, renderTable);
  
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };
  