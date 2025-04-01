using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

public class SubstituicaoIfElse
{
    private Dictionary<int, Delegate> dicionario = new()
    {
        { 1, (Action)MetodoSemParametro },
        { 2, (Action<int>)MetodoComParametro },
        { 3, (Func<int, int>)MetodoComRetorno },
        { 4, (Func<CancellationToken, Task>)MetodoAssincrono }
    };


    // Exemplo 1: Método sem parâmetros
    void MetodoSemParametro()
    {
        Console.WriteLine("Executando ação sem parâmetros!");
    }

    // Exemplo 2: Método que recebe um número como parâmetro
    void MetodoComParametro(int num)
    {
        Console.WriteLine($"Número recebido: {num}");
    }

    // Exemplo 3: Método que recebe um número e retorna outro valor
    int MetodoComRetorno(int num)
    {
        return num * 2;
    }

    // Exemplo 4: Método assíncrono que pode ser cancelado
    async Task MetodoAssincrono(CancellationToken token)
    {
        Console.WriteLine("Iniciando operação assíncrona...");
        await Task.Delay(2000, token);
        Console.WriteLine("Operação concluída!");
    }
}
