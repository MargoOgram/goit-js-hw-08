import { galleryItems } from './gallery-items.js';

// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};
const createGalleryItem = ({ preview, original, description }) =>
  `
<a
  class="gallery__item"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    alt=${description}
  />
</a>`;
const galleryMarkup = galleryItems.reduce((acc, item) => acc + createGalleryItem(item), '');

refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
gallery.on('show.simplelightbox', function () {
	
});
