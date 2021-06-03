
function randomNumber() {
    let number = 50;
    let whoNumber;
    let c;
    let count = 10;
    // объявим все необходимые переменные

    function isRandomNumber() {
        whoNumber = prompt('Введи число от 1 до 100. Число попыток: ' + count);
        function isNum() {
            if (Number(whoNumber) === number) {
                return c = true;
            } else {
               if (whoNumber === null) {
                   alert('Игра окончена!');
                   return c = false;
               } else if (Number(whoNumber) < 50) {
                   alert('Загаданное число больше! Осталось попыток: ' + count);
                   count = count - 1;
                   console.log(count);
               } else if (Number(whoNumber) > 50) {
                   alert('Загаданное число меньше! Осталось попыток: ' + count);
                   count = count - 1;
                   console.log(count);
               } else {
                   alert('Введи число!');
               }
               if (count === 0) {
                alert('Истекло число попыток!');
                return c = false;
                };
            }
        };

        isNum();
        if (c === true) {
            alert('Ты угадал!');
            let conf = confirm('Сыграть еще?');
            if(conf == true) {
                isRandomNumber();
            } else {
                c = false;
            }
        } else if (c == false){
            alert('Пока!');
        } else {
            isRandomNumber();
        }
    } 
    isRandomNumber();
};
randomNumber();