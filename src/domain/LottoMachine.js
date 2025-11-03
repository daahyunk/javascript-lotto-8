import Lotto from '../Lotto.js';
import { PRICE_PER_TICKET } from './constants.js';
import LottoGenerator from './LottoGenerator.js';

class LottoMachine {
  #generator;

  constructor() {
    this.#generator = new LottoGenerator();
  }

  issue(amount) {
    const count = amount / PRICE_PER_TICKET;

    const tickets = Array.from({ length: count }, () => {
      const numbers = this.#generator.generate();
      return new Lotto(numbers);
    });

    return tickets;
  }
}

export default LottoMachine;
