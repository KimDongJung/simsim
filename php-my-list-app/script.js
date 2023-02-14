'use strict';

init_content();
content();
// test();

function init_content () {
  const content_list_element = document.querySelector('.content-list');
  request_content('http://localhost/php-my-list-app/api-index.php', {type: 'init'})
  .then((data) => {
    console.log(data);
    data.forEach((content_obj) => {
      const content_text = content_obj.message;
      const new_checkbox_element = document.createElement('input');
      const new_text_node = document.createTextNode(`::${content_text} `);
      const new_delete_button_element = document.createElement('button');
      const new_content_element = document.createElement('li');

      new_checkbox_element.type = "checkbox";
      new_checkbox_element.className = "content-item-check";
      new_delete_button_element.type = 'button';
      new_delete_button_element.className = 'content-delete-btn';
      new_delete_button_element.textContent = 'DELETE';
      new_content_element.className = 'content-item';
      new_content_element.appendChild(new_checkbox_element);
      new_content_element.appendChild(new_text_node);
      new_content_element.appendChild(new_delete_button_element);
      content_list_element.appendChild(new_content_element);
    });
  });
}

function content () {
  const content_section = document.querySelector('.content');
  const content_text_input_element = content_section.querySelector('.content-add-txt');
  const content_section_event_handler = function (event) {
    let error_message = "";
    const error_message_text_element = document.querySelector('.err-msg-txt');
    const clicked_element = event.target;
    const is_content_add_button = clicked_element.classList.contains("content-add-btn");
    const is_contnet_delete_button = clicked_element.classList.contains("content-delete-btn");
    const is_chekced_contnet_delete_button = clicked_element.classList.contains("chekced-content-delete-btn");
    
    // if (!(is_content_add_button || is_contnet_delete_button)) return; // クリックイベント処理をかけたいエレメントが増えれば増える程一々追加するのは厳しいかも・・・
    
    if (is_content_add_button) content_add_event_handler(event);
    if (is_contnet_delete_button) {
      // const delete_target_element = clicked_element.closest('.content-item');
      // delete_target_element.remove();
      request_content('http://localhost/php-my-list-app/api-index.php', {type: 'delete'})
      .then(data => {
        
      });
    }
    if (is_chekced_contnet_delete_button) {
      const content_checkbox_elements = this.querySelectorAll('.content-item-check');
      const delete_target_elements = [];

      content_checkbox_elements.forEach(content_checkbox_element => {
        const is_checked = content_checkbox_element.checked === true ? true : false;

        if (!is_checked) return;

        const delete_target_element = content_checkbox_element.closest('.content-item');
        
        delete_target_elements.push(delete_target_element);
      });

      const has_delete_target_element = delete_target_elements.length !== 0 ? true : false;
      
      if (!has_delete_target_element) {
        error_message = "Please select target element";
        error_message_text_element.textContent = error_message;
        return;
      }
      else {
        delete_target_elements.forEach(delete_target_element => {
          delete_target_element.remove();
          error_message_text_element.textContent = '';
        });
      }
    }
    
  };
  const content_add_event_handler = function (event) {
    let error_message = "";
    const error_message_text_element = document.querySelector('.err-msg-txt');
    const event_type = event.type;
    const is_click_event = event_type === 'click' ? true : false;
    const is_keypress_event = event_type === 'keypress' ? true : false;
    
    if (is_keypress_event) {
      const is_pressed_enter = event.key === 'Enter' ? true : false;

      if (!is_pressed_enter) return;
    }
    
    const content_text_input_element = is_keypress_event ? this : content_section.querySelector('.content-add-txt');
    const content_text = content_text_input_element.value;
    const new_checkbox_element = document.createElement('input');
    const new_text_node = document.createTextNode(`::${content_text} `);
    const new_delete_button_element = document.createElement('button');
    const new_content_element = document.createElement('li');
    const content_list_element = content_section.querySelector('.content-list');

    if (content_text === "" || content_text === null || content_text === undefined) error_message = "Content is empty";
    if (error_message !== "") {
      error_message_text_element.textContent = error_message;
      return;
    }

    new_checkbox_element.type = "checkbox";
    new_checkbox_element.className = "content-item-check";
    new_delete_button_element.type = 'button';
    new_delete_button_element.className = 'content-delete-btn';
    new_delete_button_element.textContent = 'DELETE';
    new_content_element.className = 'content-item';
    new_content_element.appendChild(new_checkbox_element);
    new_content_element.appendChild(new_text_node);
    new_content_element.appendChild(new_delete_button_element);
    content_list_element.appendChild(new_content_element);
    content_text_input_element.value = '';
    error_message_text_element.textContent = '';

    /////////////////////
    // TEST
    /////////////////////
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
  
    postData('http://localhost/php-my-list-app/api-index.php', { message: content_text })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    

    
    
  };

  content_section.addEventListener('click', content_section_event_handler);
  content_text_input_element.addEventListener('keypress', content_add_event_handler);
}




async function request_content(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'text/html',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

function test () {
  const content_value = document.querySelector('.content-add-txt').value;
  // Example POST method implementation:
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData('http://localhost/php-my-list-app/api-index.php', { name: 'KIM', age: 32, nation: 'KOREA', added: '何かないのか！？', mm: "成功したぜ！！！" })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

