# EXERCÍCIO 1


def get_highest_number(num1, num2):
    return max([num1, num2])


# ----------- // -----------
# EXERCÍCIO 2


def calculate_average(numbers_list):
    return sum(numbers_list) / len(numbers_list)


# ----------- // -----------
# EXERCÍCIO 3


def draw_square(n):
    row_counter = 1
    while row_counter <= n:
        print(n * '*')
        row_counter += 1


# ----------- // -----------
# EXERCÍCIO 4


def get_biggest_name(names_list):
    names_lenghts = [len(name) for name in names_list]
    biggest_length_index = names_lenghts.index(max(names_lenghts))
    return names_list[biggest_length_index]


# ----------- // -----------
# EXERCÍCIO 5

def calculate_paint_qty_and_cost(area_to_paint):
    PAINT_COVERAGE_BY_LITER = 3
    PAINT_CAN_VOLUME_LITERS = 18
    PAINT_COVERAGE_BY_CAN = PAINT_CAN_VOLUME_LITERS * PAINT_COVERAGE_BY_LITER
    PAINT_CAN_PRICE = 80

    needed_paint_cans = PAINT_COVERAGE_BY_CAN // area_to_paint
    total_price = PAINT_CAN_PRICE * needed_paint_cans
    return total_price


# ----------- // -----------
# EXERCÍCIO 6


def check_triangle(sideA, sideB, sideC):
    sides_sizes_validations = [
        sideA > sideB + sideC,
        sideB > sideA + sideC,
        sideC > sideA + sideB
    ]
    if any(sides_sizes_validations):
        return "não é triangulo"
    elif sideA == sideB and sideB == sideC:
        return "triângulo equilátero"
    elif sideA == sideB or sideA == sideC or sideB == sideC:
        return "triângulo isósceles"
    else:
        return "triângulo escaleno"
