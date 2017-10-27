import sys, math

def printOut(a,b):
    print(math.fabs(float(a)-float(b))>0.15)

printOut(sys.argv[1],sys.argv[2])