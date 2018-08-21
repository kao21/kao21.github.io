$(document).ready(function() {
    var plinks  = [{
        name: 'steam',
        plink: 'https://steamcommunity.com/id/kxda/'
    }, {
        name: 'discord',
        plink: 'https://discord.gg/Tfgpbh6'
	}, {    
		name: 'youtube',
        plink: 'https://www.youtube.com/channel/UCflAo1o1z-rAInbvQDfGR5w'
    }, {
        name: 'twitch',
        plink:  'https://www.twitch.tv/kxda'
	} ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' , ')
        }
    }
    $('#marquee').marquee({
        duration: 15000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});