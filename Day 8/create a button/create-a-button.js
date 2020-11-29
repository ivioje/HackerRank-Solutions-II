let btn = document.createElement('button');
btn.id = 'btn';
btn.innerHTML = 0;
document.body.appendChild(btn);

btn.onclick = function () {
  btn.innerHTML++;
};
