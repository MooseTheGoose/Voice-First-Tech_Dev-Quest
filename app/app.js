'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const config = {
    logging: true,
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        this.tell
        (
                  'Meet Youssef. He is a student at the Ohio State University. ' +
                  'He loves long walks, and playing video games. ' +
                  'He has recently picked up CG art as a new hobby, and is learning ' +
                  'Blender in his free time. ' +
                  'While currently not a CSE major, he plans to apply as soon as he meets ' +
                  'the prerequisites. I am sure that you can see that he is very excited ' +
                  'to meet you and that he wishes more meetings were like this. ' +
                  'Thank you for listening. Have a good day.'
        );
    },
});

module.exports.app = app;
