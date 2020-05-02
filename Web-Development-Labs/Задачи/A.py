a = int(input())
b = int(input())
c = ""

for x in range(a,b+1):
	if (x % 2 == 0):
		c = c + str(str(x) + " ")

print(c)