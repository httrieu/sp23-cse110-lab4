1. The bug was that both inputs *num1* and *num2* are strings. So when the '+'operator is used it concatenates both of them together. Thus instead of say 3 + 2 = 5, it outputs 3 + 2 = 32.

2. My fix:

```
function calculateSum(num1, num2) {
    let result = Number(num1) + Number(num2);
    return result;
}
```