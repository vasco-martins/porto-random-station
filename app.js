const chooseStation = document.querySelector('.choose-station');
const currentStation = document.querySelector('.current-station');
const length = document.querySelector('.length');
const stations = ["Sr. de Matosinhos", "Mercado", "Brito Capelo", "Matosinhos Sul", "Câmara de Matosinhos", "Parque de Real", "Pedro Hispano", "Estádio do Mar", "Vasco da Gama", "Senhora da Hora", "Sete Bicas", "Via Rápida Viso", "Ramalde", "Francos", "Casa da Música", "Carolina Michaelis", "Lapa", "Trindade", "Bolhão", "24 Agosto", "Heroísmo", "Campanhã", "Estádio do Dragão", "Fonte do Cuco", "Custóias", "Esposade", "Crestins", "Pedras Rubras", "Fórum Maia", "Parque Maia", "Custió", "Araújo", "Pias", "Cândido dos Reis", "Câmara de Gaia", "General Torres", "Jardim do Morro", "São Bento", "Aliados", "Faria Guimarães", "Marquês", "Combatentes", "Salgueiros", "Polo Universitário", "João de Deus", "IPO", "Hospital São João", "Lidador", "Vilar do Pinheiro", "Modivas Sul", "Modivas Centro", "Mindelo", "Espaço Natureza", "Varziela", "Árvore", "Azurara", "Santa Clara", "Vila do Conde", "Alto de Pega", "Porta-Fronhas", "S. Brás", "Póvoa de Varzim", "Zona Industrial", "Mandim", "Castêlo da Maia", "ISMAI", "Verdes", "Botica", "Aeroporto", "D. João II", "Contumil", "Nasoni", "Nau Vitória ", "Levada", "Rio Tinto", "Campainha", "Baguim", "Carreira", "Venda Nova", "Fânzeres ", "Santo Ovídio", "VC Fashion Outlet – Modivas"];
let leftStations = JSON.parse(sessionStorage.getItem('leftStations'));


currentStation.innerHTML = sessionStorage.getItem('current');

if(leftStations) {
    length.innerHTML =  "Total: " +  leftStations.length + "/" + stations.length;
} else {
    length.innerHTML = "Total: 0/" + stations.length;
}

const selectStation = () => {

    leftStations = JSON.parse(sessionStorage.getItem('leftStations'));
    

    if(!leftStations) { 
        leftStations = [];
    }

    if(leftStations.length === stations.length) {
        return;
    }

    arr = stations.filter( function( el ) {
        return leftStations.indexOf( el ) < 0;
    });
    console.log(arr);

    let item = arr[Math.floor(Math.random() * arr.length)]
    
    leftStations.push(item);
    sessionStorage.setItem('current', item);
    sessionStorage.setItem('leftStations', JSON.stringify(leftStations));
    length.innerHTML = "Total: " + leftStations.length + "/" + stations.length;

    console.log('click')
    currentStation.innerHTML = item
}

const reset =  () => {
    sessionStorage.removeItem('current');
    sessionStorage.removeItem('leftStations');

    currentStation.innerHTML = '';
    length.innerHTML = "Total: 0/" + stations.length;

}
