var startingbid = 500;
var button = document.getElementById("submit");
var checkboxskill1 = document.getElementById("option1")

checkboxskill1.addEventListener("change", isChecked);

// addEventListener for all checkboxes

function isChecked(event) {
    if (event.currentTarget.checked) {

    }
}


button.addEventListener("click", myFunction)

function myFunction() {
    var EducationValue = Number(document.getElementById("education").value);
    startingbid = startingbid * EducationValue;

    var FamilyValue = Number(document.getElementById("networth").value);
    startingbid = startingbid * FamilyValue;

    var extra_skills = document.getElementsByClassName("extra_skills")

    for (var i=0; i < extra_skills.length; i++) {
        if (extra_skills[i].checked) {
            startingbid = startingbid + extra_skills[i].value
        }
    }

     var AgeFirstValue = Number(document.getElementById("age1").value);
     var AgeSecondValue = Number(document.getElementById("age2").value);
     var AgeThirdValue = Number(document.getElementById("age3").value);

     if(id="age1"){
        startingbid = startingbid * AgeFirstValue;
    }
    else if(id="age2"){
        startingbid = startingbid * AgeSecondValue;
    }
    else{
        startingbid = startingbid * AgeThirdValue;
    }

    var RepFirstValue = Number(document.getElementById("rep1").value);
    var RepSecondValue = Number(document.getElementById("rep2").value);
    var RepThirdValue = Number(document.getElementById("rep3").value);

    if(id = "rep1"){
        startingbid = startingbid * RepFirstValue;
    }
    else if(id = "rep2"){
        startingbid = startingbid * RepSecondValue;
    }
    else{
        startingbid = startingbid - RepThirdValue;
    }
    document.getElementById("1").innerHTML = "Price:" + startingbid;
    startingbid = 500;
}
