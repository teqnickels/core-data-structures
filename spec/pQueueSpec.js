import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PQueue from '../src/PQueue'

chai.use(chaiChange)
describe('PQueue', () => {
  'use strict'

  it('exists', () => {
    expect(PQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds a key value pair to an object.', () => {
      const myPQueue = new PQueue()
      myPQueue.enqueue(2, 'foo')
      expect(myPQueue.length).to.equal(1);
    })
  })

})

context('dequeue()', () => {
  it('removes a key-value pair from an object', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue(1,'foo')
    myPQueue.enqueue(3,'moo')
    myPQueue.dequeue()
    expect(myPQueue.length).to.equal(1);
  })
})

context('back()', () => {
  it('returns the last item in the pqueue', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue(5,'boo')
    myPQueue.enqueue(1,'foo')
    myPQueue.enqueue(3,'moo')

    expect(myPQueue.back()).to.eql( {priority: 5, value:'boo'} );
  })
})

context('isEmpty', () => {
  it('checks if pqueue is empty', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue(5,'boo')
    myPQueue.enqueue(1,'foo')
    myPQueue.enqueue(3,'moo')

    expect(myPQueue.isEmpty()).to.eql( false );
  })
})

context('length', () => {
  it('returns the length of the array of pqueue', () => {
    const myPQueue = new PQueue()
    myPQueue.enqueue(5,'boo')
    myPQueue.enqueue(1,'foo')
    myPQueue.enqueue(3,'moo')

    console.log(myPQueue.length);
    expect(myPQueue.length).to.equal(3);
  })
})
