export const getPosts = async () => {
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    return posts;
  } catch (error) {
    console.log('Error ', error);
    throw error;
  }
};

export const getPost = async (post_id) => {
  try {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + post_id).then(response => response.json());
    return post;
  } catch (error) {
    console.log('Error ', error);
    throw error;
  }
};

export const getPostComments = async (post_id) => {
  try {
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments?postId='+post_id).then(response => response.json());
    return comments;
  } catch (error) {
    console.log('Error ', error);
    throw error;
  }
};

export const getAuthor = async (user_id) => {
  try {
    const authors = await fetch('https://jsonplaceholder.typicode.com/users/'+user_id).then(response => response.json());
    return authors;
  } catch (error) {
    console.log('Error ', error);
    throw error;
  }
};

export const getPostsByAuthor = async (author_id) => {
  try {
    const posts = await fetch('https://jsonplaceholder.typicode.com/users/'+author_id+'/posts').then(response => response.json());
    return posts;
  } catch (error) {
    console.log('Error ', error);
    throw error;
  }
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};
