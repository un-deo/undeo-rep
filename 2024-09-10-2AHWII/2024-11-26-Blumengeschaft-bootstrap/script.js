const Obj = {
  Name: null,
  Email: null,
  Kommentar: "",
  Sonnenblume: 0,
  Tulpe: 0,
  Lilie: 0,
  Rose: 0,
  Edelweis: 0,
  Gesammtsumme: 0,
};

let total = 0;
let currentOrder = Obj;
const orders = [];
const blumenSelect = document.getElementById("floatingSelect");
let selectedOption = blumenSelect.options[blumenSelect.selectedIndex];

function addProduct() {
  selectedOption = blumenSelect.options[blumenSelect.selectedIndex];

  switch (selectedOption.innerHTML) {
    case "Sonnenblume":
      currentOrder.Sonnenblume += 1;
      break;
    case "Tulpe":
      currentOrder.Tulpe += 1;
      break;
    case "Lilie":
      currentOrder.Lilie += 1;
      break;
    case "Rose":
      currentOrder.Rose += 1;
      break;
    case "Edelweiß":
      currentOrder.Edelweis += 1;
      break;

    default:
      alert("problem with selection");
  }
  total += Number(selectedOption.value.replace("€", "").replace(",", "."));
  document.getElementById(
    "total"
  ).textContent = `Gesammtsumme: €${total.toFixed(2)}`;

  document.getElementById(
    "cart"
  ).innerHTML += `<tr><td>"${selectedOption.innerHTML}"</td><td>"${selectedOption.value}"</td></tr>`;
}

function singlePriceChange() {
  selectedOption = blumenSelect.options[blumenSelect.selectedIndex];
  document.getElementById(
    "singlePrice"
  ).textContent = `Preis: €${selectedOption.value}`;
}
document.getElementById("Bestellen").addEventListener("click", function () {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == ""
  ) {
    alert("bitte alles ausfüllen");
  } else {
    currentOrder.Email = document.getElementById("email").value;
    currentOrder.Name = document.getElementById("name").value;
    currentOrder.Kommentar = document.getElementById("text").value;
    currentOrder.Gesammtsumme = `€ ${total}`;
    alert(
      "Ihre Produkte wurden bestellt. " +
        `siehe die Rechnung hier: ${document.getElementById("email").value}` +
        `\n ${JSON.stringify(currentOrder)}`
    );

    //folgender Code wurde mit Hilfe des Internets (u.a. MDN) geschrieben. (die kommentare wurden von mir manuell dazugeschrieben)

    // erstellung eines Blob objekts welches die momentane Bestellung als JSON string beinhaltet.
    const blob = new Blob([JSON.stringify(currentOrder, null, 2)], {
      type: "application/json",
    });
    //erstellung eines temporären Links welcher den Inhalt des Blobs hat.
    const url = URL.createObjectURL(blob);
    //erstellung eines <a> elements in dem HTML welches den Link beinhaltet
    const a = document.createElement("a");
    a.href = url;
    //hier wird ein download mit dem element <a> verbunden welchen durch anclicken ausgelöst wird (dateinamen standardmäßig "[Name-des-Kunden]_Rechnung.json")
    a.download = `Rechnung_${currentOrder.Name}.json`;
    //simulierung eines User-cicks auf dem element <a> damit der download automatisch ausgelöst wird.
    a.click();
    //entfernung des temporären links
    URL.revokeObjectURL(url);
    //neuladen des Tabs um die Felder und den Waarenkorb zu leeren
    window.location.reload();
  }
});
