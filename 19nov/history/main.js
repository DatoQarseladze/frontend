window.onload = () => {
    let Views = {
        home: {
            title: 'index page',
            url: './views/home.html',
            content:''
        },

        contact: {
            title: 'Contact page',
            url: './views/contact.html',
            content:''
        },

        portfolio: {
            title: 'Portfolio page',
            url: './views/portfolio.html',
            content:''
        },

        about_us: {
            title: 'AboutUs page',
            url: './views/about_us.html',
            content:''
        }
    }

    const Links = document.querySelectorAll('.menu--item');
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');


    Links.forEach( link => {
        link.addEventListener('click', (event) =>{
            event.preventDefault();

            const url = event.target.attributes['href'].value;
            const viewData = Views[url.split('.')[0]]
            console.log(viewData);

            renderContent(viewData);
            history.pushState(viewData, viewData.title);
        })
    })

    function renderContent(state){
        if( state ){
            document.title = state.title;
            titleElement.innerHTML = state.title;
            contentElement.innerHTML = state.content; 
        }
    }
    
    window.addEventListener('popstate', function(event) {
        console.log(event);
    })


    renderContent(Views.home);


    history.replaceState( Views.home, Views.home.title, )

}
