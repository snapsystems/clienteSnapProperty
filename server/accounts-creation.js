Accounts.onCreateUser(function(options, user) {
   // Use provided profile in options, or create an empty object
   user.profile = options.profile || {};
   // Assigns first and last names to the newly created user object
   user.profile.nome = options.nome;
   user.profile.sobrenome = options.sobrenome;
   user.profile.cpf = options.cpf;
   user.profile.telefone = options.telefone;
   // Returns the user object
   return user;
});