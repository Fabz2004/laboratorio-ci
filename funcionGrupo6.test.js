const { generarResumen } = require("./funcionGrupo6");

describe("generarResumen (Grupo 6)", () => {
  test("éxito: retorna texto con cliente, cantidad y total", () => {
    const productos = [
      { precio: 20, cantidad: 2 }, 
      { precio: 5,  cantidad: 2 }, 
    ];
    const descuento = 10; 
    const texto = generarResumen("Valeria", productos, descuento);
    expect(texto).toBe("Cliente: Valeria | Ítems: 5 | Total: S/49.50");
  });

  test("error: cliente vacío", () => {
    const productos = [{ precio: 50, cantidad: 1 }];
    const texto = generarResumen("   ", productos, 0);
    expect(texto).toBe("Error: cliente inválido");
  });

});
