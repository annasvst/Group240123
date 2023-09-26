/*
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method

Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300... - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';
const userId = 3;
const id = 25; // postId

// fetch-one-button

function getPosts() {
	fetch(URL)
		.then((response) => response.json())
		.then((json) => console.log(json));
}
const getAllPostsButton = document.getElementById('fetch-button');
getAllPostsButton.addEventListener('click', getPosts);

function getPostById(postId) {
	fetch(URL + '/' + postId)
		.then((response) => response.json())
		.then((json) => console.log(json));
}

// @Anna to fix this example:
async function fetchPosts() {
  await getPostById(5);
  await getPostById(6);
}

document
	.getElementById('fetch-one-button')
	.addEventListener('click', () => getPostById(id));

const createPostButton = document.getElementById('create-button');
createPostButton.addEventListener('click', createPost);

function createPost() {
	fetch(URL, {
		method: 'POST',
		body: JSON.stringify({
			title: 'Lorem ipsum dolor',
			body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nobis quaerat earum voluptatem dicta minima consequatur dolore quas non architecto deserunt unde exercitationem, magnam dolorem similique sint laborum enim quisquam!',
			userId: userId,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json))
    .catch(err => console.log(err));
}

function updatePost(postId) {
    fetch(URL + '/' + postId, {
        method: 'PUT',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

document
	.getElementById('update-button')
	.addEventListener('click', () => updatePost(id));

function deletePost(postId) {
    fetch(URL + '/' + postId , {
        method: 'DELETE',
      })
      .then((response) => response.json())
        .then((json) => console.log(json));
}

document.getElementById("delete-button").addEventListener("click", () => deletePost(id));