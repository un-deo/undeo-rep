class Person {
  constructor(name, gender, groesseM, gewichtKG) {
    if (gender !== "male" && gender !== "female") {
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
    if (this.gender === "female" && bmi2 >= 19 && bmi2 <= 24) {
      return "Normalgewichtig";
    } else if (this.gender === "male" && bmi2 >= 20 && bmi2 <= 25) {
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
            const person = new Person(name, gender, height, weight);
            const bmi = person.getBmi();
            const weightType = person.getGewichtType();

            let outputText = `${person.toString()} hat einen BMI von ${bmi.toFixed(2)}, und ist ${weightType}`;
            output.textContent = outputText;

            
            if (weightType === "Normalgewicht") {
                output.style.color = "darkgreen";
            } else if (weightType === "Übergewicht") {
                output.style.color = "red";
            } else if (weightType === "Untergewicht") {
                output.style.color = "orange";
            }
        } catch (error) {
            output.textContent = "Error: " + error.message;
            output.style.color = "black"; 
        }
    });
});
