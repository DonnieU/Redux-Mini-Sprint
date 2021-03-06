export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the centra Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function 
  return {
    type: INCREMENT
  }
};


export const decrement = () => {
  // Fill in this function 
  return {
    type: DECREMENT
  }
};

// example on how to delete a post that has a postID
// export const deletePost = (postID) => {
//   return {
//     type: 'DELETE_POST',
//     payload: postID
//   }
// };