Template.register.events({
    'click #register-button': function(e, t) {
        e.preventDefault();
        // Retrieve the input field values
        var nome = $('#register-nome').val(),
            sobrenome = $('#register-sobrenome').val(),
            cpf = $('#register-cpf').val(),
            telefone = $('#register-telefone').val(),
            email = $('#register-email').val();
            senha = $('#register-senha').val();
            confirmarSenha = $('#register-confirmar-senha').val();

        var data = {
            nome: nome,
            sobrenome: sobrenome,
            cpf: cpf,
            telefone: telefone,
            email: email,
            senha: senha
        };

        // Trim Helper
        /*var trimInput = function(val) {
            return val.replace(/^\s*|\s*$/g, "");
        }
        var email = trimInput(email);

        // Check password is at least 6 chars long
        var isValidPassword = function(pwd, pwd2) {
            if (pwd === pwd2) {
                return pwd.length >= 6 ? true : false;
            } else {
                return swal({
                    title: "Passwords don't match",
                    text: "Please try again",
                    showConfirmButton: true,
                    type: "error"
                });
            }
        }*/

        // If validation passes, supply the appropriate fields to the
        //if (isValidPassword(password, passwordAgain)) { 
            return Meteor.call('createCustomUser', data, 'standard', function(err, userId) {
                if (!err) {
                    Meteor.loginWithPassword(data.email, data.senha, function(erro) {
                        if(!erro){
                            FlowRouter.go('/');
                        }else{
                            console.log(erro)
                        }
                    });
                } else {
                  console.log(err);
                }
            });
        //}

        return false;
    }
});