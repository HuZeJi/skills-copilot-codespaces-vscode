function skillMember() {
    var member = this;
    member.name = "Skill Member";
    member.age = 30;
    member.skills = ['HTML', 'CSS', 'JS'];
    member.showSkills = function() {
        member.skills.forEach(function(skill) {
            console.log(skill);
        });
    };
}