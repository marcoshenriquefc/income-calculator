
/*##############################################
            DECLARANDO VARIÁVEIS
##############################################*/
let cdi = 3.40;

let valor_investido = 100;
let valor_mensal = 0;

let rendimento_cdi= 100;
let prazo_mensal = 1;

//Calculando CDI BRUTO MENSAL//
const cdi_mensal = ((( cdi * rendimento_cdi ) / 100) / 12).toFixed(2)

Juros(cdi_mensal, valor_investido, valor_mensal, prazo_mensal)

let resultado = {}

/*##############################################
            CALCULANDO JUROS + MENSAL
##############################################*/

function Juros(cdi, v_inicial, v_mensal, prazo){

    let valorBruto = v_inicial;
    let valorJuros = 0;

    if(prazo > 0){
        for(i = 0; i < prazo; i++ ) {
            valorBruto += v_mensal;
            valorJuros += ( cdi * valorBruto ) / 100
        }
    }
    else{
        console.log(`Campo inválido`)
    }

    return[valorBruto, valorJuros]
    //IRRF(valorBruto, valorJuros)
}

let te = Juros();
console.log(te)

/*##############################################
           CALCULANDO IRRF (imposto)
##############################################*/

function IRRF(valor, juros){
    
    const depositado = valor;
    const juross = juros;
    const total = juros + valor;

    const irrf = (juros * 22.5) / 100;
    const jurosirrf = juros - irrf;
    const valortotal = valor + jurosirrf;

/*
    let resultado = {
        depositado: 0,
        juros: 0,
        total: 0,

        irrf: 0,
        juros_irrf: 0,
        total_irrf: 0
      };


    resultado.depositado = valor;
    resultado.juros = juros;
    resultado.total = (juros + valor)

    resultado.irrf = irrf
    resultado.juros_irrf = jurosirrf
    resultado.total_irrf = valortotal
*/

    return {
        depositado,
        juross,
        total
    }
}

function teste(){
    let a = 1
    let b = 4
    
    return { a, b}
}

let retorno = IRRF();



console.log(retorno)
