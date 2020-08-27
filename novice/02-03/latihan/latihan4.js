let meetUps = {
    name: 'ES',
    isActive: true,
    member: 209
}

const jadwalMeetup = (date, place) => {
    meetUps.date = date;
    meetUps.place = place;

    if(meetUps.member<500){
        meetUps.isActive = false;
    }
}

const publishMeetup = () =>{
    if (meetUps.isActive) {
        meetUps.publish = true;
    }
}

jadwalMeetup('today','Bnagalore');
publishMeetup();
console.log(meetUps);