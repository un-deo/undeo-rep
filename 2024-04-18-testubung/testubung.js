class Test {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    if (isNaN(this.age) || this.age < 0) {
      throw new Error(alert("invalid age"));
    }
  }
  firstname() {
    const firstname = this.name.split(" ")[0];
    console.log(firstname);
    return firstname;
  }
  lastname() {
    const lastname = this.name.split(" ")[1];
    console.log(lastname);
    return lastname;
  }
  nextage() {
    const nextage = parseFloat(this.age) + 1;
    console.log(nextage);
    return nextage;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("generate");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    const fullname = document.getElementById("name").value;
    const agea = document.getElementById("age").value;

    const human = new Test(fullname, agea);
    const outputtext = `firstname: ${human.firstname()},
    lastname: ${human.lastname()}
    nextage: ${human.nextage()} `;
    output.textContent = outputtext;
  });
});
