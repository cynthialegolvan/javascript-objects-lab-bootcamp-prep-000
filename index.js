var recipes = {
  flour: "2 cups"
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value
  return object
}
function deleteFromObjectByKey(object, key) {
  var copy = {flour: "2 cups"}
  
}