
import Node from './myNode'

export default class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  getHeadNode() {
    return this.head.data
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
      this.size++
      return node
    }
    while(currentNode.next){
      currentNode = currentNode.next
    }
    currentNode.next = node;
    this.size++
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
