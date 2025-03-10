export function CliqueEmMim() {
    function Clicou() {
        alert('Clicaram no Botão');
    }

    return (
        <div className="flex justify-center">
            <button
                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-800 transition-colors"
                onClick={Clicou}>Clique em mim</button>
        </div>
    );
}

export default CliqueEmMim;