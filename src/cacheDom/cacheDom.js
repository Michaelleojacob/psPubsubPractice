function cache() {
  const parent1 = document.querySelector('#container1');
  const parent2 = document.querySelector('#container2');
  const parent3 = document.querySelector('#container3');
  return {
    parent1,
    button: parent1.querySelector('#button'),
    clickNum: parent1.querySelector('#clickNum'),
    parent2,
    form: parent2.querySelector('#form'),
    input: parent2.querySelector('#input'),
    counter: parent2.querySelector('#counter'),
    people: parent2.querySelector('#people'),
    parent3,
    p3form: parent3.querySelector('#changeText'),
    changep1: parent3.querySelector('#changep1'),
    changep2: parent3.querySelector('#changep2'),
    param1: parent3.querySelector('#param1'),
    param2: parent3.querySelector('#param2'),
  };
}

const cached = cache();

export default cached;
