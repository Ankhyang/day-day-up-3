// 防抖指令
const debounce = {
    name: 'debounce',
    inserted: function(el, binding) {
        let timer = null;
        el.addEventListener('click', () => {
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                binding.value()
            }, 1000)
        })
    }
}

export default debounce