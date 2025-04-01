# Equivalência de Métodos entre JavaScript e C# (LINQ)

Este documento apresenta uma tabela comparativa entre os métodos mais utilizados em **JavaScript** e seus equivalentes em **C# LINQ**, juntamente com descrições e exemplos de uso.

## Tabela de Equivalência

| **JavaScript**          | **C# (LINQ)**       | **Descrição** | **Exemplo JavaScript** | **Exemplo C#** |
|-------------------------|---------------------|--------------|-------------------|-------------|
| `array.map(f)`         | `array.Select(f)`   | Transforma cada item do array em outro valor. | `const resultado = array.map(x => x * 2);` | `var resultado = array.Select(x => x * 2).ToList();` |
| `array.filter(f)`      | `array.Where(f)`    | Filtra os elementos do array com base em uma condição. | `const resultado = array.filter(x => x > 10);` | `var resultado = array.Where(x => x > 10).ToList();` |
| `array.reduce(f, acc)` | `array.Aggregate(acc, f)` | Reduz o array a um único valor acumulando resultados. | `const resultado = array.reduce((acc, x) => acc + x, 0);` | `var resultado = array.Aggregate(0, (acc, x) => acc + x);` |
| `array.forEach(f)`     | `array.ToList().ForEach(f)` | Itera sobre cada elemento do array e executa uma ação (sem retorno). | `array.forEach(x => console.log(x));` | `array.ForEach(x => Console.WriteLine(x));` |
| `array.some(f)`        | `array.Any(f)`      | Retorna `true` se **pelo menos um** elemento do array atender à condição. | `const resultado = array.some(x => x > 10);` | `var resultado = array.Any(x => x > 10);` |
| `array.every(f)`       | `array.All(f)`      | Retorna `true` se **todos** os elementos atenderem à condição. | `const resultado = array.every(x => x > 10);` | `var resultado = array.All(x => x > 10);` |
| `array.find(f)`        | `array.FirstOrDefault(f)` | Retorna o **primeiro** elemento que atende à condição, ou `null` se nenhum for encontrado. | `const resultado = array.find(x => x > 10);` | `var resultado = array.FirstOrDefault(x => x > 10);` |
| `array.findIndex(f)`   | `array.FindIndex(f)` | Retorna o **índice** do primeiro elemento que atende à condição, ou `-1` se não encontrado. | `const resultado = array.findIndex(x => x > 10);` | `var resultado = array.FindIndex(x => x > 10);` |
| `array.includes(v)`    | `array.Contains(v)` | Verifica se um valor específico existe na lista. | `const resultado = array.includes(10);` | `var resultado = array.Contains(10);` |
| `array.sort(f)`        | `array.OrderBy(f)` / `array.OrderByDescending(f)` | Ordena os elementos do array de forma crescente ou decrescente. | `const resultado = array.sort((a, b) => a - b);` | `var resultado = array.OrderBy(x => x).ToList();` |
| `array.reverse()`      | `array.Reverse()`   | Inverte a ordem dos elementos no array. | `const resultado = array.reverse();` | `var resultado = array.Reverse();` |
| `array.slice(start, end)` | `array.Skip(start).Take(end - start)` | Retorna uma parte do array sem modificar o original. | `const resultado = array.slice(1, 3);` | `var resultado = array.Skip(1).Take(2).ToList();` |
| `array.concat(arr2)`   | `array.Concat(arr2)` | Junta dois arrays sem modificar os originais. | `const resultado = array.concat(outroArray);` | `var resultado = array.Concat(outroArray).ToList();` |
| `array.flat(depth)`    | `array.SelectMany(f)` | Achata um array de arrays até a profundidade especificada. | `const resultado = array.flat();` | `var resultado = array.SelectMany(x => x).ToList();` |
| `new Set(array)`       | `array.Distinct()`  | Remove elementos duplicados do array. | `const resultado = [...new Set(array)];` | `var resultado = array.Distinct().ToList();` |
| `array.length`        | `array.Count()`     | Retorna o número de elementos no array. | `const resultado = array.length;` | `var resultado = array.Count();` |

## Contribuições
Se você quiser adicionar mais equivalências ou melhorar este guia, fique à vontade para abrir um PR! 🚀

