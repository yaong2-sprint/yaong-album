export default class ResultSection {
  constructor({ $target, data = null }) {
    this.section = document.createElement("section");
    this.section.className = "result-section";
    this.data = data;
    $target.appendChild(this.section);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.section.innerHTML = "";
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    const resultText = document.createElement('div');
    resultText.className = "search-result";
    resultText.innerHTML = this.data;

    wrapper.appendChild(resultText);
    this.section.appendChild(wrapper);
  }
}