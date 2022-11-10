function community(app) {
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Community';
    app.search.input.style.display = 'none';
    app.main.support = app.createElement(
        'div', 
        [
            app.createElement('section', [
                app.createElement('p', 'No community.', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
                    app.createElement('p', 'There is no community turn back.', {
                        style: {
                            'margin-bottom': '0'
                        }
                    }),
            ], {
                class: 'data-section'
            }),
            
        ]);
        app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function(){
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { community };
