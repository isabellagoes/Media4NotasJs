// EXERCÍCIO EM C#:

//Resultados possíveis:
//"Reprovado" para médias menores que 5.0
//"Em recuperação" para médias entre 5.0 e 6.0
//"Aprovado", para médias acima de 6.0

// double nota1, nota2, nota3, nota4, media;

// Console.WriteLine("--- Média ---\n");

// Console.WriteLine("Digite as suas notas abaixo.");
 
// Console.Write("Nota 1: ");
// nota1 = Convert.ToDouble(Console.ReadLine());

// Console.Write("Nota 2: ");
// nota2 = Convert.ToDouble(Console.ReadLine());

// Console.Write("Nota 3: ");
// nota3 = Convert.ToDouble(Console.ReadLine());

// Console.Write("Nota 4: ");
// nota4 = Convert.ToDouble(Console.ReadLine());

// Console.WriteLine();

// if (nota1 < 0 || nota1 > 10
//  || nota2 < 0 || nota2 > 10
//  || nota3 < 0 || nota3 > 10
//  || nota4 < 0 || nota4 > 10)
// {
//     Console.WriteLine("Digite somente notas entre 0 e 10.");
// }
// else
// {
//     media = (nota1 + nota2 + nota3 + nota4) / 4;

//     if (media < 5)
//     {
//         Console.Write($"Você ficou com média {media:N1}. Resultado = ");
//         Console.ForegroundColor = ConsoleColor.Red;
//         Console.WriteLine("Reprovado(a)");
//     }
//     else if (media > 6)
//     {
//         Console.Write($"Você ficou com média {media:N1}. Resultado = ");
//         Console.ForegroundColor = ConsoleColor.Green;
//         Console.WriteLine("Aprovado(a)");
//     }
//     else
//     {
//         Console.Write($"Você ficou com média {media:N1}. Resultado = ");
//         Console.ForegroundColor = ConsoleColor.Yellow;
//         Console.WriteLine("Em recuperação");
//     }

//     Console.ResetColor();

// }

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite a quarta nota: "));

if (nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10 ||
    nota4 < 0 || nota4 > 10) {
    alert("Digite somente notas entre 0 e 10.");

} else {
    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

    if (media >= 6 && media <= 10) {
        alert("Você ficou com média: " + media + ". Resultado: Aprovado(a)");
    } else if (media >= 5 && media < 6) {
        alert("Você ficou com média: " + media + ". Resultado: Em recuperação");
    } else if (media >= 0 && media < 5) {
        alert("Você ficou com média: " + media + ". Resultado: Reprovado(a)");
    }
}