import M from 'materialize-css/dist/js/materialize.min.js'
export default {
  install (Vue, options) {
    Vue.prototype.$message = function (html) {
      M.toast({ html })
    }

    Vue.prototype.$error = function (html) {
      M.toast({ html: `[error] ${html}` })
    }
  }
}
