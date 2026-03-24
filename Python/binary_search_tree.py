# https://www.w3schools.com/python/python_dsa_binarysearchtrees.asp

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inOrderTraversal(node):
    if node == None:
        return
    inOrderTraversal(node.left)
    print(node.data, end=", ")
    inOrderTraversal(node.right)

def search(node, target):
    if node == None:
        return None
    elif node.data == target:
        return node
    elif target < node.data:
        return search(node.left, target)
    else:
        return search(node.right, target)

def insert(node, data):
    if node == None:
        return Node(data)
    else: 
        if data < node.data:
            node.left = insert(node.left, data)
        elif data > node.data:
            node.right = instert(node.right, data)
    return node

def minValueNode(node):
    current = node
    while current.left != None:
        current = current.left
    return current

def delete(node, data):
    if not node:
        return None
    
    if data < node.data:
        node.left = delete(node.left, data)
    elif data > node.data:
        node.right = delete(node.right, data)
    else:
        if not node.left:
            temp = node.right
            node = None
            return temp
        elif not node.right:
            temp = node.left
            node = None
            return temp

        node.data = minValueNode(node.right).data
        node.right = delete(node.right, node.data)
    return node
    