import cached from '../cacheDom/cacheDom';
import ps from '../Pubsub/Pubsub';

export default function multipleParams() {
  const { param1, param2 } = cached;

  function renderNewText(obj) {
    console.log(obj);
    const { thing1, thing2 } = obj;
    param1.textContent = thing1;
    param2.textContent = thing2;
  }

  ps.subscribe('changedText', renderNewText);
}
