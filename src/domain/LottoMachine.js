import Lotto from '../Lotto.js';
import { PRICE_PER_TICKET } from './constants.js';
import LottoGenerator from './LottoGenerator.js';

class LottoMachine {
  #generator;

  #amount;

  constructor(amount) {
    this.#generator = new LottoGenerator();
    this.#amount = amount;
  }

  issue(amount) {
    const count = amount / PRICE_PER_TICKET;
    const tickets = Array.from({ length: count }, () => {
      const numbers = this.#generator.generate();
      return new Lotto(numbers);
    });
    return tickets;
  }

  publish() {
    return this.issue(this.#amount);
  }
}

export default LottoMachine;
