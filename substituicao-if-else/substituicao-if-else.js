// Criando o "dicionário" com funções separadas
const dicionario = {
    1: metodoSemParametro,
    2: metodoComParametro,
    3: metodoComRetorno,
    4: metodoAssincrono
};

// Exemplo 1: Método sem parâmetros
function metodoSemParametro() {
    console.log("Executando ação sem parâmetros!");
}

// Exemplo 2: Método que recebe um número como parâmetro
function metodoComParametro(num) {
    console.log(`Número recebido: ${num}`);
}

// Exemplo 3: Método que recebe um número e retorna outro valor
function metodoComRetorno(num) {
    return num * 2;
}

// Exemplo 4: Método assíncrono que pode ser cancelado
async function metodoAssincrono(signal) {
    console.log("Iniciando operação assíncrona...");
    try {
        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => resolve("Operação concluída!"), 2000);
            signal?.addEventListener("abort", () => {
                clearTimeout(timeout);
                reject(new Error("Operação cancelada!"));
            });
        });
        console.log("Operação concluída!");
    } catch (error) {
        console.log(error.message);
    }
}

// Exemplo 1: Chama a função sem parâmetros
dicionario[1]();

// Exemplo 2: Chama a função com parâmetro
dicionario ;

// Exemplo 3: Usa a função que retorna um valor
const resultado = dicionario ;
console.log(`Resultado da função: ${resultado}`);

// Exemplo 4: Executa uma função assíncrona com um AbortController
const controller = new AbortController();
const signal = controller.signal;

dicionario[4](signal); 

// Se quisermos cancelar antes de 2 segundos
setTimeout(() => controller.abort(), 1000);
