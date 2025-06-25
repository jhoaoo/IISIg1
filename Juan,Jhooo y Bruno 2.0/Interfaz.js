function operar(operacion) {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const res = document.getElementById("resultado");

  if (isNaN(n1) || isNaN(n2)) {
    res.textContent = "Ingresa números válidos.";
    return;
  }

  let resultado;
  switch (operacion) {
    case 'sumar': resultado = n1 + n2; break;
    case 'restar': resultado = n1 - n2; break;
    case 'multiplicar': resultado = n1 * n2; break;
    case 'dividir':
      resultado = n2 !== 0 ? n1 / n2 : "No se puede dividir por cero";
      break;
  }

  res.textContent = "Resultado: " + resultado;
}
