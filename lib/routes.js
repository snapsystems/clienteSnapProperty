import {FlowRouter} from 'meteor/kadira:flow-router';

FlowRouter.route('/',{
    name:'login',
    action(){
        if(Meteor.userId()){
            BlazeLayout.render('MainLayout',{main:'captacao-lista'});
        }else{
        	BlazeLayout.render('LoginLayout',{login:'login'});
        }
    }
});

FlowRouter.route('/register',{
    name:'register',
    action(){
        BlazeLayout.render('LoginLayout',{login:'register'});
    }
});