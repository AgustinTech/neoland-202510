const { assert } = console

// test

const names = new Collection()
names.add('Juan')
names.add('Jorge')
names.add('Agus')
names.add('Albert')
names.add('Sergio')
console.log(names)

const colors = new Collection()
colors.add('red')
colors.add('green')
colors.add('blue')
console.log(colors)

const nums = new Collection()
nums.add(3.141516)
nums.add(73)
nums.add(10101)
console.log(nums)

// const teamOrange = new Collection()
// teamOrange[0] = ('Juan')
// teamOrange[1] = ('Jorge')
// teamOrange[2] = ('Agus')
// teamOrange[3] = ('Albert')
// teamOrange[4] = ('Sergio')
// teamOrange.count = 5

// teamOrange.remove('Agus')

// assert(teamOrange.count === 4, 'teamOrange.count is 4')
// assert(teamOrange[0] === 'Juan', 'teamOrange[0] is Juan')
// assert(teamOrange[1] === 'Jorge', 'teamOrange[1] is Jorge')
// assert(teamOrange[2] === 'Albert', 'teamOrange[2] is Albert')
// assert(teamOrange[3] === 'Sergio', 'teamOrange[3] is Sergio')


// const teamWhite = new Collection()
// teamWhite[0] = ('Juan')
// teamWhite[1] = ('Jorge')
// teamWhite[2] = ('Agus')
// teamWhite[3] = ('Albert')
// teamWhite[4] = ('Sergio')
// teamWhite.count = 5

// teamWhite.removeFirst('Agus')

// assert(teamWhite.count === 4, 'teamWhite.count is 4')
// assert(teamWhite[0] === 'Juan', 'teamWhite[0] is Juan')
// assert(teamWhite[1] === 'Jorge', 'teamWhite[1] is Jorge')
// assert(teamWhite[2] === 'Albert', 'teamWhite[2] is Albert')
// assert(teamWhite[3] === 'Sergio', 'teamWhite[3] is Sergio')

const teamGreen = new Collection()
teamGreen[0] = ('Juan')
teamGreen[1] = ('Jorge')
teamGreen[2] = ('Agus')
teamGreen.count = 3

teamGreen.update('Agus', 'Albert')

assert(teamGreen.count === 3, 'teamGreen.count is 3')
assert(teamGreen[0] === 'Juan', 'teamGreen[0] is Juan')
assert(teamGreen[1] === 'Jorge', 'teamGreen[1] is Jorge')
assert(teamGreen[2] === 'Albert', 'teamGreen[2] is Albert')


const teamBlack = new Collection()
teamBlack[0] = ('Juan')
teamBlack[1] = ('Jorge')
teamBlack[2] = ('Agus')
teamBlack.count = 3

teamBlack.updateFirst('Agus', 'Albert')

assert(teamBlack.count === 3, 'teamBlack.count is 3')
assert(teamBlack[0] === 'Juan', 'teamBlack[0] is Juan')
assert(teamBlack[1] === 'Jorge', 'teamBlack[1] is Jorge')
assert(teamBlack[2] === 'Albert', 'teamBlack[2] is Albert')

const teamYellow = new Collection()
teamYellow.push('Juan')
teamYellow.push('Jorge')
teamYellow.push('Agus')
teamYellow.push('Albert')
teamYellow.push('Sergio')
teamYellow.count = 5

assert(teamYellow.count === 5, 'teamYellow.count is 5')
assert(teamYellow[0] === 'Juan', 'teamYellow[0] is Juan')
assert(teamYellow[1] === 'Jorge', 'teamYellow[1] is Jorge')
assert(teamYellow[2] === 'Agus', 'teamYellow[2] is Agus')
assert(teamYellow[3] === 'Albert', 'teamYellow[3] is Albert')
assert(teamYellow[4] === 'Sergio', 'teamYellow[4] is Sergio')

// CASE name to uppercase
{
    const names = new Collection()
    names[0] = 'Rodolfo'
    names[1] = 'Serito'
    names[2] = 'Agus'
    names[3] = 'Albert'
    names[4] = 'Juanico'
    names.count = 5

    const namesInUpperCase = names.map(name => name.toUpperCase())
    assert(namesInUpperCase.count === 5, 'namesInUpperCase.count  5')
    assert(namesInUpperCase[0] === 'RODOLFO', 'namesInUpperCase[0] RODOLFO')
    assert(namesInUpperCase[1] === 'SERITO', 'namesInUpperCase[1] SERITO')
    assert(namesInUpperCase[2] === 'AGUS', 'namesInUpperCase[2] AGUS')
    assert(namesInUpperCase[3] === 'ALBERT', 'namesInUpperCase[3] ALBERT')
    assert(namesInUpperCase[4] === 'JUANICO', 'namesInUpperCase[4] JUANICO')
}

// CASE colors with character o
{
    const color = new Collection()
    colors[0] = 'red'
    colors[1] = 'brown'
    colors[2] = 'blue'
    colors[3] = 'black'
    colors[4] = 'yellow'
    colors[5] = 'orange'
    colors.count = 6

    const colorsWithO = colors.filter(color => color.includes('o'))

    assert(colorsWithO.count === 3, 'colorsWithO.count is 3')
    assert(colorsWithO[0] === 'brown', 'colorsWithO[0] is brown')
    assert(colorsWithO[1] === 'yellow', 'colorsWithO[1] is yellow')
    assert(colorsWithO[2] === 'orange', 'colorsWithO[2] is orange')
}

// CASE animals with character e

{
    const animals = new Collection()
    animals[0] = 'dog'
    animals[1] = 'cat'
    animals[2] = 'horse'
    animals[3] = 'cow'
    animals[4] = 'sheep'
    animals.count = 5

    const animalWithE = animals.find(animal => animal.includes('e'))
    
    assert(animalWithE === 'horse')

}