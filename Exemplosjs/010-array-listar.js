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
    /*
            for(let cont = 0; cont < alunos.length; cont++ )

            {console.log((cont + 1) +' º aluno: ');
            console.log('Nome: ' + alunos[cont].nome);
            console.log('Data de Nascimento: ' + alunos[cont].dt_nasc);
            console.log('Sexo: ' + alunos[cont].sexo);
            console.log('--------------------------------');}
*/

    // ou fazer como abaixo

    for(var cont in alunos)
    {console.log((parseInt(cont) + 1) +' º aluno: ');
    console.log('Nome: ' + alunos[cont].nome);
    console.log('Data de Nascimento: ' + alunos[cont].dt_nasc);
    console.log('Sexo: ' + alunos[cont].sexo);
    console.log('--------------------------------');}
    