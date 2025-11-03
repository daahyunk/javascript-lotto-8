import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ARRAY_JOIN_SEPARATOR } from '../domain/constants.js';

class OutputView {
  static printLottoList(tickets) {
    MissionUtils.Console.print(MESSAGE.PURCHASE_RESULT(tickets.length));
    tickets.forEach(OutputView.#printLotto);
  }

  static #printLotto(ticket) {
    const numbers = ticket.getNumbers().join(ARRAY_JOIN_SEPARATOR);
    MissionUtils.Console.print(`[${numbers}]`);
  }
}

export default OutputView;
