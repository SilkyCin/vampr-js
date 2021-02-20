class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVampire = this;
    let count = 0
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      count++
    }
    return count
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if ( this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    for (const vampire of this.offspring) {
      let sameNames = vampire.vampireWithName(name);
      if (sameNames) {
        return sameNames;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let totalVamps = 0;

    for (const offspring of this.offspring) {
      totalVamps += offspring.totalDescendents + 1
    }
    return totalVamps;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let youngVamps = [];
    if (this.yearConverted > 1980) {
      youngVamps.push(this)
    }
    
    for (const offspring of this.offspring) {
      const offspringYoung = offspring.allMillennialVampires;
      youngVamps = youngVamps.concat(offspringYoung);
    }
    return youngVamps
  }

//////////////////////////
// employeesThatMakeOver(amount) {
//   let employees = [];
//   if (this.salary > amount) {
//     employees.push(this);
//   }
//   for (const subordinate of this.subordinates) {
//     const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);
//     employees = employees.concat(subordinatesThatMakeOver);
//   }
//   return employees;
}
/////////////////////////////////////////



  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
//   // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
//   closestCommonAncestor(vampire) {


// }

module.exports = Vampire;

