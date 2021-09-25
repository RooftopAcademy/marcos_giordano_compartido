import Comment from "../Comment";

export default function productComments(comment: Comment): string {
	let name = comment.email.split("@");
	return `
    <div class="product-details-comments-item">
        <h3>Name: ${name[0]}</h3>
        <p>
            Comment: ${comment.body}
        </p>
    </div>
    `;
}