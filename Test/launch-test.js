const expect = require('chai').expect;

const getPlatformRequestBuilder = require('jovo-framework').util.getPlatformRequestBuilder;
const {send} = require('jovo-framework').TestSuite;

for (let rb of getPlatformRequestBuilder('AlexaSkill', 'GoogleActionDialogFlowV2')) {

  describe('Launch-Tests', () => {
    it('should introduce Youssef Moosa', () => {
        return send(rb.intent('LAUNCH'))
            .then((res) => {
                const matchedResponse = res.isTell
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
                expect(matchedResponse).to.equal(true);
            })
    })

    // Add more tests for this group here
  })

}

/*
                  'Meet Youssef. He is a student at the Ohio State University. ' +
                  'He loves long walks, and playing video games. ' +
                  'He has recently picked up CG art as a new hobby, and is learning ' +
                  'Blender in his free time. ' +
                  'While currently not a CSE major, he plans to apply as soon as he meets ' +
                  'the prerequisites. I am sure that you can see that he is very excited ' +
                  'to meet you and that he wishes more meetings were like this. ' +
                  'Thank you for listening. Have a good day.'
*/
