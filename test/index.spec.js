//引入库
import { expect } from 'chai'
import sparrow from '../lib/sparrow'

//写测试用例
let lib
describe('sparrow text',() =>{
  before(() =>{
    lib = new sparrow()
  })
  describe('test sparrow name', ()=>{
    it('should return sparrow', () => {
      expect(lib.name).to.be.equal('sparrow')
    })
  })
})
