x = int(input())
a = 2

while a <= x:
	if (x % a == 0):
		print(a)
		break
	else:
		a += 1