import StoreUser from "../entities/StoreUser";

export async function getUserByEMail(mail: string) {
  const response = await fetch(`http://localhost:3000/users/${mail}`)
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Error de conexión con el servidor.");
      }
    })
    .catch((err: Error) => {
      console.log(err);
    });

  return response;
}

export async function createUser(data = {}) {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

export async function editUser(user: StoreUser) {
  const response = await fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(user), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}
