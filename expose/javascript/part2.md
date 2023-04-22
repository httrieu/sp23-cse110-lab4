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

12. Ignore the ' '
    - A. 'student.name'
    - B. 'student["Grad Year"]'
    - C. 'student.greeting();'
    - D. 'student["Favorite Teacher"].name'
    - E. 'student.courseLoad[0]'