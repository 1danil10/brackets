module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let brackets = {};
    bracketsConfig.forEach((el) => {
        brackets[el[0]] = el[1];
    });

    for (let i = 0; i <= str.length; i++) {
        let char = str[i];
        let last = stack[stack.length - 1] || 0;

        if (brackets[char]) {
            if (last !== brackets[char]) {
                stack.push(char);
            } else stack.pop();
        } else if (brackets[stack.pop()] !== char) {
            return false;
        }
    }
    return stack.length === 0;
};
