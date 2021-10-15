import pesos from "../helpers/pesosCurrency";
import CartItem from "../interfaces/CartItemInterface";

export default function cartItem(cartItem: CartItem): string {
  return `
    <tr id="row${cartItem.item.id}">
      <td>
        <div>
          <h2>${cartItem.item.name}</h2>
          </br>
          <h3>Precio unitario: ${pesos.format(
            cartItem.item.getPriceWithDiscount()
          )}</h3>
        </div>
      </td>
      <td>
        <button class="cart-button js-remove" data-product-id="${
          cartItem.item.id
        }"><i class="fas fa-trash"></i></button>
        </br>
        <div class="cart-table-item">
          <button class="cart-button js-substract" data-product-id="${
            cartItem.item.id
          }">&minus;</button>
          <p id="amount${cartItem.item.id}">${cartItem.amount}</p>
          <button class="cart-button js-add" data-product-id="${
            cartItem.item.id
          }">&plus;</button>
        </div>
        </br>
        <h2 id="totalPrice${cartItem.item.id}">
        ${pesos.format(cartItem.amount * cartItem.item.getPriceWithDiscount())}
        </h2>
      </td>
    </tr>
`;
}
