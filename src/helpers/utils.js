/**
 * Filter an object
 * @param {Object} obj The object that should be filtered
 * @param {function} fun A function accepting two arguments, the value and the key. must returns a boolean. (val, key) => bool
 * @return {Object} Returns a new Object, containing the filtered entries
 */
function objFilter(obj, fun) {
  let filtered = {};
  for (const k in obj) {
    if (fun(obj[k], k)) filtered = { ...filtered, [k]: obj[k] };
  }
  return filtered;
}

/**
 * Map over an object
 * @param {Object} obj The object that should be filtered
 * @param {function} fun A function accepting two arguments, the value and the key. (val, key) => any
 * @return {Object} Returns a new Object, containing the maped over entries
 */
const objMap = (obj, fn) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v, k)]));

/**
 * Reduce an object
 * @param {Object} obj The object that should be reduced
 * @param {function} fun A function accepting three arguments, the accumulator, value and the key. must returns a new accumulator. (acc, val, key) => acc
 * @return {Object} Returns the accumulator
 */
const objReduce = (obj, fun, acc) =>
  Object.entries(obj).reduce((acc, [k, v]) => fun(acc, v, k), acc);

export { objFilter, objMap, objReduce };
