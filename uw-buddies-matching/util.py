

def get_score_percent(score, max):
    return (score / max) * 100

# https://stackoverflow.com/questions/13082698/rounding-down-integers-to-nearest-multiple


def round_down(num, divisor):
    return num - (num % divisor)


def get_lowest_10_float(score, max):
    return round_down(get_score_percent(score, max), 10) / 100
