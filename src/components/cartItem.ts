import CartItem from "../interfaces/CartItemInterface";

export default function cartItem(cartItem: CartItem): string {
  return `
    <tr>
        <td>${cartItem.item.name}</td>
        <td>${cartItem.item.getPriceWithDiscount().toFixed(0)}</td>
        <td>
          <div class="cart-table-item">
            <button class="cart-button js-substract" data-product-id="${
              cartItem.item.id
            }">&minus;</button>
            ${cartItem.amount}
            <button class="cart-button js-add" data-product-id="${
              cartItem.item.id
            }">&plus;</button>
          </div>
        <td>${(cartItem.amount * cartItem.item.getPriceWithDiscount()).toFixed(
          0
        )}</td>
    </tr>
`;
}
