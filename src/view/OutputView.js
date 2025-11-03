import { MissionUtils } from '@woowacourse/mission-utils';

class OutputView {
  static printLottoList(tickets) {
    MissionUtils.Console.print(`${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      MissionUtils.Console.print(`[${ticket.getNumbers().join(', ')}]`);
    });
  }
}

export default OutputView;
