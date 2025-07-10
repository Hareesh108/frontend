enum Status  {
    Pending = 0,
    Declined = 1,
    Approved = 2
}

function validateStatus(status: Status) {
    console.log(status);
    
    // some code
}

validateStatus(Status.Declined)

validateStatus(1) // works


enum StatusString  {
    PENDING = "Pending",
    DECLINED = "Declined",
}

function validateStatusString(status: StatusString) {
    console.log(status);
    
    // some code
}

validateStatusString(StatusString.DECLINED)

validateStatusString("Declined") // wont work