pass = prompt('Владелец файла установил пароль на просмотр данного материала. Введите пароль.');
if (pass == 'ot_sevaka') alert('Пароль верный.');
else {
  alert('Пароль не верный, покиньте страницу.');
  top.location.href = "";
}