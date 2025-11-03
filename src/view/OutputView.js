import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../domain/constants.js';

class OutputView {
  static printLottoList(tickets) {
    MissionUtils.Console.print(MESSAGE.PURCHASE_RESULT(tickets.length));
    tickets.forEach(OutputView.#printLotto);
  }

  static #printLotto(ticket) {
    const numbers = ticket.getNumbers().join(', ');
    MissionUtils.Console.print(`[${numbers}]`);
  }
}

export default OutputView;
