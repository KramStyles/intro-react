# test.assert_equals(nb_year(1500, 5, 100, 5000), 15)
# test.assert_equals(nb_year(1500000, 2.5, 10000, 2000000), 10)
# test.assert_equals(nb_year(1500000, 0.25, 1000, 2000000), 94)

def growthPop(p0, percent, aug, p):
    index = 0
    number = 0
    percent = percent / 100
    while number < p:
        appr = p0 * percent
        number = int(p0 + appr + aug)
        p0 = number
        index += 1
    print(index)

growthPop(1500, 5, 100, 5000)
# growthPop(1000, 0.02, 50, 1200)