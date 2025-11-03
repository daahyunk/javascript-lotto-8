import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { PRICE_PER_TICKET, LOTTO_SIZE, MIN_NUMBER, MAX_NUMBER } from './constants.js';

class LottoMachine {
  issue(amount) {
    const count = amount / PRICE_PER_TICKET;
    const tickets = [];

    for (let i = 0; i < count; i += 1) {
      const numbers = this.#generateLottoNumbers();
      tickets.push(new Lotto(numbers));
    }

    return tickets;
  }

  #generateLottoNumbers() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      LOTTO_SIZE,
    );
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoMachine;
