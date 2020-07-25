const yargslogger=require('yargs');
const student= require('./student');
notesApp=function(){
    yargslogger.command(
        {
            command:'addStudent',
            description:'Student add command',
            builder:{
                name:{
                    description:'Name of student',
                    demandOption:true,
                    type:'string'
                },
                id:{
                    description:'Id of student',
                    demandOption:true,
                    type:'string'
                }
            },
            handler:function(argv){
                student.addStundent(argv.name,argv.id);
            }
        }
    )
    yargslogger.command(
        {
            command:'updateStudent',
            description:'Student update command',
            builder:{
                name:{
                    description:'Name of student',
                    demandOption:true,
                    type:'string'
                },
                id:{
                    description:'Id of student',
                    demandOption:true,
                    type:'string'
                }
            },
            handler:function(argv){
                student.updateStudent(argv.name,argv.id);
            }
        }
    )
    yargslogger.command(
        {
            command:'removeStudent',
            description:'Student remove command',
            builder:{
                id:{
                    description:'Id of student',
                    demandOption:true,
                    type:'string'
                }
            },
            handler:function(argv){
                student.removeStudent(argv.id);
            }
        }
    )
    yargslogger.command(
        {
            command:'getStudentList',
            description:'Student list fetch command',
            builder:{
                
            },
            handler:function(argv){
                student.getStudentList();
            }
        }
    )
    yargslogger.parse();
};


module.exports = notesApp;
