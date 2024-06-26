class Person {
  #name;
  #gender;
  #groesseM;
  #gewichtKG;

  constructor(name, gender, groesseM, gewichtKG) {
    this.#name = name;
    this.#gender = gender;
    this.#groesseM = groesseM;
    this.#gewichtKG = gewichtKG;

    if (this.#gender !== "male" && this.#gender !== "female") {
      throw new Error("Wrong gender");
    }
  }

  #groesseCM() {
    return this.#groesseM * 100;
  }

  vorName() {
    const names = this.#name.split(" ");
    return names[0];
  }

  nachName() {
    const names = this.#name.split(" ");
    return names.slice(1).join(" ");
  }

  toString() {
    return `${this.#name} (${this.#groesseCM()}cm, ${this.#gewichtKG}kg)`;
  }

  getBmi() {
    const bmi = this.#gewichtKG / this.#groesseM ** 2;
    return bmi;
  }

  getGewichtType() {
    const bmi2 = this.getBmi();
    if (this.#gender === "female" && bmi2 >= 19 && bmi2 <= 24) {
      return "Normalgewichtig";
    } else if (this.#gender === "male" && bmi2 >= 20 && bmi2 <= 25) {
      return "Normalgewichtig";
    } else if (bmi2 < 19) {
      return "Untergewichtig";
    } else {
      return "Übergewichtig";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".generator");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    try {
      if (height < 0 || weight < 0 || isNaN(height) || isNaN(weight)) {
        throw new Error(alert("Please check if all values are correct"));
      }
      const person = new Person(name, gender, height, weight);
      const bmi = person.getBmi();
      const weightType = person.getGewichtType();

      let outputText = `${person.toString()} hat einen BMI von ${bmi.toFixed(
        2
      )}, und ist ${weightType}`;
      output.textContent = outputText;

      if (weightType === "Normalgewichtig") {
        output.style.color = "darkgreen";
      } else if (weightType === "Übergewichtig") {
        output.style.color = "red";
      } else if (weightType === "Untergewichtig") {
        output.style.color = "orange";
      }
    } catch (error) {
      output.textContent = "Error: " + error.message;
      output.style.color = "black";
    }
  });
});

const mensch1 = new Person("Viktor Demirchev", "m", 1.86, 89);
const Physiker = new Person("Albrecht Einstein", "m", 1.6, 65);
const Mensch3 = new Person("Isaac Newton", "m", 1.7, 54);

console.log(mensch1.vorName());
console.log(mensch1.nachName());
console.log(mensch1.getGewichtType());
console.log(mensch1.toString());
console.log(mensch1.getBmi());

console.log(Physiker.vorName());
console.log(Physiker.getGewichtType());
console.log(Physiker.nachName());
console.log(Physiker.getBmi());
console.log(Physiker.toString());

console.log(Mensch3.toString());
console.log(Mensch3.nachName());
console.log(Mensch3.getGewichtType());
console.log(Mensch3.vorName());
console.log(Mensch3.getBmi());

//class Person {
//  constructor(name, gender, groesseM, gewichtKG) {
//    if (gender !== "male" && gender !== "female") {
//      throw new Error("Wrong gender");
//    }
//    this.name = name;
//    this.gender = gender;
//    this.groesseM = groesseM;
//    this.gewichtKG = gewichtKG;
//  }
//
//  groesseCM() {
//    return this.groesseM * 100;
//  }
//
//  vorName() {
//    const names = this.name.split(" ");
//    return names[0];
//  }
//
//  nachName() {
//    const names = this.name.split(" ");
//    return names.slice(1).join(" ");
//  }
//
//  toString() {
//    return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
//  }
//
//  getBmi() {
//    const bmi = this.gewichtKG / this.groesseM ** 2;
//    return bmi;
//  }
//
//  getGewichtType() {
//    const bmi2 = this.getBmi();
//    if (this.gender === "female" && bmi2 >= 19 && bmi2 <= 24) {
//      return "Normalgewichtig";
//    } else if (this.gender === "male" && bmi2 >= 20 && bmi2 <= 25) {
//      return "Normalgewichtig";
//    } else if (bmi2 < 19) {
//      return "Untergewichtig";
//    } else {
//      return "Übergewichtig";
//    }
//  }
//}
//
//document.addEventListener("DOMContentLoaded", function () {
//  const button = document.querySelector(".generator");
//  const output = document.getElementById("output");
//
//  button.addEventListener("click", function () {
//    const name = document.getElementById("name").value;
//    const gender = document.getElementById("gender").value;
//    const height = parseFloat(document.getElementById("height").value);
//    const weight = parseFloat(document.getElementById("weight").value);
//
//    try {
//      if (height < 0 || weight < 0 || isNaN(height) || isNaN(weight)) {
//        throw new Error(alert("Please check if all values are correct"));
//      }
//      const person = new Person(name, gender, height, weight);
//      const bmi = person.getBmi();
//      const weightType = person.getGewichtType();
//
//      let outputText = `${person.toString()} hat einen BMI von ${bmi.toFixed(
//        2
//      )}, und ist ${weightType}`;
//      output.textContent = outputText;
//
//      if (weightType === "Normalgewichtig") {
//        output.style.color = "darkgreen";
//      } else if (weightType === "Übergewichtig") {
//        output.style.color = "red";
//      } else if (weightType === "Untergewichtig") {
//        output.style.color = "orange";
//      }
//    } catch (error) {
//      output.textContent = "Error: " + error.message;
//      output.style.color = "black";
//    }
//  });
//});
