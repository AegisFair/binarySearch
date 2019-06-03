describe("binarySearch", function(){
    function testBinSearch(length){
        var massNumber = new Array(0),
            randomNumber = Math.floor(Math.random()*10);
        // Создать массив-сортированный
        for (let i = 0; i < length; i++) {
            massNumber.push(randomNumber);
            randomNumber++;
        }
        // Чтобы полноценно протестировать поиск, возьмем два целевых числа (их индекс) в искомом массиве
            // в двух областях: левой и правой 
        // Находим ИНДЕКС начала, середины, конца массива
            var first=0,
                middle=Math.floor((length-1)/2),
                last=length-1;
        // Сгенерируем случайное число в диапазоне
            // от 0 <= Random < middle
            var indexLeftNumber = Math.floor(Math.random()*middle);
            // от middle < Random <= last
            var indexRightNumber = Math.floor(Math.random()*(last-middle))+(middle+1);

            it("Бинарный поиск числа (левая область) = "+massNumber[indexLeftNumber]+" в массиве = "+massNumber+". В результате его индекс = "+indexLeftNumber,
            function(){
                assert.equal(binarySearch(massNumber[indexLeftNumber],massNumber),indexLeftNumber);
            });
            it("Бинарный поиск числа (правая область) = "+massNumber[indexRightNumber]+" в массиве = "+massNumber+". В результате его индекс = "+indexRightNumber,
            function(){
                assert.equal(binarySearch(massNumber[indexRightNumber],massNumber),indexRightNumber);
            });
    }
    testBinSearch(10);
})