import ResultSection from './components/ResultSection.js';
import SearchSection from './components/SearchSection.js';
import { getCatsInfoApi } from './utils/catApi.js';

export default class App {
  constructor({ $app }) {
    this.$app = $app;

    const onSearch = async (word) => {
      const fetchedCatData = await getCatsInfoApi(word);
      resultSection.setState(fetchedCatData);
    };

    new SearchSection({
      $target: this.$app,
      onSearch,
    });

    const resultSection = new ResultSection({
      $target: this.$app,
    });
  }
}
