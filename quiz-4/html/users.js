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

    data = data.map((user) =>
        ({
          createdAt: user.createdAt,
          userName: user.userName,
          isSuspended: user.isSuspended,
          email: user.email,
          id: user.id
        })
    )
    
    const rows = data.reduce(
      (acc, { createdAt, userName, isSuspended, email, id}) =>
        acc +
        `<tr>
          <td>${createdAt}</td>
          <td>${userName}</td>
          <td>${isSuspended}</td>
          <td>${email}</td>
          <td>${id}</td>
      </tr>`,
      ``
    );

    tableBody.innerHTML = rows;
});