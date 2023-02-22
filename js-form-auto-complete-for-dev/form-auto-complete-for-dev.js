'use strict';

class FormAutoCompleteForDev {
  constructor (input_obj) {
    this.inputObj = input_obj;
    const new_test_text_input_element = document.createElement('button');
    new_test_text_input_element.id = 'form-auto-complete-for-dev-btn';
    new_test_text_input_element.type = 'button';
    new_test_text_input_element.textContent = 'フォーム入力';
    new_test_text_input_element.style = 'position: fixed; z-index: 999; left: 0; bottom: 0; background-color: red; color: white;';
    document.body.appendChild(new_test_text_input_element);
    this.autoCompleteButton = new_test_text_input_element;
    const inputs = this.inputObj;
    this.autoCompleteButton.addEventListener('click', function () {
      for (const type in inputs) {
        for (const input_name in inputs[type]) {
          let target_element; 
  
          switch (type) {
            case 'text':
              target_element = document.querySelector(`input[name=${input_name}]`);
              let target_element_tag_name = target_element.tagName;
              console.log(target_element_tag_name);
              target_element.value = inputs[type][input_name];
              break;
            case 'checked':
              target_element = document.querySelector(`input[name="${input_name}"][value="${inputs[type][input_name]}"]`);
              target_element.checked = true;
              break;
            case 'selected':
              target_element = document.querySelector(`select[name=${input_name}]`);
              // const target_element_children_elements = target_element.children; // ① 方法
              const target_element_children_elements = target_element.options; // ② 方法
              /**
               * HTMLCollectionであるtarget_element_children_elementsはforEachメソッドは使えない
               * だが、ArrayライクObjectなので
               *  Array.prototype.forEach.call(target_element_children_elements, function ..) か
               *  for (const value of target_element_children_elements) ...
               * という形で使用できる
               */
              for (const target_element_children_element of target_element_children_elements) {
                const is_equal_request_data = target_element_children_element.value === inputs[type][input_name] ? true : false;
                
                if (is_equal_request_data) target_element_children_element.selected = true;
              }
              break;
          }
        }
      }
    });
  }
}