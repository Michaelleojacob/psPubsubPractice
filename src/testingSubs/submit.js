import cached from '../cacheDom/cacheDom';
import ps from '../Pubsub/Pubsub';

export default function wrapAllSubmitLogic() {
  const { form, input, counter, people } = cached;

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) parent.removeChild(parent.firstChild);
  };
  const peopleArr = ['mike', 'sam', 'pedro'];

  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('submit', () => {
    peopleArr.push(input.value);
    input.value = '';
    ps.publish('personUpdated', peopleArr);
  });

  const render = (arr) => {
    removeAllChildNodes(people);
    arr.map((x) => {
      const element = document.createElement('div');
      element.textContent = x;
      element.classList.add('deleteMe');
      return people.appendChild(element);
    });
    counter.textContent = arr.length;
  };

  const handleDeleteMe = (e) => {
    if (e.target.classList.contains('deleteMe')) {
      peopleArr.splice(peopleArr.indexOf(e.target.textContent), 1);
      ps.publish('personUpdated', peopleArr);
    }
  };

  people.addEventListener('click', handleDeleteMe);

  ps.subscribe('personUpdated', render);

  render(peopleArr);
}
