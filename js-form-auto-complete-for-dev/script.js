'use strict';
window.addEventListener('load', function () {
  const auto_complete = new FormAutoCompleteForDev({
    text: {
      uname: "金",
      uage: "31",
      umsg: 'test',
    },
    checked: {
      ugender: '女性',
      uhabit: 'ゲーム',
      uhabit: '運動',
    },
    selected: {
      uplace: '沖縄',
    },
  });
});