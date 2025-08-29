
// SEÇÃO DO BODY

{
    // botões das seções
    const btn_links = document.getElementById('btn-links');
    const btn_blog = document.getElementById('btn-blog');

    // linhas das seções
    const line_service = document.getElementById('links-line');
    const line_blog = document.getElementById('blog-line');

    // elementos das seções
    const link_element = document.querySelectorAll('.links-element');
    const blog_element = document.querySelectorAll('.blog-element');

    // leitor de eventos nos botões
    btn_links.addEventListener('click', () => {
        if (!btn_links.classList.contains('active')) {
            ActiveLinksSection();
            RmvElementesBlog();
            AddElementsLinks();
        }
    })

    btn_blog.addEventListener('click', () => {
        if (!btn_blog.classList.contains('active')) {
            ActiveBlogSection();
            RmvElementsLinks();
            AddElementesBlog();
        }
    })

    // funções para ativar e desativar botões
    function ActiveLinksSection(){
            btn_links.classList.add('active');
            line_service.classList.add('active');
            btn_blog.classList.remove('active');
            line_blog.classList.remove('active');
    }

    function ActiveBlogSection(){
        btn_blog.classList.add('active');
        line_blog.classList.add('active');
        btn_links.classList.remove('active');
        line_service.classList.remove('active');
    }

    // funções para remover e adicionar elementos
    function RmvElementsLinks(){
        for (let i = 0; i < link_element.length; i++) {
            link_element[i].style.display = 'none';
        }
    }

    function RmvElementesBlog(){
        for (let i = 0; i < blog_element.length; i++) {
            blog_element[i].style.display = 'none';
        }
    }

    function AddElementsLinks(){
        for (let i = 0; i < link_element.length; i++) {
            link_element[i].style.display = 'flex';
        }
    }
    
    function AddElementesBlog(){
        for (let i = 0; i < blog_element.length; i++) {
            blog_element[i].style.display = 'flex';
        }
    }
}