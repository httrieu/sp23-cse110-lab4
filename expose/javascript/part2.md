1. At line 12, it will print: '3'. This is because it is simply printing out the value of 'i' which is declared as a var. Thus it can be accessed throughout the function, and since the length of 'prices' is 3, i = 3 at the end of the loop.

2. At line 13, it will print: '150' because it is printing out the value of 'discountedPrice'. discountPrice is also declared as a var so it can be accessed anywhere in the function, and the last value it is set to in the loop is prices[2] * (1 - .5), which is equal to 150. Thus it prints out 150.

3. At line 14, it will also print: '150'. This is because finalPrice is declared as a var once again (giving it function scope). At the end of the loop it is lastly updated to be discountedPrice (which is 150) then multiplied by 100 and rounded, then divided by 100. So nothing happens to the value and it is printed out as 150.

4. this function will return an array of the discounted prices (that are rounded). The array should contain the values: [50, 100, 150] since at each iteration of the loop, the discounted final price is pushed into the array.

5. this function will return an error at line 12. This is because 'i' is out of scope since it is declared as 'let'

6. this function will return an error at line 13. This is because 'discountedPrice' is out of scope since it was declared as 'let'.

7. line 14 will print: '150' because although finalPrice is now a 'let' variable, it is in the scope of the block (which includes the entire function). Thus it has not changed from question 3.

8. discounted will again return an array with values: [50, 100, 150]. Nothing has really changed about the functionality of the function so look at question 4.

9. line 11 will again return an error because 'i' is still out of scope since it was declared as a 'let' variable. It only has value inside the loop.

10. At line 12 it will print: '3'. This is because length has been declared as a const variable and it has block scope (but in this case it's block is the function), thus the value has been set to the length of the prices array which is 3.

11. this function will return an array that contains: [50, 100, 150]. This is because although discountPrice is being updated and it's a const, because it is being redeclared every iteration no error occurs and it can be pushed to discounted as normally.

12. - A. 'student.name'
    - B. 'student["Grad Year"]'
    - C. 'student.greeting();'
    - D. 'student["Favorite Teacher"].name'
    - E. 'student.courseLoad[0]'

- - -

13. 
    - A. '32' - this is because intergers map to their exact string representation
    - B. 1 - there is no equivalent string operator for -, so it gets converted to integer subtraction
    - C. 3 - this is because null is converted to 0, so 3 + 0 = 3
    - D. '3null' - this is because 3 is a string and it is getting concatenated with the exact string representation of null
    - E. 4 = this is because true gets converted to 1 so 3 + 1 = 4
    - F. 0 - this is because false gets converted to 0, and null is 0, so 0 + 0 = 0
    - G. '3undefined' - this is because '3' is a string so then undefined is converted to a string
    - H. NaN - undefined is not a valid number so it returns NaN

- - -

14. 
    - A. true - the '2' becomes an int so 2 is greater than 1
    - B. false - these are strings, so since '2' as a character comes after '1', '2' is greater
    - C. true - because '2' becomes an integer, so 2 == 2
    - D. false - because === checks equality without type conversion so int != string
    - E. false - because true == 1, so 1 != 2
    - F. true - because Boolean(2) will just make a boolean object that is true so true = true

- - -

15. == is a regular equality check but cannot differentiate between types since it converts them. === is a strict equality operator that checks for equality without type conversion

16. *look at js file*

17. modifyArray will return an array that contains: [2,4,6]. Once modifyArray is called, it initalizes a newArr = [] that is constant. Then it enters the loop that will loop through the length of the input array (in this case it will be 3 iterations). On line 4, inside the push function, a callback is used. The function 'doSomething' was the callback and it is given the argument 'array[i]', so on the first loop it will be given the value 1. Then doSomething will double it, and return. Thus newArr will be pushed the value 2 into its array. This will continue for all values in the input array with the result of 2,4,6.

18. *look at js file*

19. It will output: 1 4 3 2. 1 is outputted first because it's called first, then 4 because its called second (no delay). Then 3 because the delay is 0 (next call cycle), then a second later 2 is printed.