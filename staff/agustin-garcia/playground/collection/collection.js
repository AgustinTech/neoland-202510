class Collection {
    constructor() {
        this.count = 0
    }

    add(item) {
        this[this.count] = item
        this.count++
    }

    remove(item) {
        for (let i = 0; i < this.count; i++) {
            if (this[i] === item)
                delete this[i]

        }
    }

    removeFirst(item) {
        for (let i = 0; i < this.count; i++) {
            if (this[i] === item) {
                delete this[i]

                return
            }
        }
    }

    update(target, replacement) {
        for (let i = 0; i < this.count; i++) {
            if (this[i] === target) {
                this[i] = replacement
            }
        }
    }

    updateFirst(target, replacement) {
        for (let i = 0; i < this.count; i++) {
            if (this[i] === target) {
                this[i] = replacement

                return
            }
        }
    }

    push(item) {
        this[this.count] = item
        this.count++
        return this.count
    }

    pop() {
        const lastItem = this[this.count - 1]
        delete this[this.count - 1]
        this.count--
        return lastItem
    }

    includes(target) {
        for (let i = 0; i < this.count; i++) {
            if (this[i] === target) {
                return true
            }
        }
        return false
    }

    indexOf(target) {
        for (let i = 0; i < this.count; i++) {
            if (this[i] === target) return i
        }
        return 'No se encontró índice 🤷🏻‍♂️'
    }

    reverse() {
        const elements = []
        while (this.count > 0) {
            elements.push(this.pop())
        }
        for (let i = 0; i < elements.length; i++) {
            this.push(elements[i])
        }
    }

    forEach(callback) {
        for (let i = 0; i < this.count; i++) {
            const element = this[i]

            callback(element)
        }
    }

    map(callback) {
        const mapped = new Collection()

        for (let i = 0; i < this.count; i++) {
            const element = this[i]

            const mappedElement = callback(element)
            mapped[mapped.count] = mappedElement
            mapped.count++
        }

        return mapped
    }

    filter(callback) {
        const filtered = new Collection()

        for (let i = 0; i < this.count; i++) {
            const element = this[i]

            const matches = callback(element)

            if (matches) {
                filtered[filtered.count] = element
                filtered.count++
            }
        }
        return filtered
    }


    find(callback) {
        for (let i = 0; i < this.count; i++) {
            const element = this[i]

            const matches = callback(element, i, this)

            if (matches) {
                return element
            }
        }
    }

}
