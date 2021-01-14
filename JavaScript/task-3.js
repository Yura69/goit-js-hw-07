const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const listImg = document.querySelector('ul');
// const listImgItem = document.createElement('li');
// const listImgItemImage = document.createElement('img');
// listImgItemImage.setAttribute('url', 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
// listImgItemImage.setAttribute('alt', 'White and Black Long Fur Cat');
// console.log(listImgItemImage);
const elementUlImage = document.getElementById('gallery');

const createAttribute = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 350 height = 250 ></li>`;
const createСollectionImages = images.reduce(
  (acc, elem) => acc + createAttribute(elem),
  [],
);

elementUlImage.insertAdjacentHTML('afterbegin', createСollectionImages);
