import {Meteor} from 'meteor/meteor';

Meteor.methods({
    'createCustomUser': function(data) {
        // Check values against correct pattern.
        //pattern = { email: String, password: String }
        //check(user, pattern)

        //Do server side validation
        return Accounts.createUser({
                email: data.email,
                nome: data.nome,
                sobrenome: data.sobrenome,
                cpf: data.cpf,
                telefone: data.telefone,
                password: data.senha
            });
    }    
});