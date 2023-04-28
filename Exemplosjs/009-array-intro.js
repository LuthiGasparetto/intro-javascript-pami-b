
    console.log('Exemplo array');
    let notas = [9, 8.5, 7];
    console.log(notas);
    console.log('1ª nota: ' + notas[0]);
    console.log('1ª nota: ' + notas[1]);
    console.log('1ª nota: ' + notas[2]);

    // editar posições array
    notas[0] = 'MB';
    notas[1] = 'MB';
    notas[2] = 'B';
    console.log('Notas convertidas');
    console.log(notas[0] + ' - ' + notas[1] + ' - ' + notas[2]);
    
    let alunos = [
{
            nome: 'Luthi Gasparetto',
            dt_nasc: '11/11/1995',
            sexo: 'M'
},
           { nome: 'senhorinha dos Santos',
            dt_nasc: '03/10/1982',
            sexo: 'F'
        },
           { nome: 'Joao Bastiao',
            dt_nasc: '14/05/1968',
            sexo: 'M'
        },
            { nome: 'Maria da Silva',
            dt_nasc: '01/03/1977',
            sexo: 'F'
        },

    ];

        console.log('3º aluno: ');
        console.log('Nome: ' + alunos[2].nome);
        console.log('Data de Nascimento: ' + alunos[2].dt_nasc);
        console.log('Sexo: ' + alunos[2].sexo);