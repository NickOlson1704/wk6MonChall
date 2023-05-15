function towerBuilder(n) {
    const tower = []
    let numBlocks = 1


for (let i = 0; i < n; i++) {
    const spaces = ' '.repeat(n - i -1)
    const blocks = '*'.repeat(numBlocks)
    const floor = spaces + blocks + spaces
    tower.push(floor)
    numBlocks += 2
   }
   return tower
}

const floors = 5
const tower = towerBuilder(floors)

console.log(tower)


function towerBuilder(n) {
    const tower = []
    let towerString = '*'
       for(let i = 0; i < n; i++) {
        tower.push(towerString)
        towerString += "**"
       for(let j = 0; j < i; j++) {
        tower[j] = " " + tower[j] + ' '
       }
    }
    return tower
}

console.log(tower)

function towerBuilder(nFloors) {
    var tower = [];
      for (var i = 0; i < nFloors; i++) {
         tower.push(" ".repeat(nFloors - i - 1)
                  + "*".repeat((i * 2)+ 1)
                  + " ".repeat(nFloors - i - 1));
       }
      return tower;
     }

console.log(tower)