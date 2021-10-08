import { getPost, getRandomPic, getRandomProfile, getPostComments, getAuthor } from './helpers.js';

const params = new URLSearchParams(window.location.search); // tempat menampung parameter yang ada

const elPageTitle = document.querySelector('#page-title');
const elDetailBerita = document.querySelector('#detail-berita');
const elKomentarBerita = document.querySelector('#komentar-berita');
const elLoading = document.querySelector('#loading');
const elNotFound = document.querySelector('#not-found');
const elCardImg = document.querySelector('.card-img-top');
const elCardText = document.querySelector('.card-text');
const elCardAuthorImg = document.querySelector('#author-img');
const elCardAuthorName = document.querySelector('#author-name');
const elCardAuthorEmail = document.querySelector('#author-email');
const elListGroup = document.querySelector('#list-group');

const createListElement = (comment) => {
  const elListItem = document.createElement('div');
  const elListItemContainer = document.createElement('div');
  const elListItemTitle = document.createElement('div');
  const elListItemText = document.createElement('span');

  elListItem.classList.add('list-group-item');
  elListItemContainer.classList.add('ms-2', 'me-auto');
  elListItemTitle.classList.add('fw-bold');

  elListItemTitle.innerHTML = comment.email;
  elListItemText.innerHTML = comment.body;

  elListItemContainer.appendChild(elListItemTitle);
  elListItemContainer.appendChild(elListItemText);
  elListItem.appendChild(elListItemContainer);

  return elListItem;
};

const renderPost = async () => {
  let post = await getPost(params.get('post_id'));
  if(post == null){
    elNotFound.classList.remove('d-none');
  }
  let author = await getAuthor(post.userId);
  let thumbnail = await getRandomPic();
  let picAuthor = await getRandomProfile();
  let comments = await getPostComments(params.get('post_id'));

  elLoading.classList.add('d-none');
  elDetailBerita.classList.remove('d-none');

  elPageTitle.innerHTML = post.title
  elCardImg.setAttribute('src', thumbnail);
  elCardAuthorImg.setAttribute('src', picAuthor);
  elCardAuthorName.innerHTML = author.name
  elCardAuthorEmail.innerHTML = author.email
  elCardAuthorName.setAttribute('href', 'author.html?author_id='+ post.userId);

  for(let i = 0; i < comments.length; i++){
    elKomentarBerita.appendChild(createListElement(comments[i]));
  }
};

renderPost();
