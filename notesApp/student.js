const log=console.log;
const fs=require('fs');
const chalk=require('chalk');
const student={
    addStundent:function(name,id){
        let studentList=[];
        studentList=this.getStudentRecords();
        log(studentList);
        if(studentList.length==0)
        {
            let studentObjList=[{
                name:name,
                id:id
            }];
            try{
                fs.writeFileSync('./notesAppData.js',JSON.stringify(studentObjList));
                log(chalk.bgGreen.white.bold("Data inserted Successfully."));
            }
            catch(error){
                log(chalk.redBright.bgWhite.bold("Data Not inserted. Error :"+error));
            }
            
        }
        else{
            let searchStudentList=studentList.filter((student)=>{
                if(student.name==name && student.id==id)
                {
                    return true;
                }
                else{
                    return false;
                }
            });          
            if(searchStudentList.length>0)
            {
                log(chalk.redBright.bgWhite.bold("Duplicate Data found"));
            }
            else {
                let studentObj={
                    name:name,
                    id:id
                };
                studentList=[...studentList,studentObj];
                try{
                    fs.writeFileSync('./notesAppData.js',JSON.stringify(studentList));
                    log(chalk.bgGreen.white.bold("Data inserted Successfully.(Appended)"));
                }
                catch(error){
                    log(chalk.redBright.bgWhite.bold("Data Not inserted. Error :"+error))
                }
                
            }
        }
    },
    updateStudent:function(name,id){
        let studentList=[];
        studentList=this.getStudentRecords();
        if(studentList.length>0)
        {
            if(studentList.filter((student)=>{
                return student.id==id;
            }).length>0){
                let studentUpdated=false;
                studentList.forEach((student)=>{
                    if(student.id==id)
                    {
                        student.name=name;
                        student.id=id;
                        studentUpdated=true;
                        
                    }
                });
                if(studentUpdated)
                {
                    fs.writeFileSync('./notesAppData.js',JSON.stringify(studentList));
                    log(chalk.bgGreen.white.bold(`Record updated successfully`));
                }
                else{
                    log(chalk.bgRedBright.white.bold(`Record not updated successfully`));
                }
            }
        }
        else{
            log(chalk.bgRed.white.bold("No records available for updation."));
        }
    },
    getStudentRecords:function()
    {
        try{
            let dataBuffer =fs.readFileSync('./notesAppData.js');
            let studentListBuffer=dataBuffer.toString();
            let studentList=[];
            if(studentListBuffer.length!=0)
            {
                studentList=JSON.parse(studentListBuffer);
            }            
            if(studentList.length>0)
            {
                return studentList;
            }
            else{
                return [];
            }
        }
        catch(e)
        {
            log(e);
            return [];
        }
    },

    removeStudent:function(id){
        let studentList=[];
        studentList=this.getStudentRecords();
        if(studentList.length>0)
        {
            if(id!=null)
            {
                if(studentList.filter((student)=>student.id==id).length>0)
                {
                    let studentRemovedList=studentList.filter((student)=>student.id!=id);
                    if(studentRemovedList.length>0)
                    {
                        try{
                            fs.writeFileSync('./notesAppData.js',JSON.stringify(studentRemovedList));
                            log(chalk.bgGreen.white.bold("Data removed Successfully."));
                        }
                        catch(error){
                            log(chalk.redBright.bgWhite.bold("Data Not removed. Error :"+error));
                        }
                    }
                    else{
                        try{
                            fs.writeFileSync('./notesAppData.js',[]);
                            log(chalk.bgGreen.white.bold("Data removed Successfully."));
                        }
                        catch(error){
                            log(chalk.redBright.bgWhite.bold("Data Not removed. Error :"+error));
                        }
                        log(chalk.bgYellow.white.bold('No Data available after removal'))
                    }
                }

            }
        }
        else{
            log(chalk.bgRed.white.bold("No records available to delete."))
        }
    },

    getStudentList:function()
    {
        let studentList=[];
        studentList=this.getStudentRecords();
        if(studentList.length>0)
        { 
            log(chalk.white.italic(`Student List follows :`));
            studentList.forEach(student => {
                log(chalk.white.italic(`Student name :${student.name},Student id :${student.id}`));
            });
        }
        else{
            log(chalk.bgRed.white.bold('No records to be listed'));
        }
    }

}

module.exports=student;
