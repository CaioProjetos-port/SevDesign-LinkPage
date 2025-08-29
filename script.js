
// SEÇÃO DO BODY

// botões das seções
const btn_links = document.getElementById('btn-links');
const btn_service = document.getElementById('btn-service');

// linhas das seções
const line_links = document.getElementById('links-line');
const line_service = document.getElementById('service-line');

// elementos das seções
const link_element = document.querySelectorAll('.links-element');
const service_element = document.querySelectorAll('.service-element');

// leitor de eventos nos botões
btn_links.addEventListener('click', () => {
    if (!btn_links.classList.contains('active')) {
        ActiveLinksSection();
        RmvElementesservice();
        AddElementsLinks();
    }
})

btn_service.addEventListener('click', () => {
    if (!btn_service.classList.contains('active')) {
        ActiveserviceSection();
        RmvElementsLinks();
        AddElementesservice();
    }
})

// funções para ativar e desativar botões
function ActiveLinksSection(){
        btn_links.classList.add('active');
        line_links.classList.add('active');
        btn_service.classList.remove('active');
        line_service.classList.remove('active');
}

function ActiveserviceSection(){
    btn_service.classList.add('active');
    line_service.classList.add('active');
    btn_links.classList.remove('active');
    line_links.classList.remove('active');
}

// funções para remover e adicionar elementos
function RmvElementsLinks(){
    for (let i = 0; i < link_element.length; i++) {
        link_element[i].style.display = 'none';
    }
}

function RmvElementesservice(){
    for (let i = 0; i < service_element.length; i++) {
        service_element[i].style.display = 'none';
    }
}

function AddElementsLinks(){
    for (let i = 0; i < link_element.length; i++) {
        link_element[i].style.display = 'flex';
    }
}

function AddElementesservice(){
    for (let i = 0; i < service_element.length; i++) {
        service_element[i].style.display = 'flex';
    }
}