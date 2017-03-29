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
      const firstNode = new List()
      expect(firstNode.insert('Hello')).to.eql({ data: 'Hello', next: null, size: 1 } )
        })
      })

  context('getHeadNode', () => {
    it('returns the head node of a linked list', () => {
      const listy = new List()
      listy.insert('foo')
      listy.insert('boo')
      listy.insert('moo')
      expect(listy.getHeadNode()).to.equal('foo')
    })
  })

})
