const BTN_RESTART = 'btnRestart'
const ID_COUNTER = 'counter'
const COUNT_VALUE = 100
const INTERVAL_PERIOD = 10

class CounterComponent {

  constructor() {
    this.init()
  }

  preparCounterProxy(){
    const handler = {
      set: (currentContext, propertyKey, newValue) => {
        console.log({currentContext, propertyKey, newValue})
        currentContext[propertyKey] = newValue
        return true
      }

    }
    const counter = new Proxy ({
      value: COUNT_VALUE,
      makeStop: () => {}
    },handler)
   
    return counter
  }

  updateText(params) {
    const identifier = '$$contador'
  }

  init(){
    console.log('Started')
    const elementCounter = document.getElementById(ID_COUNTER)

    const counter = this.preparCounterProxy()

    // counter.value = 100
    // counter.value = 90
    // counter.value = 80

    const args = {
      elementCounter,
      counter
    }

  }
}