var createPet = function(name) {
    var sex;
  
    return {
      setName: function(name) {
        name = name;
      },
  
      getName: function() {
        return name;
      },
  
      getSex: function() {
        return sex;
      },
  
      setSex: function(newSex) {
        if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
          sex = newSex;
        }
      }
    }
  }
  
  var pet = createPet('Vivie');
  console.debug(pet.getName());                  // Vivie
  
  pet.setName('Oliver');
  pet.setSex('male');
  console.debug(pet.getSex());                   // male
  console.debug(pet.getName());                  // Oliver