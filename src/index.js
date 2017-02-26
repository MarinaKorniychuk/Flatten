module.exports = function flatten(array) {
    if (!Array.isArray(array))
        return [];

    function isNested(arr) {
        return !arr.every(a => !Array.isArray(a))
    }

    while (isNested(array))
        array = [].concat.apply([], array);
    return array;
}
