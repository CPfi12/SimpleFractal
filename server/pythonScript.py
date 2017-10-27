import math
def are_similar(company_1, company_2):
    return math.fabs(company_1["fractal_index"] - company_2["fractal_index"]) < 0.15
