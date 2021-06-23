import SearchBar from './components/SearchBar.js';

const onSearch = (word) => {
  console.log(word)
};

export default class App {
  constructor({ $app }) {
    this.$app = $app;

    this.render();
  }

  render() {
    const searchBar = new SearchBar({
      $target: this.$app,
      onSearch
    });
  }
}
