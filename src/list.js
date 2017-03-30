
import Node from './myNode'

export default class List {
  constructor() {
    this.head = null;
    this.tail = null
    this.size = 0;
  }


  getHeadNode() {
    return this.head.data
  }

  getTailNode() {
    return this.tail.data
  }

  contains(stuff) {
    var currentNode = this.head;
    if(!currentNode) {
      return false
    }else{
      while(currentNode.next!== null) {
          currentNode = currentNode.next
          if(currentNode.data === stuff) {
            return true
          }else{
            return false
          }
      }
    }
  }

  insert(data) {
    const node = new Node(data)
    var currentNode = this.head
    if(!currentNode){
      this.head = node
      this.size++
    }else{
      while(currentNode.next){
        currentNode = currentNode.next
      }
      currentNode.next = node;
      this.tail = node;
      this.size++
    }
  }


  insertFirst(stuff) {
    const node = new Node(stuff)
    if(!this.next){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
      this.size++
    }
  }

  insertAfter(alreadyInList, addThis) {
    const node = new Node(addThis)
    var currentNode = this.head;
      while(currentNode.next) {
          currentNode = currentNode.next
          if(currentNode.data == alreadyInList) {
            console.log('CURRENT', currentNode);
            console.log('CURRENTNEXT', currentNode.next);
            currentNode.next = node
            node.next == currentNode.next
          }
     }return this
  }

  remove() {

  }

  removeFirst() {

  }

  isEmpty() {

  }

  size() {

  }

  clear() {

  }

}
