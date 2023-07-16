
const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            location: "Dhanmondi 9/A",
            time:"12.00 O' Clock",
        }
        resolve(meetingDetails);
    }
    else {
        reject(new Error("Meeting not found"));
    }
});


async function myMeeting(){
    const mettingDetails = await meeting;
    console.log(mettingDetails);
}

myMeeting();
console.log("Hello World!");
