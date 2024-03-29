class Person {
  constructor(name, gender, groesseM, gewichtKG) {
    if (gender !== "m" && gender !== "f") {
      throw new Error("Wrong gender");
    }
    this.name = name;
    this.gender = gender;
    this.groesseM = groesseM;
    this.gewichtKG = gewichtKG;
    
  }

  
  groesseCM() {
    return this.groesseM * 100;
  }

  vorName() {
    const names = this.name.split(" ");
    return names[0];
  }

  nachName() {
    const names = this.name.split(" ");
    return names.slice(1).join(" ");
  }

  toString() {
    return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
  }

  getBmi() {
    const bmi = this.gewichtKG / this.groesseM ** 2;
    return bmi;
  }

  getGewichtType() {
    const bmi2 = this.getBmi();
    if (this.gender === "f" && bmi2 >= 19 && bmi2 <= 24) {
      return "Normalgewicht";
    } else if (this.gender === "m" && bmi2 >= 20 && bmi2 <= 25) {
      return "Normalgewicht";
    } else if (bmi2 < 19) {
      return "Untergewicht";
    } else {
      return "Übergewicht";
    }
  }
}
export { Person }; 