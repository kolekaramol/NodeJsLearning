const yargslogger = require('yargs')
//customize yargs version
yargslogger.version('1.1.1');
yargslogger.command(
    {
        command:'addStudent',
        describe:'Commands for adding student',
        builder:{
            name:{
                describe:'name of student',
                demandOption: true,
                type: 'string'
            },
            id:{
                describe:'student id',
                demandOption: true,
                type: 'string'
            }
        },
        handler:function(argv){
            console.log(argv.name);
            console.log(argv.id);
        }
    }
)
yargslogger.parse();