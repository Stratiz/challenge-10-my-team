async function FetchMembers() { 
    return await (await fetch("http://localhost:3001/team")).json();
}

function MakeNewTeamMember(memberData) {
    let newMember = $(`<div><h2>${memberData.name}</h2><h3>${memberData.role}</h3></div>`);
    newMember.css("width", "200px");
    newMember.css("height", "200px");
    newMember.css("display", "inline-block");
    newMember.css("background-color", "#f5f5f5");
    return newMember;
}

$(async function () {
    let gridArea = $("#members");
    let team = await FetchMembers();

    console.log(team)
    for (memberData of team) {
        gridArea.append(MakeNewTeamMember(memberData));
    }
})