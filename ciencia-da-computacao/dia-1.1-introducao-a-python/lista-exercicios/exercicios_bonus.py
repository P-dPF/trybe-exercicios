# BÔNUS
# EXERCÍCIO 1

def get_lowest_number(numbers_list):
    return min(numbers_list)


# ----------- // -----------
# EXERCÍCIO 2

def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')


# ----------- // -----------
# EXERCÍCIO 3


def sum_predecessors(n):
    sums = 0
    for num in range(1, n + 1):
        sums += num
    return sums


# ----------- // -----------
# EXERCÍCIO 4
def calculate_fuel_price(fuel_type, fuel_qty):
    fuel_price_table = {
        'A': {
            'price_min_disc': fuel_qty * 1.9 * 0.97,
            'price_max_disc': fuel_qty * 1.9 * 0.95,
        },
        'G': {
            'price_min_disc': fuel_qty * 2.5 * 0.96,
            'price_max_disc': fuel_qty * 2.5 * 0.94,
        }
    }

    if fuel_qty <= 20:
        return fuel_price_table[fuel_type]['price_min_disc']
    else:
        return fuel_price_table[fuel_type]['price_max_disc']


print(calculate_fuel_price('G', 50))
