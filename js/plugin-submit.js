//jQuery required thx
function submitPlugin() {
    var form = $("#plform");
    if(verifyForm()) {
        uploadForm();
    } else {
        alert("The form is invalid, please try to fix any mistakes present");
    }
}

function uploadForm() {
    firebase.auth().onAuthStateChanged(function(user) {
        if(user) {
            //Logged in
            
        } else {
            alert("You have to be logged in to do this");
        }
    });
    var storage = firebase.storage().ref();
}

function verifyForm() {
    var plName = $("#plname").val();
    var plDesc = $("#pldesc").val();
    var plInfo = $("#plinfo").val();
    var file = $("#jarfile").val();
   /*
    alert(plName);
    alert(plDesc);
    alert(plInfo);
    alert(file);*/
    if(plName.trim() !== "" && plDesc.trim() !== "" && plInfo.trim() !== "" && file.trim() !== "") {
        return true;
    } else {
        return false;
    }
}