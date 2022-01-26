num = 122
holder = []
while num > 0:
    if num == 1:
        holder.append(str(num))
        num = 0
    else:
        holder.append(str(num % 2))
        num = int(num / 2)
holder.reverse()
print(''.join(holder))

def bin2dec(number):
    lstNum = []
    index = 0
    number = str(number)
    for x in number:
        lstNum.append(x)


