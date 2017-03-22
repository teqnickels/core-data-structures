import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds stuff to set', () => {
      const mySet = new Set()

      expect(() => mySet.add('moo')).to.alter(() => mySet.size(), { from:0, to: 1 });
      expect(() => mySet.add('moo').to.equal("ERROR, moo already exists"));
      expect(() => mySet.add('foo')).to.alter(() => mySet.size(), { from: 1, to: 2 });
    })
  })

  context('isEmpty()', () => {
    it('checks if set is empty', () => {
      const mySet = new Set()

      mySet.add('boo')
      mySet.add('moo')
      mySet.add('woo')
       expect(mySet.isEmpty()).to.be.false;
    })
  })

  context('contains()', () => {
    it('checks if stuff matches content in set', () => {
      const mySet = new Set()
      mySet.add('boo')
      mySet.add('foo')
      mySet.add('moo')

      expect(mySet.contains('boo')).to.be.true;
      expect(mySet.contains('woo')).to.be.false;

    })
  })

})
