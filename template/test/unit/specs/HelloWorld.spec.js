import Vue from 'vue'
import Index from '@/page/Index'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      {{#if_eq runner "karma"}}.to.equal('Welcome to Your Vue.js App'){{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Hanu Vue Template'){{/if_eq}}
  })
})
