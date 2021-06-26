import CardView from './CardView.js';

export default class ResultSection {
  constructor({ $target, state = null }) {
    this.$section = document.createElement('section');
    this.$section.className = 'result-section';
    this.state = state;
    $target.appendChild(this.$section);

    this.render();
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.$section.innerHTML = '';
    if (this.state === null) {
      const $initialResult = document.createElement('div');
      $initialResult.innerHTML = '<h1>고양이 품종을 입력해주세요.</h1>';
      $initialResult.className = 'initial-result';
      this.$section.appendChild($initialResult);
    } else if (this.state.length) {
      const cardView = new CardView({
        $target: this.$section,
        state: this.state,
      });
    } else {
      const $noResult = document.createElement('div');
      $noResult.className = 'no-result';
      $noResult.innerHTML = '<h1>검색어에 해당하는 고양이가 없습니다.</h1>';
      this.$section.appendChild($noResult);
    }
  }
}
