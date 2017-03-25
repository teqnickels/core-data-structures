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
      mySet.add('foo')


      expect(mySet.contains('foo')).to.be.true
      expect(mySet.contains('woo')).to.be.false

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

  context('union', () => {
    it('joins one set with another set', () => {
      var boop = ['foop', 'moop', 'doop']
      const mySet = new Set()
      mySet.add('foo')
      mySet.add('boo')
      mySet.add('moo')

      expect(() => mySet.union(boop).to.equal([ 'foop', 'moop', 'doop', 'foo', 'boo', 'moo' ]))
    })
  })

  context('intersect', () => {
    it('finds where two sets intersect and adds those elements to a new set', () =>{
      var foo = new Set()
      foo.add('moo')
      foo.add('doo')
      foo.add('poo')
      foo.add('doo')

      var loo = new Set()
      loo.add('roo')
      loo.add('doo')
      loo.add('too')
      loo.add('poo')

      expect(() => foo.intersect(loo).to.equal(['doo', 'poo']))
    })
  })

  context('difference', () => {
    it('finds where two sets differ and adds those unique elements to a new set', () => {
      var foo = new Set()
      foo.add('moo')
      foo.add('doo')
      foo.add('poo')
      foo.add('boo')

      var loo = new Set()
      loo.add('moo')
      loo.add('doo')
      loo.add('too')
      loo.add('poo')

      expect(() => foo.difference(loo).to.eql(['too', 'boo']))
    })
  })

  context('isSubset', () => {
    it('returns true if the set is a subset of otherSet or false if not', () => {
      var smallSet = new Set()
      smallSet.add(3)
      smallSet.add(4)
      smallSet.add(5)


      var largeSet = new Set()
      largeSet.add(1)
      largeSet.add(2)
      largeSet.add(3)
      largeSet.add(4)
      largeSet.add(5)
      largeSet.add(6)

      expect(smallSet.isSubset(largeSet)).to.be.false
      expect(largeSet.isSubset(smallSet)).to.be.true

    })
  })


  context('clone', () => {
    it('returns a copy of set', () => {
      var foo = new Set()
      foo.add(3)
      foo.add(4)
      foo.add(5)
      expect(() => foo.clone().to.equal([3, 4, 5]))
    })
  })



})
