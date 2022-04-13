const loadData = () =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open(
      "GET",
      `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
      true
    );
    xhttp.send();
  });

loadData().then((data) => {
    const tableBody = document.getElementById("table-body");

    if (!tableBody) {
      throw new Error("No table element found");
    }

    let addresses = data.flatMap((user) => 
        user.address);
    
    
    const rows = addresses.reduce(
      (acc, { country, state, city, zipCode, id, userId}) =>
        acc +
        `<tr>
          <td>${country}</td>
          <td>${state}</td>
          <td>${city}</td>
          <td>${zipCode}</td>
          <td>${id}</td>
          <td>${userId}</td>
      </tr>`,
      ``
    );

    tableBody.innerHTML = rows;
});
