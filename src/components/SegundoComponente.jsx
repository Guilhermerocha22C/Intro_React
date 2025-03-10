function SegundoComponente() {
    const corComponente2 = "Verde";
    return (
        <div className="bg-indigo-500 p-6 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-3 text-white">
                Sou o Segundo Componente e sou <span className="text-green-300">{corComponente2}</span>
            </h1>
            <p className="text-xl text-indigo-50">
                Isso é um Componente com Título e parágrafo
            </p>
        </div>
    );
}

export default SegundoComponente;