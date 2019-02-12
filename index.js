var recipes = {
  flour: "2 cups"
}
function updateObjectWithKeyAndVaule(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}