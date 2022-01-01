import cached from '../cacheDom/cacheDom';
import ps from '../Pubsub/Pubsub';

export default function listenForTextChangeSubmit() {
  const { p3form, changep1, changep2 } = cached;

  p3form.addEventListener('submit', (e) => e.preventDefault());

  function handleSubmit() {
    const thing1 = changep1.value;
    const thing2 = changep2.value;
    changep1.value = '';
    changep2.value = '';
    const obj = { thing1, thing2 };
    ps.publish('changedText', obj);
  }

  p3form.addEventListener('submit', handleSubmit);
}
