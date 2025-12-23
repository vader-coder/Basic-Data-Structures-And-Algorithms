class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
    
    def print(self):
        print(f"Node key = {self.key}, value = {self.value}")

def binary_search(array, key):
    return binary_search_helper(array, key, 0, len(array)-1)

def binary_search_helper(array, key, left_index, right_index):
    if left_index == right_index:
        if array[left_index].key == key:
            return array[left_index]
        else:
            return Node(None, None)
    elif (left_index + 1) == right_index:
        if array[left_index].key == key:
            return array[left_index]
        elif array[right_index].key == key:
            return array[right_index]
        else:
            return Node(None, None)
    else:
        middle_index = left_index + ((right_index-left_index) // 2)
        if array[middle_index].key == key:
            return array[middle_index]
        elif array[middle_index].key > key:
            return binary_search_helper(array, key, left_index, middle_index)
        else: # array[middle_index].key < key
            return binary_search_helper(array, key, middle_index, right_index)

binary_search([Node(0, 'a')], 0).print()
binary_search([Node(0, 'a'), Node(1, 'b')], 1).print()
binary_search([Node(0, 'a'), Node(1, 'b'), Node(2, 'c')], 1).print()

binary_search([Node(0, 'a'), Node(1, 'b'), Node(2, 'c'), Node(3, 'd'), Node(4, 'e'), Node(5, 'f')], 3).print()
