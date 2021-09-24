export default function cartItem(item) {
    return "\n    <tr>\n        <td>" + item.item.name + "</td>\n        <td>" + item.item.price + "</td>\n        <td>" + item.amount + "</td>\n        <td>" + item.amount * item.item.price + "</td>\n    </tr>\n";
}
