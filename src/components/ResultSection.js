import CardView from './CardView.js';

export default class ResultSection {
  constructor({ $target, data = null }) {
    this.$section = document.createElement('section');
    this.$section.className = 'result-section';
    this.data = data;
    $target.appendChild(this.$section);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.$section.innerHTML = '';
    if (this.data === null) {
      const $initialResult = document.createElement('div');
      $initialResult.innerHTML = '<h1>고양이 품종을 입력해주세요.</h1>';
      $initialResult.className = 'initial-result';
      this.$section.appendChild($initialResult);
    } else if (this.data.length) {
      const cardView = new CardView({
        $target: this.$section,
        data: this.data,
      });
    } else {
      const $noResult = document.createElement('div');
      $noResult.className = 'no-result';
      $noResult.innerHTML = '<h1>검색어에 해당하는 고양이가 없습니다.</h1>';
      this.$section.appendChild($noResult);
    }
  }
}
