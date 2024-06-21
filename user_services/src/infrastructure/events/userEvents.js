// const eventEmiter = require("./eventEmitter");

module.exports =(eventEmiter)=>{
    eventEmiter.on('userRegistered', (user) => {
        console.log(`New user registered ${user.email}`);
    });
}