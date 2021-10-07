import CartItem from "../interfaces/CartItemInterface";

export default function cartItem(item: CartItem): string {
  return `
    <tr>
        <td>${item.item.name}</td>
        <td>${item.item.price}</td>
        <td class="cart-table-item">
          <button class="cart-button js-substract">&minus;</button>
          ${item.amount}
          <button class="cart-button js-add">&plus;</button>
        </td>
        
        <td>${item.amount * item.item.price}</td>
    </tr>
`;
}
