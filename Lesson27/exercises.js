// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
async function fetchPosts() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		console.log(posts);
	} catch (error) {
		console.error(error);
	}
}

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched successfully!');
		}, 2000);
	});
};

async function fetchDataExercise2() {
	try {
		const result = await fetchData();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		console.log(users);
		return users;
	} catch (error) {
		console.error(error);
	}
};
async function getTotalUsers() {
	try {
		const users = await fetchUsers();
		console.log('Total users:', users.length);
	} catch (error) {
		console.error(error);
	}
}

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUserData = async () => {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1'
		);
		const user = await response.json();
		return user;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

async function fetchUserDataEx4(){
  try{
    const userData = await fetchUserData();
    console.log('User data:', userData);
  }
  catch(error){
    console.error(error);
  }
};

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.

const getPostsAndComments = async (response, comments) => {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const post = await response.json();
      console.log(comments);
      return response;
      }
  catch(error) {
    console.error(error);
  }
};



// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

const fetchWithTimeout = async (url, timeout) => {
	return new Promise((resolve, reject) => {
		setTimeout( async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        resolve(data);
      }
      catch (error){
        reject(error);
      }

		}, timeout);
	});
};

async function fetchWithTimeoutEx6() {
  try{
    const data = await fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 2000);
    console.log(data);
  }
  catch(error){
    console.error(error);
  }
};