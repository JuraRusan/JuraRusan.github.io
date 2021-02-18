// You can comment this JS out and the app will still work.
(function() {
    var app = {
      'routes': {

        'the-default-view': {
          'rendered': function() {
            console.log('view currently showing is "the-default-view"');
            app.preventScroll();
          }
        }, 

        'start': {
          'rendered': function() {
            console.log('view currently showing is "start"');
            app.preventScroll();
          }
        },
                
        'support-the-project': {
          'rendered': function() {
            console.log('view currently showing is "support-the-project"');
            app.preventScroll();
          }
        },
                
        'mods': {
          'rendered': function() {
            console.log('view currently showing is "mods"');
            app.preventScroll();
          }
        },

        'galerry-new-year': {
          'rendered': function() {
            console.log('view currently showing is "galerry-new-year"');
            app.preventScroll();
          }
        },

        'resourses': {
          'rendered': function() {
            console.log('view currently showing is "resourses"');
            app.preventScroll();
          }
        },

        'command-server': {
          'rendered': function() {
            console.log('view currently showing is "command-server"');
            app.preventScroll();
          }
        },
        
      },
      'default': 'the-default-view',
      'preventScroll': function() {
        document.querySelector('html').scrollTop = 0;
        document.querySelector('body').scrollTop = 0;
      },
      'routeChange': function() {
        app.routeID = location.hash.slice(1);
        app.route = app.routes[app.routeID];
        app.routeElem = document.getElementById(app.routeID);
        app.route.rendered();
      },
      'init': function() {
        window.addEventListener('hashchange', function() {
          app.routeChange();
        });
        if (!window.location.hash) {
          window.location.hash = app.default;
        } else {
          app.routeChange();
        }
      }
    };
    window.app = app;
  })();
  
  app.init();