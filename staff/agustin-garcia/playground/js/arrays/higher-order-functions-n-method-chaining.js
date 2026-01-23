console.clear()

const list = `laptop apple  600€
sweater nike 60€
jersey baseball 100€`
console.log(list)

const lines = list.split('\n')
console.log(lines)

const cart = lines.map(line => {
    const parts = line.split(' ')

    const description = parts[0]
    const brand = parts[1]
    const price = Number(parts[2].slice(0, -1))

    return { description, brand, price }
})
console.log(cart)

const total = cart.reduce((accum, product) => {
    return accum + product.price
}, 0)
console.log(total)

const totalAgain = list.split('\n')
    .map(line => {
        const parts = line.split(' ')

        const description = parts[0]
        const brand = parts[1]
        const price = Number(parts[2].slice(0, -1))

        return { description, brand, price }
    })
    .reduce((accum, product) => {
        return accum + product.price
    }, 0)
console.log(totalAgain)