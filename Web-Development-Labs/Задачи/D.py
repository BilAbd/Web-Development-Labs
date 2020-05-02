x = int(input())
k = 0
n = 1

for i in range(1, x + 1, n):
	if (x % i == 0):
		n += i
		k += 1

print(k)
		