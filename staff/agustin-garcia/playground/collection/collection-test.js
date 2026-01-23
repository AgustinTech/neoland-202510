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

const teamOrange = new Collection()
teamOrange[0] = ('Juan')
teamOrange[1] = ('Jorge')
teamOrange[2] = ('Agus')
teamOrange[3] = ('Albert')
teamOrange[4] = ('Sergio')
teamOrange.count = 5

teamOrange.remove('Agus')

console.assert(teamOrange.count === 4, 'teamOrange.count is 4')
console.assert(teamOrange[0] === 'Juan', 'teamOrange[0] is Juan')
console.assert(teamOrange[1] === 'Jorge', 'teamOrange[1] is Jorge')
console.assert(teamOrange[2] === 'Albert', 'teamOrange[2] is Albert')
console.assert(teamOrange[3] === 'Sergio', 'teamOrange[3] is Sergio')


const teamWhite = new Collection()
teamWhite[0] = ('Juan')
teamWhite[1] = ('Jorge')
teamWhite[2] = ('Agus')
teamWhite[3] = ('Albert')
teamWhite[4] = ('Sergio')
teamWhite.count = 5

teamWhite.removeFirst('Agus')

console.assert(teamWhite.count === 4, 'teamWhite.count is 4')
console.assert(teamWhite[0] === 'Juan', 'teamWhite[0] is Juan')
console.assert(teamWhite[1] === 'Jorge', 'teamWhite[1] is Jorge')
console.assert(teamWhite[2] === 'Albert', 'teamWhite[2] is Albert')
console.assert(teamWhite[3] === 'Sergio', 'teamWhite[3] is Sergio')

const teamGreen = new Collection()
teamGreen[0] = ('Juan')
teamGreen[1] = ('Jorge')
teamGreen[2] = ('Agus')
teamGreen.count = 3

teamGreen.update('Agus', 'Albert')

console.assert(teamGreen.count === 3, 'teamGreen.count is 3')
console.assert(teamGreen[0] === 'Juan', 'teamGreen[0] is Juan')
console.assert(teamGreen[1] === 'Jorge', 'teamGreen[1] is Jorge')
console.assert(teamGreen[2] === 'Albert', 'teamGreen[2] is Albert')


const teamBlack = new Collection()
teamBlack[0] = ('Juan')
teamBlack[1] = ('Jorge')
teamBlack[2] = ('Agus')
teamBlack.count = 3

teamBlack.updateFirst('Agus', 'Albert')

console.assert(teamBlack.count === 3, 'teamBlack.count is 3')
console.assert(teamBlack[0] === 'Juan', 'teamBlack[0] is Juan')
console.assert(teamBlack[1] === 'Jorge', 'teamBlack[1] is Jorge')
console.assert(teamBlack[2] === 'Albert', 'teamBlack[2] is Albert')

const teamYellow = new Collection()
teamYellow.push('Juan')
teamYellow.push('Jorge')
teamYellow.push('Agus')
teamYellow.push('Albert')
teamYellow.push('Sergio')
teamYellow.count = 5

console.assert(teamYellow.count === 5, 'teamYellow.count is 5')
console.assert(teamYellow[0] === 'Juan', 'teamYellow[0] is Juan')
console.assert(teamYellow[1] === 'Jorge', 'teamYellow[1] is Jorge')
console.assert(teamYellow[2] === 'Agus', 'teamYellow[2] is Agus')
console.assert(teamYellow[3] === 'Albert', 'teamYellow[3] is Albert')
console.assert(teamYellow[4] === 'Sergio', 'teamYellow[4] is Sergio')

// case name to uppercase
{
    const names = new Collection()
    names[0] = 'Rodolfo'
    names[1] = 'Serito'
    names[2] = 'Agus'
    names[3] = 'Albert'
    names[4] = 'Juanico'
    names.count = 5

    const namesInUpperCase = names.map(name => name.toUpperCase())
    console.assert(namesInUpperCase.count === 5, 'namesInUpperCase.count  5')
    console.assert(namesInUpperCase[0] === 'RODOLFO', 'namesInUpperCase[0] RODOLFO')
    console.assert(namesInUpperCase[1] === 'SERITO', 'namesInUpperCase[1] SERITO')
    console.assert(namesInUpperCase[2] === 'AGUS', 'namesInUpperCase[2] AGUS')
    console.assert(namesInUpperCase[3] === 'ALBERT', 'namesInUpperCase[3] ALBERT')
    console.assert(namesInUpperCase[4] === 'JUANICO', 'namesInUpperCase[4] JUANICO')
}