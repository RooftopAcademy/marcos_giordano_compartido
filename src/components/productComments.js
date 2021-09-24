export default function productComments(comment) {
    var name = comment.email.split("@");
    return "\n    <div class=\"product-details-comments-item\">\n        <h3>Name: " + name[0] + "</h3>\n        <p>\n            Comment: " + comment.body + "\n        </p>\n    </div>\n    ";
}
