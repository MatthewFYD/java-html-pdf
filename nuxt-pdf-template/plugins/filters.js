import Vue from "vue"

export function trim(str) {
  return str.trim()
}

export function formatDate(date, format) {
  if(!date && date !== 0){
    return "";
  }
  if (typeof(date) === "number") {
    date = new Date(date)
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      let str = o[k] + ''
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length))
    }
  }
  return format
}

const filters = {
  trim,
  formatDate
}
export default filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
