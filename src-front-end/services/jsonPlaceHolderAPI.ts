import productComments from "../components/productComments";
import Comment from "../interfaces/CommentInterface";

export default function getComments(productCommentsContainer: HTMLElement) {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Error de conexión con el servidor.");
      }
    })
    .then((data: Array<Comment>) => {
      const dataReduced = data.slice(0, 10);
      dataReduced.forEach((comment: Comment) => {
        productCommentsContainer.innerHTML += productComments(comment);
      });
    })
    .catch((err: Error) => {
      productCommentsContainer.innerHTML += `
        <div class="product-details-comments-item">
            <h3>${err}</h3>
        </div>
        `;
    });
}
