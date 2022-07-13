
let word = capitals[Math.floor(Math.random()*capitals.length)];
console.log(word);

let answerArray = [];
for (let i=0; i<=word.length; i++){
    answerArray[i]="_";
    
}
        
let remainingLetters = word.length;
let attempt = 7;
     

while(remainingLetters > 0) {
    // Основной код
    // Показываем состояние игры
    alert(answerArray.join(" "));
    // Запрашиваем вариант ответа
    let guess = prompt ("Угадайте букву или нажмите Отмена для выхода из игры.");
    let guessLower = guess.toLowerCase();
    // Обновляем answerArray и remainingLetters для каждого
    // вхождения угаданной буквы

    if (guess === null){
        break;
    } else if (guess.length !== 1) {
        alert ("Пожалуйста, введите только одну букву.");
    } else { 
        let hit = false;
        for (let j = 0; j < word.length; j++) {
            let letterWasBeen = answerArray[j] === guessLower;
            if (letterWasBeen){
                alert("Вы уже вводили эту букву");
                break;
            } 
            if (word[j] === guessLower) {
                hit = true;
                answerArray[j] = guessLower;
                remainingLetters--; 
                
            } 
        } 

        if (!hit) {
            attempt--;
            alert("У Вас осталось "  + attempt + " попыток");  
        }         
    } 

    if (attempt <= 0) {
        alert ("Ваши попытки закончились");
        break;
    }
}
if (attempt > 0){
    alert(answerArray.join(" "));
    alert("Отлично! Было загадано слово " + word); 
}
