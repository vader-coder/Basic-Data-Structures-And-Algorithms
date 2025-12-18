
def merge_sort(array):
    if len(array) <= 1:
        return array
    elif len(array) == 2:
        if array[0] <= array[1]:
            return array
        else:
            return [array[1], array[0]]
    else:# len(array) >= 3
        middle_index = len(array) // 2
        left_array = merge_sort(array[:middle_index])
        right_array = merge_sort(array[middle_index:])
        return merge(left_array, right_array)

def merge(left_array, right_array):
    left_index = 0
    right_index = 0
    result_array = []
    while (left_index < len(left_array)) and (right_index < len(right_array)):
        left_value = left_array[left_index]
        right_value = right_array[right_index]
        if left_value <= right_value:
            result_array.append(left_value)
            left_index += 1
        else:
            result_array.append(right_value)
            right_index += 1

    while left_index < len(left_array):
        result_array.append(left_array[left_index])
        left_index += 1
    
    while right_index < len(right_array):
        result_array.append(right_array[right_index])
        right_index += 1

    return result_array

print(merge_sort([3, 5, 0, 2, 1])) # [0, 1, 2, 3, 5]

print(merge_sort([2, 5, 0, 2, 1])) # [0, 1, 2, 2, 5]

print(merge_sort([5, 3])) # [3, 5]

print(merge_sort([3])) # [3]