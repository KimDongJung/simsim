'use strict';
window.addEventListener('load', function () {
  const auto_complete = new FormAutoCompleteForDev({
    text: {
      uname: "金",
      uage: "31",
      umsg: 'test\ntest\ntest',
    },
    checked: {
      ugender: '女性',
      uhabit: ['読書', 'ゲーム', '運動'],
    },
    selected: {
      uplace: '沖縄',
    },
  });
});