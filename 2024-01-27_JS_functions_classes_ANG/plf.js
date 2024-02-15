class Person {
  constructor(name, gender, groesseM, gewichtKG) {
    this.name = name;
    this.gender = gender;
    this.groesseM = groesseM;
    this.gewichtKG = gewichtKG;
    if (gender !== "m" && gender !== "f") {
      throw new Error("Wrong gender");
    }
  }
  groesseCM() {
    return this.groesseM * 100;
  }

  vorName() {
    const names = this.name.split(" ");
    return names[0];
    return this.name.split(" ", 1)[0];
  }

  nachName() {
    const names = this.name.split(" ");
    return names.slice(1).join(" ");
    return this.name.split(" ")[1];
  }

  toString() {
    return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
  }

  getBmi() {
    const bmi = this.gewichtKG / this.groesseM ** 2;
    return parseFloat(bmi.toFixed(2));
    return this.gewichtKG / Math.pow(this.groesseM, 2);
  }

  getGewichtType() {
    const bmi = this.getBmi();
    if (this.gender === "f" && bmi >= 19 && bmi <= 24) {
      return "Normalgewicht";
    } else if (this.gender === "m" && bmi >= 20 && bmi <= 25) {
      return "Normalgewicht";
    } else if (bmi < 19) {
      return "Untergewicht";
    } else {
      return "Übergewicht";
    }
  }
}
export { Person };