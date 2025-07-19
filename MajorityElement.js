var mostFrequentEven = function (nums) {

    const obj = {}
    let max = 0;
    let res = -1;

    for (i of nums) {
        if (i % 2 == 0) {
            obj[i] = (obj[i] || 0) + 1;
        }
        if (
            obj[i] > max ||
            (obj[i] === max && i < result)
        ) {
            max = obj[i];
            res = i;
        }


    }

    return Number(res)


};
console.log(mostFrequentEven([8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290, 3346]))