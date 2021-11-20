import cached from '../cacheDom/cacheDom';
import ps from '../Pubsub/Pubsub';

export default function wrapAllIncrementNumberLogic() {
  // get the dom elements
  const { button, clickNum } = cached;

  //
  const incrementNum = () => {
    let num = 0;

    const getCurrNum = () => num;

    const increaseNumAndUpdateDisplay = () => {
      num += 1;
      clickNum.textContent = getCurrNum();
    };

    return { getCurrNum, increaseNumAndUpdateDisplay };
  };

  const updoot = incrementNum();

  ps.subscribe('clicked', updoot.increaseNumAndUpdateDisplay);

  const handleClick = (e) => {
    ps.publish('clicked', e);
  };

  button.addEventListener('click', handleClick);
}
