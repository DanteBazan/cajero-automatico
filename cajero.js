let cliente1 = {
  nombre: "Jorgelina",
  saldo: 0,
  cuentaCorriente: false,
  depositar: function (monto) {
    this.saldo += monto;
    console.log(`Acaba de depositar:$` + monto);
    console.log(`Su dinero disponible es:$` + this.saldo);
  },
  extraer: function (monto) {
    this.saldo -= monto;
    console.log("Usted extrajo:$" + monto + "pesos");
  },
  consultar: function () {
    console.log("Su saldo es:$" + this.saldo);
  },
};

let opcion = parseInt(
  prompt("Ingrese su opcion:\n 1-Consultar\n 2-Depositar\n 3-Extraer")
);

if (opcion === 1) {
  cliente1.consultar();
} else if (opcion === 2) {
  let monto = parseInt(prompt("Ingrese el monto a depositar"));
  cliente1.depositar(monto);
} else if (opcion === 3) {
  let monto = parseInt(prompt("Ingrese el monto a extraer"));
  cliente1.extraer(monto);
} else {
  console.log("No ingresaste ninguna opcion");
}
