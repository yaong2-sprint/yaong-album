import Card from './Card.js';

export default class CardView {
  constructor({ $target, state }) {
    this.$target = $target;
    this.state = state;
    this.render();
  }

  render() {
    const $cardContainer = document.createElement('div');
    $cardContainer.className = 'card-container';

    this.state.forEach((item) => {
      const cat = {
        imageUrl: item.url,
        name: item.breeds[0]?.name,
        origin: item.breeds[0]?.origin,
      };
      new Card({ $target: $cardContainer, cat });
    });

    this.$target.appendChild($cardContainer);
  }
}
