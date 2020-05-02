import math
a = int(input())
b = int(input())
if (a > 0 and a < 1000 and a % 1 == 0 and b > 0 and b < 1000 and b % 1 == 0):
	c = math.sqrt(pow(a,2) + pow(b,2))
else:
	c = None

print(c)

