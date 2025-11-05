const { calcularTotalPedido } = require('./pedido');
const { generarResumen } = require('./funcionGrupo6');

describe('Integración: calcularTotalPedido + generarResumen (Grupo 6)', () => {
  test('flujo OK: calcula total -> genera resumen con cliente, ítems y total', () => {
    const productos = [
      { precio: 20, cantidad: 2 }, 
      { precio: 5,  cantidad: 3 }  
    ];
    const descuento = 10;         

 
    const total = calcularTotalPedido(productos, descuento);
    expect(total).toBe(49.5);


    const texto = generarResumen('Valeria', productos, descuento);

    expect(texto).toBe(`Cliente: Valeria | Ítems: 5 | Total: S/${total.toFixed(2)}`);
  });

  test('flujo con error: subtotal inválido en base -> el grupo propaga el error', () => {
    const productos = [{ precio: 0, cantidad: 3 }]; 
    const descuento = 0;


    const total = calcularTotalPedido(productos, descuento);
    expect(total).toBe('Error: monto inválido');

    const texto = generarResumen('Valeria', productos, descuento);
    expect(texto).toBe('Error: monto inválido');
  });
});
