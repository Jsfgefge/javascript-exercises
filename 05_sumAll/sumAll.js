const sumAll = function (n1, n2) {
    if (typeof n1 != "number" || typeof n2 != "number" || n1<0||n2<0) {
        return "ERROR";
    } else {
        let max = Math.max(n1, n2);
        let min = Math.min(n1, n2);
        let total = 0;

        for (let i = min - 1; i < max + 1; i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
