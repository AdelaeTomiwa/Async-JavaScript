const posts = [
   { title: 'Post One', body: 'This is post one' },
   { title: 'Post Two', body: 'This is post Two' },
];

function getPosts() {
   setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
         output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
   }, 1000);
}

createPosts = (post) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         posts.push(post);

         const error = false;

         if (!error) {
            resolve();
         } else {
            reject('Error');
         }
      }, 2000);
   });
};

// // createPosts({ title: 'Post Three', body: 'This is Post Three' })
// //    .then(getPosts)
// //    .catch((err) => console.log(err));

// Async /Await
// async function init() {
//    await createPosts({ title: 'Post Three', body: 'This is Post Three' });

//    getPosts();
// }

// init();

// Async Await with fetch
async function fetchUsers() {
   const res = await fetch('sample.json');

   const data = await res.json();

   console.log(data);
}

fetchUsers();

// // Promise . ALL
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//    setTimeout(resolve, 2000, 'GoodBye');
// });
// const promise4 = fetch('sample.json').then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//    console.log(values)
// );
