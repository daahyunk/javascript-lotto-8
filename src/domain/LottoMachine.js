import Lotto from '../Lotto.js';
import { PRICE_PER_TICKET } from './constants.js';

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
    const numbers = new Set();

    while (numbers.size < 6) {
      const random = Math.floor(Math.random() * 45) + 1;
      numbers.add(random);
    }

    return Array.from(numbers).sort((a, b) => a - b);
  }
}

export default LottoMachine;
