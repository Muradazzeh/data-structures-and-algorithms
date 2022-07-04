'use strict';
const BinaryTree = require('../classes/binary-tree');
const Node = require('../classes/node');
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
    test('we will get max value from the binery tree using findMax ', () => {
      let expected= 9
      expect(tree.findMax()).toEqual(expected);
    });
    test('we will get max value from the binery tree using findMax2 ', () => {
      let expected= 9
      expect(tree.findMax2()).toEqual(expected);
    });
})