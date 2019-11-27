(function () {
  var agencyCode = getQueryString('agencyCode')
  var appId = getQueryString('appId')
  agencyCode && $setItem('agencyCode', agencyCode)
  appId && $setItem('appId', appId)
})()
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
/**
 * 存字段值
 * @param {String} key
 * @param {String|Object|Array|Boolean|...} value
 * @return [Undefined]
 */
function $setItem(key, value) {
  let jsonValue = JSON.stringify(value)
  window.sessionStorage.setItem(key, jsonValue)
}
