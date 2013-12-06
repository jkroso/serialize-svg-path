
var parse = require('parse-svg-path')
var assert = require('assert')
var cases = require('./cases')
var serialize = require('..')

describe('serialize', function(){
	Object.keys(cases).forEach(function(key){
		describe(key, function(){
			cases[key].forEach(function(path){
				it(path, function(){
					assert(serialize(parse(path)) == path)
				})
			})
		})
	})
})

describe('serialize-bezier', function(){
	var serialize = require('../bezier')
	var path = cases['curve-to'][0]
	it(path, function(){
		assert(serialize(parse(path)) == path)
	})
})
