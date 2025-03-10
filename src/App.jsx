import React from 'react';
import PrimeiroComponente from './components/PrimeiroComponente';
import SegundoComponente from './components/SegundoComponente';
import CliqueEmMim from './components/Clique';
import Calculo from './components/calculo';

export default function App() {
  const nome = "Guilherme";
  const idade = 17;
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className='bg-blue-500 text-3xl text-white py-4 px-4 text-center font-bold shadow-md'>
        Olá mundo!
      </h1>
      <div className="space-y-6 p-6">
        <PrimeiroComponente />
        <SegundoComponente />

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-2">Template Expression</h1>
          <p className="text-gray-700">Nome do Programador: <span className=' font-bold'>{nome}</span></p>
          <p className="text-gray-700">Idade do <span className=' font-bold'>{nome}</span> é <span className=' font-bold'>{idade}</span></p>
        </div>

      </div>

      <div className=' bg-amber-200 p-2 rounded-4xl'>
        <CliqueEmMim/>
      </div>

      <div>
        <Calculo/>
      </div>

    </div>
  );
}