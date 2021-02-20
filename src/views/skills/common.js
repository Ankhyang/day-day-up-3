function enhancedArray (arr) {
    return new Proxy(arr, {
        get(target, property, receiver) {
            const range = getRange(property);
            const indices = range ? range : getIndices(property);
            const values = indices.map(function(index) {
                const key = index < 0 ? String(target.length + index) : index;
                return Reflect.get(target, key, receiver)
            })
            return values.length === 1 ? values[0] : values
        }
    })
    function getRange(str) {
        var [start, end] = str.split(":").map(Number);
        if(typeof end === "undefined") return false;
        let range = [];
        for(let i = start; i < end; i++) {
            range = range.concat(i);
        }
        return range;
    }
    function getIndices(str) {
        return str.split(",").map(Number)
    }
}

let value = null;
const enhancedObject  = (target) => {
    function searchFor(property, target) {
        for(const key of Object.keys(target)) {
            if(typeof target[key] === 'object') {
                searchFor(property, target[key])
            }else if(typeof target[property] !== 'undefined') {
                value = target[property]
                break
            }
        }
        return value
    }
    return new Proxy(target, {
        get(target, property) {
            if(property in target) {
                return target[property]
            }else{
                return searchFor(property, target)
            }
        }
    })
}

export default {
    enhancedArray,
    enhancedObject
}