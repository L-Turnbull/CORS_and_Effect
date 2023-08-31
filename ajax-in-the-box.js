
let table = document.getElementById("spid_base");
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTUCsw5ZSGn-0POXFFj07wpdNI1KtL22gxqq3EygljEnWU_GmS6irYgz1cIqid5U1iWMtcb_xfi69VF/pub?output=csv")
.then(res => res.text())
.then(csv => {
table.innerHTML = "";
for (let row of CSV.parse(csv)) {
let tr = table.insertRow();

// Display only the fourth column 
//added because first 3 columns were needed to concat array (aka get from api and moosh the values together)
let col = row[3];
let td = tr.insertCell();
td.innerHTML = col;
}
});