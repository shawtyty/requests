function makeRequest(method) {
    let xhr = new XMLHttpRequest();
    let HTMLElement = document.querySelector('.' + method.toLowerCase());
    xhr.open(method, 'http://cors-test.appspot.com/test', true);

    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200 && xhr.readyState === 4 && JSON.parse(xhr.response).status === 'ok') {
            HTMLElement.textContent = 'OK';
            HTMLElement.style.fontWeight = '900';
            HTMLElement.style.color = 'green';
        } else {
            HTMLElement.textContent = 'Failed';
            HTMLElement.style.fontWeight = '900';
            HTMLElement.style.color = 'red';
        }
    }
}


document.body.insertAdjacentHTML('beforeend', '<p>GET request: <span class="get">pending</span></p>\
<p>POST request: <span class="post">pending</span></p>\
<p>WEIRD request: <span class="weird">pending</span></p>')


let requests = ['GET', 'POST', 'WEIRD'];
requests.forEach(el => makeRequest(el));