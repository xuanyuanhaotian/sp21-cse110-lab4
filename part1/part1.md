# part1a 
**1. values added:  20**\
**2. find result:  20**\
**3. values added:  20**\
**4. returns error, because we change the 'var' into let from question "1 and 2" code. And 'let' can only be accessed within the block it is defined in. THis is differnet from 'var'. And in this code, result is in the if statement, and when we call it out of the if statement, it is not defined in. So, we can't use it.**\
**5 and 6. returns error. Because const prevents it from being reassigned after it is assigned for the first time, and in the line 7 we have the code "result = num1+ num2;" which want to change its variable, this is not allowed.**
# part1b
**1. 3. Because in this program, we have the loop which is from line 6 to line 10 and it will stop execution until i become the price's length. And we put the length of the 'price' is 3. And after the whole loop, we can get the i which is still in the function, so i is accessable and will not have error.**\
**2. 150. The final time which we have execution of the discountedPrice is when i =2. And at this time, we can get discountedPrice = prices[2]*(1-discount)= 300*(1-0.5)=150. And we use the var type of the discountedPrice in this function, so it can still be used if it is accessable and can still in this function. So, we can get 150 in the line 13.**\
**3. 150. The final time which we have execution of the discountedPrice is when i =2. And at this time, we can get discountedPrice = prices[2]*(1-discount)= 300*(1-0.5)=150. And then we get finalPrice =Math.round(150*100) / 100. And we can still get 150. And we use the var type of the finalPrice in this function, so it can still be used if it is accessable and can still in this function. So, we can get 150 in the line 14.**\
**4. It will not print anything and it will return a list [50, 100. 150]. Because the type of the discounted is a list and we have a for loop here, it will run 3 times and each time store one variable. And we can take the number which it give us ([100,200,300],0.5). And we use the code in line 7 and 8 to calculate it, and each time we get 50 100 150 of the finalPrice. Then we push this variable into the discounted and get the list of [50,100,150].**\
