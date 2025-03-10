import ReactImagem from '../assets/react.svg';

function PrimeiroComponente() {
    const corComponente = "Vermelho";
    return (
        <div className='bg-green-100 p-6 rounded-lg shadow-sm'>
            <h2 className='text-2xl font-bold mb-2 text-gray-800'>
                Sou o Primeiro Componente e sou <span className='text-red-600'>{corComponente}</span>
            </h2>
            <img className='mx-auto block h-12 mb-4' src={ReactImagem} alt="Logo React" />
            <p className='text-lg font-bold text-center text-gray-700 mt-2'>
                Sou o Primeiro componente com uma imagem
            </p>
        </div>
    );
}

export default PrimeiroComponente;