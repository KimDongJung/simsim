'use strict';
window.addEventListener('load', function () {
  const auto_complete = new FormAutoCompleteForDev();
  auto_complete.setInputObj({
    text: {
      uname: "金",
      uage: "31",
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
  auto_complete.excute();
});