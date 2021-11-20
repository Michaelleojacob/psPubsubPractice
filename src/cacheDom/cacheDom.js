function cache() {
  const parent1 = document.querySelector('#container1');
  const parent2 = document.querySelector('#container2');
  return {
    parent1,
    button: parent1.querySelector('#button'),
    clickNum: parent1.querySelector('#clickNum'),
    parent2,
    form: parent2.querySelector('#form'),
    input: parent2.querySelector('#input'),
    counter: parent2.querySelector('#counter'),
    people: parent2.querySelector('#people'),
  };
}

const cached = cache();

export default cached;
