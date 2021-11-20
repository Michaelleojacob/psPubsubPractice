import ps from '../Pubsub/Pubsub';
import showMeTheMoney from '../subscriptions/showMeTheMoney';

export default function testingShowMeTheMoney() {
  ps.subscribe('show-money', showMeTheMoney);

  ps.publish('show-money', 10000);

  ps.publish('show-money', 'cow');

  ps.logSubs();

  ps.unsub('show-money');

  ps.logSubs();
}
