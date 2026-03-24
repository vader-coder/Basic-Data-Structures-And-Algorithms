def quick_sort(array):
    if len(array) <= 1:
        return array
    pivot = array[0]
    lessThanPivot = []
    greaterThanPivot = []
    for i in range(1, len(array)):
        if array[i] <= pivot:
            lessThanPivot.append(array[i])
        else:
            greaterThanPivot.append(array[i])
    lessThanPivot = quick_sort(lessThanPivot)
    greaterThanPivot = quick_sort(greaterThanPivot)
    resultArray = []
    for i in range(len(lessThanPivot)):
        resultArray.append(lessThanPivot[i])
    resultArray.append(pivot)
    for i in range(len(greaterThanPivot)):
        resultArray.append(greaterThanPivot[i])
    return resultArray

test_array = [5, 4, 3, 2, 1]
sorted_array = quick_sort(test_array)
print(sorted_array)