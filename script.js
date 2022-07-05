//GASのAPIのURL（各自変更してください。）
const endpoint =
"https://script.google.com/macros/s/AKfycbxUjqbGyCZvobwzCQfYnD8NLOpOL4ZvWH3qnegKNBQTfZvl-gsdJQx90JlEPPGUwVZI/exec";

//id output の初期化
const output = document.getElementById('output');
const table = document.createElement('table');

function init() {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.style.border = 'solid';
    td.innerHTML = 'Question';
    tr.appendChild(td);
    td = document.createElement('td');
    td.style.border = 'solid';
    td.innerHTML = 'Answer';
    tr.appendChild(td);
    table.appendChild(tr);
    output.appendChild(table);
}

document.getElementById('reload').addEventListener('click', () => {
    //table.innerHTML = '';
    //init();
    //APIを使って非同期データを取得する
    fetch(endpoint)
    .then(response => response.json())
    /*成功した処理*/
    .then(data => {
        table.innerHTML = '';
        init();
        data.forEach(element => {
            tr = document.createElement('tr');
            td = document.createElement('td');
            td.style.border = 'solid';
            td.innerHTML = element.Question;
            tr.appendChild(td);
            td = document.createElement('td');
            td.style.border = 'solid';
            td.innerHTML = element.Answer;
            tr.appendChild(td);
            table.appendChild(tr);
        });

    });
});