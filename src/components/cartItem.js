export default function cartItem(item) {
	return `
    <tr>
        <td>${item.item.name}</td>
        <td>${item.item.price}</td>
        <td>${item.amount}</td>
        <td>${item.amount * item.item.price}</td>
    </tr>
`;
}
