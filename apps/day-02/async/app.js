// function getCommentersEmailIds( username, cb ) {
//   // get details of user with given username (the API returns an array of users, but we are interested only in the first match)
//   get( 'https://jsonplaceholder.typicode.com/users?username=' + username, function( err, users ) {
//       var userId = users[0].id;

//       // get posts by Bret - we are interested in only the first one again
//       get( 'https://jsonplaceholder.typicode.com/users/' + userId + '/posts', function( err, posts ) {
//           var postId = posts[0].id;
          
//           // get comments for the first post
//           get( 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments', function( err, comments ) {
//               var commentersEmailIds = comments.map(function( commenter ) {
//                   return commenter.email;
//               });

//               cb( commentersEmailIds );
//           });
//       });
//   });
// }

// // get email ids of people who commented on Bret's first blog post
// getCommentersEmailIds( 'Bret', function( result ) {
//   console.log( 'result = ', result )
// });

function getCommentersEmailIdsAlt( username ) {
  // get details of user with given username (the API returns an array of users, but we are interested only in the first match)
  get( 'https://jsonplaceholder.typicode.com/users?username=' + username)
    .then(users => {
      console.log('users:', users);

      var userId = users[0].id;
      return get( 'https://jsonplaceholder.typicode.com/users/' + userId + '/posts');
    })    
    .then(posts => {
      console.log('posts:', posts);

      var postId = posts[0].id;
      return get( 'https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
    })
    .then(comments => {
      console.log('comments:', comments);      

      var commentersEmailIds = comments.map(function( commenter ) {
        return commenter.email;
      });
      console.log(commentersEmailIds);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

getCommentersEmailIdsAlt('Bret');
