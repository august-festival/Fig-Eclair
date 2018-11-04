/**
 * 전역 로그
 * @param option 옵션 'to' -> toString
 * @param list
 * @constructor
 */
window.JSLog = function (option, ...list) {
  if (option === 'to') {
    list.forEach(obj => {
      let log = ''
      let objs = []
      let isFirst = false
      for (let prop in obj) {
        if (isFirst) {
          log += 'JSLog: '
        }
        isFirst = true
        log += `${prop} : ${obj[prop]} \n`
        if (typeof obj[prop] === 'object') {
          objs.push({
            name: prop,
            o: obj[prop]
          })
        }
      }
      window.JSLog(log)
      objs.forEach(function (v) {
        window.JSLog(`-> ${v.name}`)
        window.JSLog('to', v.o)
      })
    })
  } else {
    let args = Array.prototype.slice.call(arguments)
    if (window.console) console.log(`JSLog: ${args.join(' | ')}`)
  }
}
