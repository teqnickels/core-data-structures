
import Node from './myNode'

export default class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  getHeadNode() {
    const myNode = new Node(data)
    return this.head
  }

  getTailNode() {
    return this.tail
  }

  contains(stuff) {
    return this.element = stuff
  }


  insert(data) {
    const node = new Node(data)
    var currentNode = this.head
    if(!currentNode){
      this.head = node
      node.size = this.size + 1
      return node
    }
    while(currentNode.next){
      currentNode = currentNode.next
    }
    currentNode.next = node;
    node.size= this.size + 1
    return node
  }


  insertFirst() {

  }

  insertAfter() {

  }
  remove() {

  }

  removeFirst() {

  }

  isEmpty() {

  }

  size() {

  }

  clear(){

  }

}
