# part1a 
**1. values added:  20**\
**2. find result:  20**\
**3. values added:  20**\
**4. It will cause error. Because we change the 'var' into let from question "1 and 2" code. And 'let' can only be accessed within the block it is defined in. THis is differnet from 'var'. And in this code, result is in the if statement, and when we call it out of the if statement, it is not defined in. So, we can't use it.**\
**5 and 6. It will cause error.. Because const prevents it from being reassigned after it is assigned for the first time, and in the line 7 we have the code "result = num1+ num2;" which want to change its variable, this is not allowed.**
# part1b
**1. 3. Because in this program, we have the loop which is from line 6 to line 10 and it will stop execution until i become the price's length. And we put the length of the 'price' is 3. And after the whole loop, we can get the i which is still in the function, so i is accessable and will not have error.**\
**2. 150. The final time which we have execution of the discountedPrice is when i =2. And at this time, we can get discountedPrice = prices[2]*(1-discount)= 300*(1-0.5)=150. And we use the var type of the discountedPrice in this function, so it can still be used if it is accessable and can still in this function. So, we can get 150 in the line 13.**\
**3. 150. The final time which we have execution of the discountedPrice is when i =2. And at this time, we can get discountedPrice = prices[2]*(1-discount)= 300*(1-0.5)=150. And then we get finalPrice =Math.round(150*100) / 100. And we can still get 150. And we use the var type of the finalPrice in this function, so it can still be used if it is accessable and can still in this function. So, we can get 150 in the line 14.**\
**4. It will not print anything and it will return a list [50, 100. 150]. Because the type of the discounted is a list and we have a for loop here, it will run 3 times and each time store one variable. And we can take the number which it give us ([100,200,300],0.5). And we use the code in line 7 and 8 to calculate it, and each time we get 50 100 150 of the finalPrice. Then we push this variable into the discounted and get the list of [50,100,150].**\
**5. It will cause error. Because we change let instead of var of the whole variables. And we define i in the for loop, it can't be used out of it.**\
**6. It will cause error. Because we change let instead of var of the whole variables. And we define discountPrice in the for loop, it can't be used out of it.**\
**7. 150. Like we explain before, let can only be accessed within the block it is defined in. And the finalPrice is defined in the function discountPrices, and when we call finalPrices in the line 14. It still in this function. So we can get the same answer with the question 3.**\
**8.It will not print anything and it will return a list [50, 100. 150] like qustion 4. Although we change the var into let, the list discounted is still be accessed because it is in the big funtion when it is defined in.**\
**9. It will cause error. Because we define i in the loop with let. Andit can't be used out of the for loop. So, it will not be accessed in the line 11.**\
**10. 3. Because we declare lenght of prices' length as a constant at the beginning of the function. And the value of the prioces' length is 3, and it will not be changed, so it will be print 3 at line 12.**\
**11.It will not print anything and it will return a list [50, 100. 150] like qustion 4 and 8. Although we change the var or let into const, the list discounted still can work as constant. It is in a new scope of the for loop. So, the function can still wrok and return the list.**\
**12.Given the above Object, write the notation for:  (These should be in your part1.md)**
- A. student.name
- B. student["Grad year"]
- C. student.greeting()
- D. student["Favorite Teacher"].name
- E. student.courseLoad[0]
**For each of the following questions, note down the output as well as a brief explanation why that output was given  (These should be in your part1.md)**
**13. Arithmetic**
- A. 32 We get the first 3 with string and when we mapping 2 with string, we will get 32. 
- B. 1  We get the first 3 with int, and when we treat -2 with 3, we will get 3-2=1.
- C. 3  We get the first 3 with int, and null with be treated as 0, we will get 3+0=3
- D. 3null  We get the both 3 and null with string, and we can add them together to get 3null.
- E. 4  We get true which can be treated of 1, and we will get 1+3=4.
- F. 0  We can treat both of them as 0, and we will get 0+0=0.
- G. 3undefined  We can treat both of them as string, and we can get two string combain as 3undefined.
- H.NaN We get the first 3 as int, and undefined is mapped to NaN, and we can get two string combain as NaN.\
**14. Comparison**
- A.
- B.
- C.
- D.
- E.
- F.\
**15. **
