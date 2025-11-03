import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_SIZE, MIN_NUMBER, MAX_NUMBER } from './constants.js';

class LottoGenerator {
  generate() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      LOTTO_SIZE,
    );
    return numbers.sort((a, b) => a - b);
  }
}

export default LottoGenerator;
