let cdi = 3.40;

let valor_investido = 0;
let valor_mensal = 0;

let rendimento_cdi= 100;
let prazo_mensal = 1;

//Calculando CDI BRUTO MENSAL//
const cdi_mensal = parseFloat(((( cdi * rendimento_cdi ) / 100) / 12).toFixed(2))



/*############################################################################################
     ATUALIZANDO OS DADOS CHAMANDO AS FUNÇÕES
############################################################################################*/


function Update_data(){

    //Atualizando os dados
    valor_investido = parseFloat(document.querySelector('#v_inicial').value)
    valor_mensal = parseFloat(document.querySelector('#v_mensal').value)
    
    rendimento_cdi = parseFloat(document.querySelector('#cdi_porcent').value)
    prazo_mensal = parseFloat(document.querySelector('#prazo').value)


    //Chamando as funções
    const juros_res = Juros(cdi_mensal, valor_investido, valor_mensal, prazo_mensal)
    const irrf_res = IRRF(juros_res[0], juros_res[1]);

    console.log(irrf_res)
}   


//Para mostrar os resultados
function Show(){
        
}

    
/*############################################################################################
   CALCULANDO O INVESTIMENTO + JUROS (SEM IRRF)
############################################################################################*/


function Juros(cdi, v_inicial, v_mensal = 0, prazo = 0){

    let valorBruto = v_inicial;
    let valorJuros = 0;

    //Verificando se os meses são maiores que 0
    if(prazo > 0){
        
        //Adicionando o valor + CDI mensal pra cada mês 
        for(i = 0; i < prazo; i++ ) {
            valorBruto += v_mensal;
            valorJuros += ( cdi * valorBruto ) / 100
        }
        
        return[parseFloat(valorBruto), parseFloat(valorJuros.toFixed(2))]
    }
    else{
        return[`Inválido`,`Inválido`]
    }
}


/*############################################################################################
           CALCULANDO IRRF (imposto)
############################################################################################*/

function IRRF(valor, juros){
    
    const irrf = ((juros * 22.5) / 100);
    const jurosirrf = juros - irrf;
    const valortotal = valor + jurosirrf;

    return {
        //Sem IRRF
        v_depositado: (valor).toFixed(2),
        juros: (juros).toFixed(2),
        total: (juros + valor).toFixed(2),

        //Com IRRF
        IRRF: irrf.toFixed(2),
        jurosIRRF: jurosirrf.toFixed(2),
        totalIRRF: valortotal.toFixed(2),
    }
}


/* 
    PRECISO RECEBER

    > Valor total depositado:
    > Juros que rendeu
    > Total SEM os impostos (IRRF)

    > Valor total dos impostos (IRRF)
    > Valor dos Juros COM desconto
    > Valor total dos rendimentos COM imposto descontado (IRRF)
 */