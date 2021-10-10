import StoreUser from "../entities/StoreUser";

export const users: Array<StoreUser> = getUsers();

function getUsers(): Array<StoreUser> {
  const loadData: string | null = localStorage.getItem("users");
  const users: Array<StoreUser> = [];
  let loadDataJson: Array<any>;
  if (loadData) {
    loadDataJson = JSON.parse(loadData);
    loadDataJson.forEach((element) => {
      const user: StoreUser = new StoreUser();
      user.create(element);
      users.push(user);
    });
    return users;
  }
  return [];
}

export function postUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

export function getUserByEMail(userMail: string): StoreUser | null {
  if (users) {
    return users.filter((userEl) => userEl.mailAdress == userMail)[0];
  }
  return null;
}
