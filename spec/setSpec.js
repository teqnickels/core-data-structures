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

  context('remove()', () => {
    it('removes an item from set if set contains any items when called', () => {
      const mySet = new Set()

      expect(() => mySet.add('moo')).to.alter(() => mySet.size(), { from:0, to:1 });
      expect(() => mySet.add('boo')).to.alter(() => mySet.size(), { from:1, to:2 });
      expect(() => mySet.add('foo')).to.alter(() => mySet.size(), { from:2, to:3 });
      expect(() => mySet.remove()).to.alter(() => mySet.size(), { from:3, to:2 });

    })
  })

  context('forEach', () => {
    it('takes a callback function and does something to each element in set', () => {
      const mySet = new Set()

      var doubleSum = function(num) {
        return num + num
      }

      expect(() => mySet.add('1')).to.alter(() => mySet.size(), { from:0, to:1 });
      expect(() => mySet.add('2')).to.alter(() => mySet.size(), { from:1, to:2 });
      expect(() => mySet.add('3')).to.alter(() => mySet.size(), { from:2, to:3 });
      expect(() => mySet.forEach(doubleSum(10)).to.equal([10, 12, 13]))

    })
  })

})
