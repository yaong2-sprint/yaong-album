export default class SearchSection {
  constructor({ $target, onSearch }) {
    this.section = document.createElement('section');
    this.section.className = 'search-section';
    this.onSearch = onSearch;
    $target.appendChild(this.section);

    this.render();
  }

  render() {
    this.section.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const searchBox = document.createElement('input');
    searchBox.type = 'search';
    searchBox.name = 'search-box';
    searchBox.className = 'search-box';
    searchBox.autofocus = true;
    searchBox.placeholder = 'enter the cat breed';

    searchBox.addEventListener('change', (event) => {
      this.onSearch(event.target.value);
    });

    wrapper.appendChild(searchBox);
    this.section.appendChild(wrapper);
  }
}
