x = int(input())

while x != 1:
	if (x % 2 == 0):
		x = x / 2
	else:
		break

if(x == 1):
	print("YES")
else:
	print("NO")


