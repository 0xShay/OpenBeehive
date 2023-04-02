const getDecodedAccessToken = (accessToken) => {
    return accessToken != null ? jwt_decode(accessToken) : null;
};

const getUserID = (accessToken) => {
    return getDecodedAccessToken(accessToken).id;
};

let getUserInfo = async (userID) => {
                
    let userInfo = await fetch("https://beehiveapi.lionhearttrust.org.uk/v3.5/startup/" + userID, {
        method: "GET"
    });

    return await userInfo.json();

};

let getAssignments = async (userID, pageSize) => {
                
    let planner = await fetch("https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/students/" + userID + "/assignmentstiny?pageIndex=0&filter=0&pageSize=" + pageSize, {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    })

    return (await planner.json()).items;

};

let getCardInfo = async (userID) => {
                
    let cardInfo = await fetch("https://beehiveapi.lionhearttrust.org.uk/v3.5/payments/users/" + userID + "/smartcards/all", {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    });

    return await cardInfo.json();

};

let getTransactions = async (userID) => {

    let txInfo = await fetch("https://beehiveapi.lionhearttrust.org.uk/v3.5/payments/users/" + userID + "/smartcards/transactions/11", {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    });

    return await txInfo.json();

};

let getPlanner = async (userID) => {
                
    let planner = await fetch("https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/students/" + userID, {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    });

    return await planner.json();

};

let getTimetable = async (userID) => {
                
    let timetable = await fetch("https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/users/" + userID + "/timetable", {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    });

    return await timetable.json();

};

const getTaskInfo = async (userID, assignmentID) => {
                
    let task = await fetch(`https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/users/${userID}/assignments/${assignmentID}`, {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    });
    return await task.json();

};

const downloadFile = async (fileID) => {
                
    let task = await fetch(`https://beehiveapi.lionhearttrust.org.uk/v3.5/files/download/${fileID}`, {
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token 
        })
    });
    return await task.json();

};

const markComplete = async (userID, assignmentID) => {
    let logged = await fetch(`https://beehiveapi.lionhearttrust.org.uk/v3.5/planner/students/${userID}/assignments/${assignmentID}/submit`, {
        method: "POST",
        headers: new Headers({
            "authorization": "Bearer " + localStorage.access_token,
            "Content-Type": "application/json"
        }), 
        body: JSON.stringify({
            "difficulty": null,
            "timescale": null,
            "comments": null,
            "requireAssistance": null,
            "understoodRequirements": null,
            "studentId": userID,
            "assignmentId": assignmentID
        })
    });
    // location.reload();
    window.location.replace('assignments');
};

// ordinal_suffix_of by Salman A on Stack Overflow: https://stackoverflow.com/a/13627586
const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
};

document.body.onload = () => {
    setInterval(() => {
        let dateNow = new Date();
        let _day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateNow.getDay()];
        let _date = ordinal_suffix_of(dateNow.getDate());
        let _month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dateNow.getMonth()];
        let _year = dateNow.getFullYear();
        let _time = dateNow.toLocaleTimeString();
        document.getElementById("time").innerHTML = `${_day} ${_date} ${_month} ${_year}<br>${_time}`
    }, 1000)
};