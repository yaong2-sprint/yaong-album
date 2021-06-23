export default class SearchBar {
  constructor({ $target, onSearch }) {
    this.section = document.createElement('section');
    this.section.className = "search-section";
    this.onSearch = onSearch;
    $target.appendChild(this.section);
    console.log('test')

    this.render();
  }

  render() {
    this.section.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const searchBox = document.createElement('input');
    searchBox.type = 'search';
    searchBox.name = 'search-box';
    searchBox.className = "search-box";
    searchBox.autofocus = true;
    searchBox.placeholder = "enter the cat breed";

    searchBox.addEventListener("change", e => {
      console.log(e.value);
    })

    wrapper.appendChild(searchBox);
    this.section.appendChild(wrapper);
  }
}
