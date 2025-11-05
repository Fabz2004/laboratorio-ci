const { calcularTotalPedido } = require("./pedido");

function generarResumen(cliente, productos, descuento = 0) {
  if (typeof cliente !== "string" || cliente.trim().length === 0) {
    return "Error: cliente inválido";
  }

  const cantidad = Array.isArray(productos)
    ? productos.reduce((acc, p) => acc + (p.cantidad || 0), 0)
    : 0;

  if (cantidad <= 0) return "Error: cantidad inválida";

  const total = calcularTotalPedido(productos, descuento);
  if (typeof total === "string") {
        return total;
  }

  return `Cliente: ${cliente.trim()} | Ítems: ${cantidad} | Total: S/${total.toFixed(2)}`;
}

module.exports = { generarResumen };
