window.onload = () => {
    let Views = {
        home: {
            title: 'Index page',
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

    const Links = document.querySelectorAll(' .menu--item');
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');


    Links.forEach( link => {
        link.addEventListener('click', (event) =>{
            event.preventDefault();

            const url = event.target.attributes['href'].value;
            // console.log(url);            
            const viewData = Views[url.split('.')[0]]
            console.log(viewData);
        })
    })

    function renderContent(state){
        if( state ){
            
        }
    }
}