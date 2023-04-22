1. line 9 prints: 'values added:  20'. This is because the parameters of the function are 10, 10, true. Thus add == true, and result is declared as 0 then changed to be the sum of num1 == 10, and num2 == 10. Thus console.log prints the above.

2. line 13 prints: 'final result:  20', because var result has function scope thus the value still can be accessed andh as not changed from the previous question.

3. line 9 prints: 'values added:  20', because let result is in the scope of the block of the if statement. Thus the console.log prints correctly.

4. code will return an error because result is not defined, it is out of scope since the variable is 'let'.

5. code will return an error because the code attempts to reassign a const value which is not allowed.

6. code will return an error because of the above, and even if we did not try to reassign it, it is still out of scope.