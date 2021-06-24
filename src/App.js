import ResultSection from './components/ResultSection.js';
import SearchSection from './components/SearchSection.js';
import { catApi } from './utils/catApi.js';


export default class App {
  constructor({ $app }) {
    this.$app = $app;

    this.render();
  }

  render() {
    const onSearch = async (word) => {
      const data = await catApi(word);
      console.log(data.length)
      resultSection.setState(data.length)
    };

    const searchSection = new SearchSection({
      $target: this.$app,
      onSearch
    });

    const resultSection = new ResultSection({
      $target: this.$app,
    });
  }
}
