var recipes = {
  flour: "2 cups"
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}