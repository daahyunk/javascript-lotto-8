import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../src/view/OutputView.js";
import Lotto from "../src/Lotto.js";

describe("OutputView", () => {
  test("구입한 로또 수량과 번호를 출력한다", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    const tickets = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([3, 5, 11, 16, 32, 38]),
    ];

    OutputView.printLottoList(tickets);

    expect(logSpy).toHaveBeenCalledWith("2개를 구매했습니다.");
    expect(logSpy).toHaveBeenCalledWith("[8, 21, 23, 41, 42, 43]");
    expect(logSpy).toHaveBeenCalledWith("[3, 5, 11, 16, 32, 38]");
  });
});
