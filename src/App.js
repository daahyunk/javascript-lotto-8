import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from './domain/LottoMachine.js';
import WinningNumbers from './domain/WinningNumbers.js';
import BonusNumber from './domain/BonusNumber.js';
import ResultCalculator from './domain/ResultCalculator.js';
import ResultView from './view/ResultView.js';
import { MESSAGE, ARRAY_JOIN_SEPARATOR } from './domain/constants.js';

class App {
  async run() {
    try {
      const purchaseAmount = await MissionUtils.Console.readLineAsync(
        MESSAGE.INPUT_PURCHASE_AMOUNT,
      );

      const lottoMachine = new LottoMachine(Number(purchaseAmount));
      const lottos = lottoMachine.publish();

      MissionUtils.Console.print(MESSAGE.PURCHASE_RESULT(lottos.length));
      lottos.forEach((lotto) =>
        MissionUtils.Console.print(`[${lotto.getNumbers().join(ARRAY_JOIN_SEPARATOR)}]`),
      );

      const winningInput = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
      const winningNumbers = new WinningNumbers(winningInput);

      const bonusInput = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
      const bonusNumber = new BonusNumber(bonusInput, winningNumbers.getNumbers());

      const resultCalculator = new ResultCalculator(
        lottos,
        winningNumbers.getNumbers(),
        bonusNumber.getNumber(),
      );

      const result = resultCalculator.getResult();
      const profitRate = resultCalculator.getProfitRate();

      ResultView.printStatistics(result, profitRate);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
