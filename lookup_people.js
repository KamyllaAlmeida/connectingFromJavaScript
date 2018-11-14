var myArgs = process.argv.slice(2)[0];
 console.log('myArgs: ', myArgs);

 const db = require("./test_script.js");

function getAllUsers(name, done /* our callback */) {
  var teste = 'Abraham';
  db.connect((error, client) => {
    client.query(`SELECT * FROM famous_people where first_name like $1::text;`,[name], (err, users) => {
      if(err) {
      console.log("ERROR:", err );
      } else {
        console.log('Śearching...');
        done(users.rows);
      //db.end()
    }
    });
  });
}

getAllUsers(myArgs, (users) => {
  var i = 0;
  while(i < users.length){
    console.log((i+1) + ":" + users[i].first_name + users[i].last_name + ", born " + users[i].birthdate.toLocaleDateString());
    i++;
    //console.log(users);
  }

});

