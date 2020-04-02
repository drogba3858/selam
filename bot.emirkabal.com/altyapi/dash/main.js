




function addGuild(guild) {
    $.cookie('redirectUrl', guild);
    window.location.href = `/ekle?id=${guild.replace('/yonetim/','')}`;
}

function relogin() {
    $.cookie('redirectUrl', window.location.pathname);
    // window.location.href = "/login";
}