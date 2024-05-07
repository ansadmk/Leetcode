/*


You are given the head of a linked list.

Remove every nod

e which has a node with a greater value anywhere to the right side of it.

Return the head of the modified linked list.

 

Example 1:

Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

Example 2:

Input: head = [1,1,1,1]
Output: [1,1,1,1]
Explanation: Every node has value 1, so no nodes are removed.

 

Constraints:

    The number of the nodes in the given list is in the range [1, 105].
    1 <= Node.val <= 105


*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNodes(head) {
    const values = [];

    let currentNode = head;
    while (currentNode) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }

    const stack = [];

    for (let value of values) {
        while (stack.length > 0 && stack[stack.length - 1] < value) {
            stack.pop();
        }
        stack.push(value);
    }

    const dummyHead = new ListNode();
    let current = dummyHead;

    for (let value of stack) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummyHead.next;
}


