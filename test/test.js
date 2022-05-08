import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp);


describe('/POST user', () => {

    it('it should POST a user ', (done) => {
        let user = {
            email: "wiltses@csp.edu",
            password: "password4"
        }
          chai.request('http://localhost:5000/api/users')
          .post('/login')
          .send(user)
          .end((err, res) => {
              console.log("Status: " + res.status)
              console.log(res.res.text) 

            done();
            
          });
    });
});

