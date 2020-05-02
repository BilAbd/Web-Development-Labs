x = int(input())
i = 1
k = 1

while (i * 2 <= x):
	i = i * 2
	k+=1

if(x == i):
	print (k - 1)
else:
	print(k)
