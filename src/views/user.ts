import headerRendering from "../components/header";
import userComponent from "../components/userComponent";
import PrivilegeEnum from "../PrivilegeEnum";
import Store from "../Store";

export default function returnUserView(store: Store) {
	let main: HTMLElement = document.getElementById("main-content")!;
	main.innerHTML = userComponent(store);

	let logOutButton: HTMLButtonElement = document.getElementById(
		"log-out"
	) as HTMLButtonElement;

	let userName: NodeListOf<HTMLElement> = document.querySelectorAll(".js-user");

	if (logOutButton) {
		logOutButton.addEventListener("click", () => {
			store.clearUser();
			main.innerHTML = userComponent(store);
			userName.forEach((element) => {
				element.innerHTML = `<i class="fas fa-user"></i> &nbsp Invitado`;
			});
		});
	}

	let privilege: HTMLSelectElement = document.getElementById(
		"privilege"
	) as HTMLSelectElement;

	if (privilege) {
		privilege.addEventListener("change", function () {
			if (privilege.value == "ADMIN") {
				store.user.privilege = PrivilegeEnum.admin;
			} else {
				store.user.privilege = PrivilegeEnum.normal;
			}
		});
	}
}
