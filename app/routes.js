var User            = require('./models/user');
var Date            = require('./models/date');
var Hogan           = require('hogan.js')
var fs              = require('fs');
var jwt             = require('jsonwebtoken');
var secret          = "negus";
const Nexmo         = require('nexmo')
var nodemailer      = require('nodemailer');
var text            = require('textbelt');
var opts            = {};
opts.region         = 'intl'

var client = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "t.brixton",
        pass: 5613111111
    }
});

const nexmo = new Nexmo({
    apiKey: "77cb479c",
    apiSecret: "v9aUDYrRVOEMYIDA"
})

module.exports = function (app) {

    app.post('/users/addbooking', function (req, res) {

  

        User.findOne({ _id: req.body.id }, function(err,user){

            if(err)throw err;

            if(!user){

                res.json( { success: false, message: "User not found..." } ) 

            }else{

                req.body.bookingposition    = user.bookings.length;
                console.log("REQ.BODY.BOOKINGPOSITION", req.body.bookingposition)
                req.body.completed          = false;
                user.calender["88"]["22"]   = true;

                User.findOneAndUpdate( { _id: req.body.id }, { $push: { bookings: req.body }, $set: { calender: user.calender} }, { new: true }, function (err, user) {

                    if (err) throw err;
        
                    if (!user) {
        
                        res.json( { success: false, message: "User not found" } )
        
                    } else {
        
                        res.json( { success: true, message: "Booking Added To User Successfully...", user: user } )

                    }
        
                })
            }
        })

    })
    app.post('/users/deletebooking/', function(req,res){

        console.log("LGALD")
        console.log(req.body)

        User.findOne({_id:req.body.id}, function(err, user){

            if(err)throw err;

            if(!user){

                res.json( {success: false, message:"User Not Found..."} )

            }else{
                console.log(user)
                if(!user.bookings[req.body.currentbooking].completed){
                    console.log("REQ.BODY.CURRETNBOOKING", req.body.currentbooking)
                    console.log(user.bookings)
                    user.bookings.splice(user.bookings[req.body.currentbooking], 1)
                    console.log(user.bookings)

                    user.calender["88"]["22"] = false;

                    User.findOneAndUpdate( { _id: req.body.id }, { $set:{ bookings: user.bookings } }, { new: true}, function(err, user){

                        console.log("EDFLSKJDLKFJKSLDJFLSDJLFJKLSDJFSD")

                        if(err)throw err;

                        if(!user){

                            res.json( {success: false, message: "User not found..."} )

                        }else{

                            Date.findOne({ _id: "5bf4f0a4b8f53129ecbc13a0" } , function(err, date){
  
                                
                                if(req.body.appointmentType == "Check-Up!"){
        
                                    if (req.body.time == "8:00am - 8:10am") {
        
                                        console.log("8:00am")

                                        date[req.body.hour].state[0] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
        
                                    }

                                    if (req.body.time == "9:00am - 9:10am") {
                
                                        console.log("9:00")

                                        date[req.body.hour].state[0] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
        
                                    }
        
                                    if (req.body.time == "8:10am - 8:20am") {
        
                                        console.log("8:10am")

                                        date[req.body.hour].state[1] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }

                                    if (req.body.time == "9:10am - 9:20am") {
                
                                        date[req.body.hour].state[1] = 0;

                                        console.log("9:10")

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }
        
                                    if (req.body.time == "8:20am - 8:30am") {
        
                                        console.log("8:20am")

                                        date[req.body.hour].state[2] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }

                                    if (req.body.time == "9:20am - 9:30am") {
                
                                        console.log("9:20am")

                                        date[req.body.hour].state[2] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }
        
                                    if (req.body.time == "8:30am - 8:40am") {
        
                                        console.log("8:30am")

                                        date[req.body.hour].state[3] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }

                                    if (req.body.time == "9:30am - 9:40am") {
                                        
                                        console.log("9:30am")

                                        date[req.body.hour].state[3] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }
        
                                    if (req.body.time == "8:40am - 8:50am") {
        
                                        console.log("8:40am")

                                        date[req.body.hour].state[4] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }

                                    if (req.body.time == "9:40am - 9:50am") {

                                        console.log("9:40am")

                
                                        date[req.body.hour].state[4] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({ success: true, message:"Date Found And Updated..", date:date })
                
                                            }
                        
                                        })
                
                                    }
        
                                    if (req.body.time == "8:50am - 9:00am") {

                                        console.log("8:50am")

                                        date[req.body.hour].state[5] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }

                                    if (req.body.time == "9:50am - 10:00am") {

                                        console.log("9:50am")
        
                                        date[req.body.hour].state[5] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }
        
                                }
        
                                if(req.body.appointmentType == "Session!"){
                                    
                                    
                                    if (req.body.time == "8:00am - 8:50am") {
        
                                        date[req.body.hour].state[0] = 0;
                                        date[req.body.hour].state[1] = 0;
                                        date[req.body.hour].state[2] = 0;
                                        date[req.body.hour].state[3] = 0;
                                        date[req.body.hour].state[4] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }

                                    if (req.body.time == "9:00am - 9:50am") {
                
                                        date[req.body.hour].state[0]  = 0;
                                        date[req.body.hour].state[1]  = 0;
                                        date[req.body.hour].state[2]  = 0;
                                        date[req.body.hour].state[3]  = 0;
                                        date[req.body.hour].state[4]  = 0;   
                                        
                                        console.log("HOSHI")
                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }
        
                                    if (req.body.time == "8:10am - 9:00am") {

                                        if(date[req.body.hour].state[0] === 3 
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                        
                                         }
        
                                        date[req.body.hour].state[req.body.slot]     = 0;
                                        date[req.body.hour].state[req.body.slot +1]  = 0;
                                        date[req.body.hour].state[req.body.slot +2]  = 0;
                                        date[req.body.hour].state[req.body.slot +3]  = 0;
                                        date[req.body.hour].state[req.body.slot +4]  = 0;
                                        date['nine'].state[0]                        = 0;  
                                        
                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }

                                    if (req.body.time == "9:10am - 10:00am") {

                                        if(date[req.body.hour].state[0] === 3 
                                        ){
 
                                             date[req.body.hour].state[0] = 0
 
                                         }
                
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;
                                        date[req.body.hour].state[req.body.slot +3] = 0;
                                        date[req.body.hour].state[req.body.slot +4] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:20am - 9:10am") {

                                        if(date[req.body.hour].state[0] === 3 ||
                                            date[req.body.hour].state[1] === 3 
                                         
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                           
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;
                                        date[req.body.hour].state[req.body.slot +3] = 0;
                                        date['nine'].state[req.body.slot]           = 0;  
                                        date['nine'].state[1]                       = 0;  


                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }

                                    if (req.body.time == "9:20am - 10:10am") {

                                        
                                        if(date[req.body.hour].state[0] === 3 ||
                                           date[req.body.hour].state[1] === 3 
                                        )   
                                        {

                                            date[req.body.hour].state[0] = 0
                                            date[req.body.hour].state[1] = 0
                                  

                                        }
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;
                                        date[req.body.hour].state[req.body.slot +3] = 0;
                                        date['ten'].state[req.body.slot]  = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:30am - 9:20am") {

                                        if(date[req.body.hour].state[0] === 3 ||
                                            date[req.body.hour].state[1] === 3 ||
                                            date[req.body.hour].state[2] === 3 
                         
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                        
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]      = 0;
                                        date[req.body.hour].state[req.body.slot +1]   = 0;
                                        date[req.body.hour].state[req.body.slot +2]   = 0;
                                        date['nine'].state[req.body.slot]    = 0;
                                        date['nine'].state[req.body.slot +1] = 0;
                                        date['nine'].state[2]                 = 0;  
  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }

                                    if (req.body.time == "9:30am - 10:20am") {

                                        if(date[req.body.hour].state[0] === 3 ||
                                            date[req.body.hour].state[1] === 3 ||
                                            date[req.body.hour].state[2] === 3 
                                
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
 
                                         }
                
                                        date[req.body.hour].state[req.body.slot]      = 0;
                                        date[req.body.hour].state[req.body.slot +1]   = 0;
                                        date[req.body.hour].state[req.body.slot +2]   = 0;
                                        date['ten'].state[req.body.slot]    = 0;
                                        date['ten'].state[req.body.slot +1] = 0;  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:40am - 9:30am") {

                                        if(date[req.body.hour].state[0] === 3 ||
                                            date[req.body.hour].state[1] === 3 ||
                                            date[req.body.hour].state[2] === 3 ||
                                            date[req.body.hour].state[3] === 3 
                                             ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
               
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]        = 0;
                                        date[req.body.hour].state[req.body.slot +1]     = 0;
                                        date['nine'].state[req.body.slot]               = 0;
                                        date['nine'].state[req.body.slot +1]            = 0;
                                        date['nine'].state[req.body.slot +2]            = 0;  
                                        date['nine'].state[3]                           = 0;  
  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }

                                    if (req.body.time == "9:40am - 10:30am") {
                                        
                                        console.log("here")
                                        if(date[req.body.hour].state[0]  === 3 ||
                                            date[req.body.hour].state[1] === 3 ||
                                            date[req.body.hour].state[2] === 3 ||
                                            date[req.body.hour].state[3] === 3 
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
 
                                         }
                     
                                        date[req.body.hour].state[req.body.slot]        = 0;
                                        date[req.body.hour].state[req.body.slot +1]     = 0;
                                        date['ten'].state[req.body.slot]                = 0;
                                        date['ten'].state[req.body.slot +1]             = 0;
                                        date['ten'].state[req.body.slot +2]             = 0;  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:50am - 9:40am") {

                                        if( date[req.body.hour].state[0]  === 3 ||
                                            date[req.body.hour].state[1]  === 3 ||
                                            date[req.body.hour].state[2]  === 3 ||
                                            date[req.body.hour].state[3]  === 3 ||
                                            date[req.body.hour].state[4]  === 3 ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
                                             date[req.body.hour].state[4] = 0
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]        = 0;
                                        date['nine'].state[req.body.slot]               = 0;
                                        date['nine'].state[req.body.slot +1]            = 0;
                                        date['nine'].state[req.body.slot +2]            = 0;
                                        date['nine'].state[req.body.slot +3]            = 0; 
                                        date['nine'].state[4]                           = 0;  


                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }

                                    if (req.body.time == "9:50am - 10:40am") {

                                        if(date[req.body.hour].state[0] === 3 ||
                                           date[req.body.hour].state[1] === 3 ||
                                           date[req.body.hour].state[2] === 3 ||
                                           date[req.body.hour].state[3] === 3 ||
                                           date[req.body.hour].state[4] === 3 ){

                                            date[req.body.hour].state[0] = 0
                                            date[req.body.hour].state[1] = 0
                                            date[req.body.hour].state[2] = 0
                                            date[req.body.hour].state[3] = 0
                                            date[req.body.hour].state[4] = 0

                                        }
                                        date[req.body.hour].state[0]                    = 0
                                        date[req.body.hour].state[req.body.slot]        = 0;
                                        date['ten'].state[req.body.slot]                = 0;
                                        date['ten'].state[req.body.slot +1]             = 0;
                                        date['ten'].state[req.body.slot +2]             = 0;
                                        date['ten'].state[req.body.slot +3]             = 0;        

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                }
        
                                if(req.body.appointmentType == "Discovery!"){
        
                                    if (req.body.time == "8:00am - 8:30am") {

        
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
                                    if (req.body.time == "9:00am - 9:30am") {
                
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                
                                    }
        
                                    if (req.body.time == "8:10am - 8:40am") {

                                        if(date[req.body.hour].state[0] === 2 ){
 
                                             date[req.body.hour].state[0] = 0
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
                                    if (req.body.time == "9:10am - 9:40am") {
                
                                        if(date[req.body.hour].state[0] === 2 ){
 
                                             date[req.body.hour].state[0] = 0
                              
 
                                         }
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:20am - 8:50am") {

                                        if(date[req.body.hour].state[0]  === 2 ||
                                            date[req.body.hour].state[1] === 2 
                                            ){
 
                                             date[req.body.hour].state[0] = 0;
                                             date[req.body.hour].state[1] = 0;
                                          
                                         }
        
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;  

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
                                    if (req.body.time == "9:20am - 9:50am") {

                                        if(date[req.body.hour].state[0]  === 2 ||
                                            date[req.body.hour].state[1] === 2
                                          ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                           
 
                                         }
                
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0;  
                                        
                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:30am - 9:00am") {

                                        if(date[req.body.hour].state[0] === 2 ||
                                            date[req.body.hour].state[1] === 2 ||
                                            date[req.body.hour].state[2] === 2 
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                                   
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0; 
                                        date['nine'].state[0]                        = 0;  


                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
                                    if (req.body.time == "9:30am - 10:00am") {

                                        if(date[req.body.hour].state[0] === 2 ||
                                            date[req.body.hour].state[1] === 2 ||
                                            date[req.body.hour].state[2] === 2 
                                            ){
 
                                             date[req.body.hour].state[0] = 0
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                     
 
                                         }
                
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date[req.body.hour].state[req.body.slot +2] = 0; 

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
                                    if (req.body.time == "8:40am - 9:10am") {

                                        if(
                                            date[req.body.hour].state[1] === 2 ||
                                            date[req.body.hour].state[2] === 2 ||
                                            date[req.body.hour].state[3] === 2 
                                           ){
 
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date['nine'].state[req.body.slot]  = 0;    
                                        date['nine'].state[1]

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }

                                    if (req.body.time == "9:40am - 10:10am") {
                
                
                                        if(
                                            date[req.body.hour].state[1] === 2 ||
                                            date[req.body.hour].state[2] === 2 ||
                                            date[req.body.hour].state[3] === 2 
                                           ){
 
                                             date[req.body.hour].state[1] = 0
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
 
                                         }
                                        date[req.body.hour].state[req.body.slot]    = 0;
                                        date[req.body.hour].state[req.body.slot +1] = 0;
                                        date['ten'].state[req.body.slot]            = 0; 

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })
                                                       
                                    }
        
                                    if (req.body.time == "8:50am - 9:20am") {

                                        
                                        if(
                                            date[req.body.hour].state[2] === 2 ||
                                            date[req.body.hour].state[3] === 2 ||
                                            date[req.body.hour].state[4] === 2 
                                           ){
 
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
                                             date[req.body.hour].state[4] = 0
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]        = 0;
                                        date['nine'].state[0]                        = 0;  
                                        date['nine'].state[1]                        = 0;  
                                        date['nine'].state[2]                        = 0;  

 

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
                          
                                    if (req.body.time == "9:50am - 10:20am") {

                                        
                                        if(
                                            date[req.body.hour].state[2] === 2 ||
                                            date[req.body.hour].state[3] === 2 ||
                                            date[req.body.hour].state[4] === 2 
                                           ){
 
                                             date[req.body.hour].state[2] = 0
                                             date[req.body.hour].state[3] = 0
                                             date[req.body.hour].state[4] = 0
 
                                         }
        
                                        date[req.body.hour].state[req.body.slot]        = 0;
                                        date['ten'].state[req.body.slot]                = 0;
                                        date['ten'].state[req.body.slot +1]             = 0;   

                                        Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){
        
                                            if(err)throw err;
        
                                            if(!date){
        
                                                res.json({success: false, message:"Date Not Found.."})
        
                                            }else{
                
                                                res.json({success: true, message:"Date Found And Updated..", date:date})
                
                                            }
                        
                                        })

                                    }
        
        
        
                                }
        
                            })

                        }

                    })
                    
                }else{

                    user.bookings.splice(user.bookings[req.body.currentbooking],1)
                    user.calender["88"]["22"] = false;

                    User.findOneAndUpdate( { _id: req.body.id }, { $set:{ bookings: user.bookings } }, { new: true}, function(err, user){

                        if(err)throw err;
                        if(!user){

                            res.json( {success: false, message: "User not found..."} )

                        }else{

                            res.json( { success: false, message: "User Found And Updated...", user: user})

                        }

                    })

                }

            }

        })

    })
    app.put('/users/getcurrentuser/:id', function (req, res) {
        User.findOne({ _id: req.params.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found" })
            } else {
                res.json({ success: true, message: "User found", user: user })
            }
        })
    })
    app.post('/users/addwellnessintake', function (req, res) {
        User.findOneAndUpdate({ _id: req.body.id }, { $set: { wellnessintake: req.body } }, { new: true }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                res.json({ success: true, message: "User found and updated...", user: user })
            }
        })
    })
    app.post('/users/addintake', function (req, res) {
        User.findOneAndUpdate({ _id: req.body.id }, { $set: { intake: req.body } }, { new: true }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                User.findOneAndUpdate({ _id: "5c007bd92275332a70bb109a" }, { $push: { adminintakes: req.body } }, { new: true }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User not found.." })
                    } else {
                        res.json({ success: true, message: "Intake added to admin intakes", user: user })
                    }
                })
                //res.json({success: true, message:"User found and updated...", user:user})
            }
        })
    })
    app.post('/users/messageadmin', function (req, res) {
        console.log(req.body.month)
        console.log(req.body.datecondensed)
        User.findOne({ _id: req.body.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                // user.calender[req.body.month][req.body.datecondensed]= true
                console.log("i'm here")

                User.findOneAndUpdate({ _id: req.body.id }, { $push: { messages: req.body } }, { new: true }, function (err, user) {

                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User not found" })
                    } else {
                        res.json({ success: true, message: "Message Successfully Sent", user: user })
                    }

                })
            }
        })


    })
    app.post('/users/markascomplete', function (req, res) {
        User.findOne({ _id: req.body.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found" })
            } else {
                user.bookings[req.body.bookingIndex].completed = true;
                User.findOneAndUpdate({ _id: req.body.id }, { $set: { bookings: user.bookings } }, { new: true }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User not found..." })
                    } else {
                        res.json({ success: true, message: "User found and updated..", user: user })
                    }
                })
            }
        })
    })
    app.post('/users/markasincomplete', function (req, res) {
        User.findOne({ _id: req.body.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found" })
            } else {
                user.bookings[req.body.bookingIndex].completed = false;
                User.findOneAndUpdate({ _id: req.body.id }, { $set: { bookings: user.bookings } }, { new: true }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User not found..." })
                    } else {
                        res.json({ success: true, message: "User found and updated..", user: user })
                    }
                })
            }
        })
    })
  
    app.post('/users/markbookingascompleted', function (req, res) {

        console.log("REQUEST BODY")
        console.log(req.body)

        User.findOne({ _id: req.body.id }, function (err, user) {

            if (err) throw err;

            if (!user) {

                res.json({ success: false, message: "User not found..." })
                
            } else {

                console.log("user")
                console.log(user.bookings[req.body.currentbooking])

                user.bookings[req.body.currentbooking].completed = true;

                User.findOneAndUpdate({ _id: req.body.id }, { $set: { bookings: user.bookings } }, { new: true }, function (err, user) {

                    if (err) throw err;

                    if (!user) {

                        res.json({ success: false, message: "User not found.." })

                    } else {

                        res.json({ success: true, message: "User Bookings Successfully Updated...", user: user })

                    }

                })

            }

        })

    })
    app.post('/users/markbookingasnotcompleted', function (req, res) {

        console.log("REQUEST BODY")
        console.log(req.body)

        User.findOne({ _id: req.body.id }, function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {

                console.log("user")
                console.log(user.bookings[req.body.currentbooking])
                user.bookings[req.body.currentbooking].completed = false;

                User.findOneAndUpdate({ _id: req.body.id }, { $set: { bookings: user.bookings } }, { new: true }, function (err, user) {

                    if (err) throw err;

                    if (!user) {

                        res.json({ success: false, message: "User not found.." })

                    } else {

                        res.json({ success: true, message: "User Bookings Successfully Updated...", user: user })

                    }
                })

            }

        })

    })
    app.post('/user/cleardatabase', function(req,res){

        Date.findOne({_id:"5bf4f0a4b8f53129ecbc13a0"}, function(err,date){

            if(err)throw err;
            if(!date){

                res.json({message: "Date Not Found..."})

            }else{

                date['eight'].state = [0,0,0,0,0,0];
                date['nine'].state  = [0,0,0,0,0,0];

                Date.findOneAndUpdate({_id: "5bf4f0a4b8f53129ecbc13a0" }, { $set: {eight: date['eight'] , nine: date['nine']} }, {new:true}, function(err,date){

                    if(err)throw err;

                    if(!date){

                        res.json({success: false, message:"Date Not Found.."})

                    }else{


                        User.findOne( {_id: "5f3c30e99f40852b3663e127" }, function(err, user){

                            if(err) throw err;
                            if(!user){

                                res.json( { success: false, message: "User not found.."} )

                            }else{

                                user.bookings = [];

                                User.findOneAndUpdate( { _id: "5f3c30e99f40852b3663e127" }, { $set: { bookings: user.bookings } }, { new: true}, function(err, user){

                                    if(err)throw err;

                                    if(!user){
                                        
                                        res.json({success: false, message: "User not found..."})

                                    }else{

                                        res.json( { success: true, message: "User Found And Updated...", user: user})

                                    }

                                })

                            }

                        })
                    }

                })

            }

        })

    })
    app.post('/months/updatedatenexthour', function (req, res) {

        Date.findOne({ _id: req.body.id }, function (err, date) {
            if (err) throw err;
            if (!date) {
                res.json({ success: false, message: "Date not found.." })
            } else {
                console.log(date)
                date[req.body.hour].state = req.body.dateInfo
                date[req.body.nexthour].state = req.body.dateInfoNextHour
                console.log(date[req.body.hour].state)
                if (req.body.hour == 'eight') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { eight: date[req.body.hour], nine: date[req.body.nexthour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'nine') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { nine: date[req.body.hour], ten: date[req.body.nexthour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }

            }

        })
    })
    app.post('/months/updatedate', function (req, res) {
       
        console.log("req.body.hour")
        console.log(req.body.hour)
        console.log("req.body.dateInfo")
        console.log(req.body.dateInfo)

        Date.findOne({ _id: req.body.id }, function (err, date) {

            if (err) throw err;

            if (!date) {

                res.json({ success: false, message: "Date not found.." })

            } else {

                console.log(date['ten'])
                date[req.body.hour].state = req.body.dateInfo
                console.log(date[req.body.hour].state)

                if (req.body.hour == 'eight') {

                    console.log("Should be here...")


                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { eight: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;

                        if (!date) {

                            res.json({ success: false, message: "Date not found..." })

                        } else {

                            res.json({ success: true, message: "Date Found And Updated...", date: date })

                        }


                    })

                }

                if (req.body.hour == 'nine') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { nine: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'ten') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { ten: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'eleven') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { eleven: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'twelve') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { twelve: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'one') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { one: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'two') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { two: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                if (req.body.hour == 'three') {

                    Date.findOneAndUpdate({ _id: req.body.id }, { $set: { three: date[req.body.hour] } }, { new: true }, function (err, date) {

                        if (err) throw err;
                        if (!date) {
                            res.json({ success: false, message: "Date not found..." })
                        } else {
                            res.json({ success: true, message: "Date Found And Updated...", date: date })
                        }


                    })

                }
                /* 
 */

            }

        })
    })
    app.put('/months/getdate/:id', function (req, res) {

        console.log("req.params", req.params)


        Date.findOne({ _id: req.params.id }, function (err, date) {
            if (err) throw err;
            if (!date) {
                res.json({ success: false, message: "Date not found.." })
            } else {
                res.json({ success: true, message: "Date found..", date: date })
            }
        })

    })
    app.post('/months/createdate', function (req, res) {

        var date = new Date()
        date[1] = [1, 1, 1, 1, 1, 1],
            date[2] = [1, 1, 1, 1, 1, 1],
            date[3] = [1, 1, 1, 1, 1, 1],
            date[4] = [1, 1, 1, 1, 1, 1],
            date[5] = [1, 1, 1, 1, 1, 1],
            date[6] = [1, 1, 1, 1, 1, 1],
            date[7] = [1, 1, 1, 1, 1, 1],
            date[8] = [1, 1, 1, 1, 1, 1]
        date.name = req.body.name,
            date.month = req.body.month,
            date.date = req.body.date
        date.save(function (err, date) {

            if (err) {
                res.json({ success: false, message: "Save failed...", err: err })
            } else {
                res.json({ success: true, message: "Successful save...", date: date })
            }


        })

    })
    app.put('/users/findbytoken/:token', function (req, res) {

        User.findOne({ resettoken: req.params.token }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found." })
            } else {
                res.json({ success: true, message: "User found..", user: user })
            }
        })
    })
    app.post('/users/savepassword', function (req, res) {

        console.log(req.body)
        User.findOne({ name: req.body.name }).select('username name password resettoken email').exec(function (err, user) {

            if (err) throw err;
            if (req.body.password == null || req.body.password == "") {

                res.json({ success: false, message: "Password not provided..." })

            } else {

                console.log(user)
                user.password = req.body.password;
                user.resettoken = false;
                user.save(function (err) {
                    if (err) {
                        res.json({ success: false, message: err });
                    } else {

                        res.json({ success: true, message: "Password has been reset..." })
                    }

                });
            }
        })
    });
    app.post('/users/resetpassword', function (req, res) {

        User.findOne({ username: req.body.username }).select('username active email name resettoken').exec(function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: 'User could not be found...' + err });

            } else {
                user.resettoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '24h' });
                user.save(function (err) {

                    if (err) {

                        res.json({ success: false, message: err })
                    } else {

                        // If e-mail found in database, create e-mail object
                        var email = {
                            from: 'Localhost Staff, cruiserweights@zoho.com',
                            to: user.email,
                            subject: 'Password Reset',
                            text: 'Hello ' + user.name + ', You recently requested a password reset link. Please use this link below to reset your password:"http://localhost:8081/reset/"' + user.resettoken,
                            //html: 'Hello<strong> ' + user.name + '</strong>,<br><br>You recently requested a password reset link. Please click on the link below to reset your password:<br> <a href="http://localhost:8080/reset/'+user.resettoken+'">"http://localhost:8080/reset/"</a>' 
                            html: resetPassword.render({ user: user.name, resettoken: user.resettoken })
                        };

                        // Function to send e-mail to user
                        client.sendMail(email, function (err, info) {
                            if (err) {
                                console.log(err); // If error in sending e-mail, log to console/terminal
                            } else {
                                console.log(info); // Log confirmation to console
                            }
                        });

                        res.json({ success: true, message: 'Please check your email for password reset link...' })
                    }

                })
            }
        })
    });
    app.get('/users/getadmin', function (req, res) {
        User.find({ userclass: "admin" }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                res.json({ success: true, message: "Admin found..", user: user[0] })
            }
        })
    })
    app.put('/users/removemessage/:name/:index', function (req, res) {
        User.find({ name: req.params.name }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                //res.json({success: true,})
                console.log(req.params.index)
                console.log(user[0].comments[req.params.index])
                user[0].comments[req.params.index].read = false;
                user[0].comments.splice(req.params.index, 1)
                console.log(user[0].comments[req.params.index])
                User.findOneAndUpdate({ name: req.params.name }, { $set: { comments: user[0].comments } }, { new: true }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User found and updated..." })
                    } else {
                        res.json({ success: true, message: "Message Read Status Changed To true...", user: user })
                    }
                })
            }
        })
    })
    app.put('/users/changemessagetounread/:id/:index', function (req, res) {
        User.find({ _id: req.params.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                //res.json({success: true,})
                user[0].messages[req.params.index].read = false;
                User.findOneAndUpdate({ _id: req.params.id }, { $set: { messages: user[0].messages } }, { new: true }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User found and updated..." })
                    } else {
                        res.json({ success: true, message: "Message Read Status Changed To true...", user: user })
                    }
                })
            }
        })
    })
    app.put('/users/changemessagetoread/:id/:index', function (req, res) {
        User.find({ _id: req.params.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                //res.json({success: true,})
                user[0].messages[req.params.index].read = true;
                console.log(user[0].messages[req.params.index])
                User.findOneAndUpdate({ _id: req.params.id }, { $set: { messages: user[0].messages } }, { new: true }, function (err, user) {
                    if (err) throw err;
                    if (!user) {
                        res.json({ success: false, message: "User found and updated..." })
                    } else {
                        res.json({ success: true, message: "Message Read Status Changed To true...", user: user })
                    }
                })
            }
        })
    })
    app.put('/users/getmessages/:id', function (req, res) {

        User.find({ _id: req.params.id }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                res.json({ success: true, message: "User found...", messages: user[0].messages })
            }
        })

    })
    app.post('/users/sendmessage', function (req, res) {
        User.findOneAndUpdate({ _id: req.body.id }, { $push: { messages: req.body } }, { new: true }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found" })
            } else {
                res.json({ success: true, message: "User found and updated...", user: user })
            }
        })
    })
    app.put('/users/finduser/:name', function (req, res) {
        console.log(req.params.name)
        User.find({ name: req.params.name }, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                res.json({ success: true, message: "User found", user: user })
            }
        })
    })
    app.get('/users', function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;
            if (!users) {
                res.json({ success: false, message: "Users not found.." })
            } else {
                res.json({ success: true, message: "Users found..", users })
            }
        })
    })
    app.put('/users/:userid/:month/:date/:boolean', function (req, res) {

        User.findOne({ _id: req.params.userid }, function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "User not found.." })
            } else {
                //res.json({success: true, message: "User found..", user.})
                console.log(user)
                if (req.params.month == "June") {
                    if (req.params.boolean == "false") {
                        user.june[req.params.date - 1] = false;
                        User.findOneAndUpdate({ _id: req.params.userid }, { $set: { June: user.June } }, function (err, user) {
                            if (err) throw err;
                            if (!user) {
                                res.json({ success: false, message: "User not found..." })
                            } else {
                                res.json({ success: true, message: "User found and updated..", user })
                            }
                        })
                    } else {
                        user.june[req.params.date - 1] = true;
                        User.findOneAndUpdate({ _id: req.params.userid }, { $set: { June: user.June } }, function (err, user) {
                            if (err) throw err;
                            if (!user) {
                                res.json({ success: false, message: "User not found..." })
                            } else {
                                res.json({ success: true, message: "User found and updated..", user })
                            }
                        })
                    }

                }
                //res.json({success: true, message: "User's availability modified", user: user})
            }

        })

    })
    app.put('/users/:userId/:date/:boolean', function (req, res) {

        User.findOne({ _id: req.params.userId }, function (err, user) {


            if (err) throw err;

            if (!user) {
                
                res.json({ success: false, message: "User not found" })

            } else {
                if (req.params.boolean == "true") {
                    user.calender[0][req.params.date] = true;
                    console.log(user.calender[0][req.params.date])
                    User.findOneAndUpdate({ _id: req.params.userId }, { $set: { calender: user.calender } }, function (err, user) {
                        if (err) throw err;
                        if (!user) {
                            res.json({ success: false, message: "User not found" })
                        } else {
                            res.json({ success: true, message: "User found and updated...", user: user })
                        }
                    })
                } else {
                    user.calender[0][req.params.date] = false;

                    User.findOneAndUpdate({ _id: req.params.userid }, { $set: { calender: user.calender } }, function (err, user) {
                        if (err) throw err;
                        if (!user) {
                            res.json({ success: false, message: "User not found" })
                        } else {
                            res.json({ success: true, message: "User found and updated...", user: user })
                        }
                    })
                }

            }

        })
    })
    app.put('/users/:userid', function (req, res) {
        console.log(req.params.userid, "OU")

        User.findOne({ _id: req.params.userid }, function (err, user) {
            if (!user) {
                res.json({ success: false, message: "User not found..." })
            } else {
                res.json({ success: true, message: "User found..", user: user })
            }
        })

    })
    app.post('/authenticate', function (req, res) {

        //res.send("testing new route")
        console.log("authenticate Route Hit");
        console.log(req.body)
        //res.json({success: false, message:"Nah it'll be fine.. haha"})
        
        if(req.body.username !== 'dball'){

            res.json({success: false, message:"Only 'Dragon Ball' May Enter..."})

        }else{

            User.findOne({ username: req.body.username }).select('email username password wellness intake name payrate payperiodnum userclass phonenumber comments supervisors locations approvednotbooked requestedjobs submittedtimesheets')
            .exec(function (err, user) {

                if (err) throw err;
                if (!user) {

                    res.json({ success: false, message: "Only Dragon Ball May Enter..." })

                } else if (user) {
                    //START PASSWORD VALIDATION
                    console.log("hello")
                    if(req.body.password){

                        var validPassword = user.comparePassword(req.body.password)

                        if (!validPassword) {

                            res.json({ success: false, message: "Incorrect Password..." })
    
                        } else {
                            var token = jwt.sign({ success: true, username: user.username,name: user.name, intake: user.intake, email: user.email, payrate: user.payrate, userclass: user.userclass, payperiod: user.payperiodnum, name: user.name, _id: user._id, phonenumber: user.phonenumber, wellness: user.wellness, messages: user.comments, locations: user.locations, supervisors: user.supervisors, approvednotbooked: user.approvednotbooked, requestedjobs: user.requestedjobs, submittedtimesheets: user.submittedtimesheets }, secret, { expiresIn: '3h' });
                            var timelefttoken = jwt.sign({ username: user.username, email: user.email }, secret, { expiresIn: '3h' });
                            res.json({ success: true, message: 'User authenticated', token: token, name: user.name, timelefttoken: timelefttoken, user: user });
                        }

                    }else{

                        res.json({success: false, message: "Password Must Not Be Empty..."})

                    }

                
                   
                }
            })

        }
        

    })
    app.post('/users', function (req, res) {
        console.log("Route Hit")
        var user = new User();
        //var date = new Date();
        // var dateNow = date.getDate()
        //var month = date.getMonth() + 1;







        user.username = req.body.userName;
        user.phonenumber = req.body.phonenumber;
        user.password = req.body.password.toString(),
            user.email = req.body.email;
        user.userclass = req.body.userclass;
        user.delinquenttimesheets = [[]];
        user.disputedtimesheets = [];

        user.payrate = 17;
        user.requestedjobs = [];
        user.approvedjobs = [];
        user.name = req.body.name;
        user.wellness = false;
        user.calender = {
            11: {
                1: false,
                2: true,
                3: false,
                4: true,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: false,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: false,
                19: false,
                20: false,
                21: false,
                22: false,
                23: false,
                24: false,
                25: false,
                26: false,
                27: false,
                28: false,
                29: false,
                30: false,
                31: false,
                name: "December"
            },
            12: {
                1: false,
                2: true,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: false,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: false,
                19: false,
                20: false,
                21: false,
                22: false,
                23: false,
                24: false,
                25: false,
                26: false,
                27: false,
                28: false,
                29: false,
                30: false,
                31: false,
                name: "December"
            }
        }
        //user.payperiodnum = payperiodnum;
        user.historyupdated = false;
        //user.complaints = []
        user.comments = []
        console.log(user)

        if (req.body.userName == null || req.body.userName == "" || req.body.password == null || req.body.password == "" ||
            req.body.email == null || req.body.email == "" || req.body.name == null || req.body.name == '') {
            res.json({ success: false, message: "Ensure username, email, name and password are provided" });


        } else {
            console.log("Here i am")



            user.save(function (err) {
                if (err) {
                    res.json({ success: false, message: "Save Failed..." })
                } else {
                    res.json({ success: true, message: "Save Successful,", user: user })
                }

            })




            /* PayPeriod.find({payperiodnum:payperiodnum}, function (err, payperiods) {
                 console.log("hello", payperiods.length)
                 for (var i = 0; i < payperiods.length; i++) {
                     payperiods[i].currentuser = req.body.name;
                     //console.log(payperiods[0].currentuser)
                 }
                 console.log(payperiods[0].currentuser)
                 user.payperiods = payperiods;
                 console.log(user.payperiods[0].currentuser)
                 //user.payperiodnum = 5;
                 user.save(function (err) {
                     if (err) {
 
                         //res.send("Ensure all fields input")
                         res.json({ success: false, message: "There was an error..." })
                         console.log(err)
                     } else {
 
                         /* if (err) {
                              res.send("Username or email already exists..")
                              res.json({success: false, message: "Username or email already exists.."})
                          } else {*/
            //res.send("userCreated");
            //res.json({ success: true, message: "User Created Successfully.", user: user })
            /* }*/


            /*  }
          })
 
      })*/

        }

    })
    app.use(function (req, res, next) {
        // console.log(req.body.token)
        var token = req.body.token || req.body.query || req.headers['x-access-token'];
        //from jwt documentation
        if (token) {
            // verify token
            jwt.verify(token, secret, function (err, decoded) {

                if (err) {
                    res.json({ success: false, message: "Token invalid" })
                } else {
                    req.decoded = decoded;
                    next(); //continue to post method...
                }

            })

        } else {
            res.json({ success: false, message: "No token provided" });
        }


    });
    app.post('/me', function (req, res) {

        res.send(req.decoded);



    });
    app.put('/api/getuserclass', function (req, res) {
        User.findOne({ username: req.decoded.username }, function (err, user) {

            if (err) throw err;
            if (!user) {
                res.json({ success: false, message: "No user found..." });
            } else {
                res.json({ success: true, userclass: user.userclass });
            }

        });


    });

    return app;

}