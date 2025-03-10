export function Calculo() {
    function calcularDivisao() {
      const number1 = prompt("Digite o Primeiro Número");
      const number2 = prompt("Digite o Segundo Número");
      const resultado = number1 / number2;
      alert(`Resultado: ${resultado}`);
    }
  
    return (
      <div className="flex justify-center mt-10">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={calcularDivisao}>Calcular Divisão</button>
      </div>
    );
  }
  
  export default Calculo;