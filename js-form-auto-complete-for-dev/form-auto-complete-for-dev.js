'use strict';

// window.addEventListener('load', function () {
//   const new_test_text_input_element = document.createElement('button');
//   const new_test_text_input_element_event_handler = function (event) {
//     const inputs = {
//       text: {
//         uname: "金",
//         uage: "31",
//       },
//       checked: {
//         ugender: '女性',
//         uhabit: 'ゲーム',
//         uhabit: '運動',
//       },
//       selected: {
//         uplace: '沖縄',
//       },
//     };
    
//     for (const type in inputs) {
//       for (const input_name in inputs[type]) {
//         let target_element; 

//         switch (type) {
//           case 'text':
//             target_element = document.querySelector(`input[name=${input_name}]`);
//             target_element.value = inputs[type][input_name];
//             break;
//           case 'checked':
//             target_element = document.querySelector(`input[name="${input_name}"][value="${inputs[type][input_name]}"]`);
//             target_element.checked = true;
//             break;
//           case 'selected':
//             target_element = document.querySelector(`select[name=${input_name}]`);
//             // const target_element_children_elements = target_element.children; // ① 方法
//             const target_element_children_elements = target_element.options; // ② 方法
//             /**
//              * HTMLCollectionであるtarget_element_children_elementsはforEachメソッドは使えない
//              * だが、ArrayライクObjectなので
//              *  Array.prototype.forEach.call(target_element_children_elements, function ..) か
//              *  for (const value of target_element_children_elements) ...
//              * という形で使用できる
//              */
//             for (const target_element_children_element of target_element_children_elements) {
//               const is_equal_request_data = target_element_children_element.value === inputs[type][input_name] ? true : false;
              
//               if (is_equal_request_data) target_element_children_element.selected = true;
//             }
//             break;
//         }
//       }
//     }
//   };

//   new_test_text_input_element.id = 'form-auto-complete-for-dev-btn';
//   new_test_text_input_element.type = 'button';
//   new_test_text_input_element.textContent = 'フォーム入力';
//   new_test_text_input_element.style = 'position: fixed; z-index: 999; left: 0; bottom: 0; background-color: red; color: white;';
//   document.body.appendChild(new_test_text_input_element);
//   new_test_text_input_element.addEventListener('click', new_test_text_input_element_event_handler);
// });

class FormAutoCompleteForDev {
  constructor () {
    const new_test_text_input_element = document.createElement('button');
    new_test_text_input_element.id = 'form-auto-complete-for-dev-btn';
    new_test_text_input_element.type = 'button';
    new_test_text_input_element.textContent = 'フォーム入力';
    new_test_text_input_element.style = 'position: fixed; z-index: 999; left: 0; bottom: 0; background-color: red; color: white;';
    document.body.appendChild(new_test_text_input_element);
    // new_test_text_input_element.addEventListener('click', new_test_text_input_element_event_handler);
  }
}