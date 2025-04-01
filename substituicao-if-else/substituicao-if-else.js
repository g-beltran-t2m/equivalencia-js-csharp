// Criando o "dicion�rio" com fun��es separadas
const dicionario = {
    1: metodoSemParametro,
    2: metodoComParametro,
    3: metodoComRetorno,
    4: metodoAssincrono
};

// Exemplo 1: M�todo sem par�metros
function metodoSemParametro() {
    console.log("Executando a��o sem par�metros!");
}

// Exemplo 2: M�todo que recebe um n�mero como par�metro
function metodoComParametro(num) {
    console.log(`N�mero recebido: ${num}`);
}

// Exemplo 3: M�todo que recebe um n�mero e retorna outro valor
function metodoComRetorno(num) {
    return num * 2;
}

// Exemplo 4: M�todo ass�ncrono que pode ser cancelado
async function metodoAssincrono(signal) {
    console.log("Iniciando opera��o ass�ncrona...");
    try {
        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => resolve("Opera��o conclu�da!"), 2000);
            signal?.addEventListener("abort", () => {
                clearTimeout(timeout);
                reject(new Error("Opera��o cancelada!"));
            });
        });
        console.log("Opera��o conclu�da!");
    } catch (error) {
        console.log(error.message);
    }
}

// Exemplo 1: Chama a fun��o sem par�metros
dicionario[1]();

// Exemplo 2: Chama a fun��o com par�metro
dicionario ;

// Exemplo 3: Usa a fun��o que retorna um valor
const resultado = dicionario ;
console.log(`Resultado da fun��o: ${resultado}`);

// Exemplo 4: Executa uma fun��o ass�ncrona com um AbortController
const controller = new AbortController();
const signal = controller.signal;

dicionario[4](signal); 

// Se quisermos cancelar antes de 2 segundos
setTimeout(() => controller.abort(), 1000);
