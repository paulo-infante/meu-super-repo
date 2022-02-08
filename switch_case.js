let notaDoAluno = 10;

switch (notaDoAluno) {
    case notaDoAluno >= 7 && notaDoAluno <= 10:
        console.log("Aprovado(a)");
        break;

    case notaDoAluno >= 5 && notaDoAluno < 7:
        console.log("Lista!");
        break;

    case notaDoAluno < 5 && notaDoAluno >= 0:
        console.log("Reprovado(a).") ;
        break;

    default:
        console.log("Não se aplica!");
}