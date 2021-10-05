import StoreUser from "../entities/StoreUser";

export default function addUserNameToNavBar(user: string): void {
  const userName: NodeListOf<HTMLElement> =
    document.querySelectorAll(".js-user");
  userName.forEach((element) => {
    element.innerHTML = `<i class="fas fa-user"></i> &nbsp ${user}`;
  });
}
