x = int(input())
a = []
y = ""

if (x >= 1 and x <= 100):
	for i in range(1, x + 1):
		a.append(input())

	for i in range(0, len(a)):
		if (int(a[i]) % 2 == 0):
			y = y + str(a[i]) + " "
	print(a)
	print(y)

