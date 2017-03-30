import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import List from '../src/list'
import Node from '../src/myNode'


chai.use(chaiChange)

describe('list', () => {
  'use strict'

  it('exists', () => {
    expect(List).to.be.a('function')
  })

  context('insert()', () => {
    it('adds element to linked list',() => {
      const foolisty = new List()
      foolisty.insert('foo')
      expect(foolisty.size).to.equal( 1 )
        })
      })

  context('getHeadNode', () => {
    it('returns the head node of a linked list', () => {
      const listy = new List()
      listy.insert('foo')
      listy.insert('moo')
      expect(listy.getHeadNode()).to.equal('foo')
    })
  })

  context('getTailNode()', () => {
    it('returns the tail node of a linked list', () => {
      const listy = new List()
      listy.insert('foo')
      listy.insert('boo')
      listy.insert('moo')
      expect(listy.getTailNode()).to.equal('moo')
    })
  })

  context('contains()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const listy = new List()
      listy.insert('foo')
      listy.insert('bananas')
      listy.insert('moo')

      expect(listy.contains('bananas')).to.be.true
      expect(listy.contains('boo')).to.be.false

    })
  })

  context('insert-first()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const listy = new List()
      listy.insert('foo')
      listy.insert('bar')
      listy.insertFirst('DEBRENA')
      expect(listy.head.data).to.equal('DEBRENA')
    })
  })

  context('insert-first()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const listy = new List()
      listy.insert('foo')
      listy.insert('bar')
      listy.insertFirst('DEBRENA')
      expect(listy.head.data).to.equal('DEBRENA')
    })
  })

  context('insert-after()', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {
      const listy = new List()
      listy.insert('oranges')
      listy.insert('apples')
      listy.insert('grapes')

      console.log('FRUITS',listy.insertAfter('apples', 'bananas', 'temp'));
      // expect(listy.head.data).to.equal('DEBRENA')
    })
  })


})
