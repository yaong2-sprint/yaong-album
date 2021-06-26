export default class Card {
  constructor({ $target, cat }) {
    this.$target = $target;
    this.cat = cat;

    this.render();
  }

  render() {
    this.$card = document.createElement('article');
    this.$card.className = 'card';

    const $cardDescription = document.createElement('article');
    $cardDescription.className = 'card-description';

    const { name, origin, imageUrl } = this.cat;

    const $cardImage = document.createElement('img');
    $cardImage.className = 'card-image';
    $cardImage.src = imageUrl;

    const $catName = document.createElement('p');
    $catName.className = 'cat-name';
    $catName.innerText = name;

    const $catOrigin = document.createElement('p');
    $catOrigin.className = 'cat-origin';
    $catOrigin.innerText = origin;

    $cardDescription.appendChild($catName);
    $cardDescription.appendChild($catOrigin);
    this.$card.appendChild($cardImage);
    this.$card.appendChild($cardDescription);

    this.$target.appendChild(this.$card);
  }
}
