'use strict';
const BinaryTree = require('../classes/binary-tree');
const Node = require('../classes/node');
const binarySearchTree=require("../classes/binary-tree-search")
let tree = null;

describe("Binary Tree", () => {
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new BinaryTree(one);
    });

    test('constructor creating property and instance of binary tree ', () => {
        const newTree = new binarySearchTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });
    test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
        let Tree = null
        let one = new Node(3);
        Tree= new binarySearchTree(one)
        Tree.Add(4)
        Tree.Add(2)

        expect(Tree.root.left.value).toBe(2);
        expect(Tree.root.right.value).toBe(4);
    });
    test('preOrder for  binary tree', () => {
        let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    test('inOrder for  binary tree ', () => {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    test('postOrder for  binary tree ', () => {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });
    test('Returns true false for the contains method, given an existing or non-existing node value ', () => {
        let Tree = null
        let one = new Node(3);
        Tree= new binarySearchTree(one)
        Tree.Add(4)
        Tree.Add(2)
        expect(Tree.Contains(4)).toBeTruthy();
    });
})