const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    movies : [],
    fullName : function() {
      console.log(this.firstName + " " + this.lastName);
    },
    idIncrement: function(x)
    {
      this.id+=2;
    },
    addMovies: function(s)
    {
        this.movies.push(s);
    }
  };

  console.table(person);
  person.fullName();
  person.idIncrement(2);
  console.table(person);
  person.addMovies("Sholay");
  person.addMovies("Deewar");
  console.log(person.movies.length);