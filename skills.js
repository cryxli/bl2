$(document).ready(function() {
	
	const skills = {
		// salvador - gunlust
		'lockedloaded': {name:'Locked & Loaded', url:'https://www.lootlemon.com/skill/salvador-lockedandloaded', character:'salvador', img:'LockedandLoaded.png', info:'Reloading your gun increases Fire Rate for a short time.', level: ['Fire Rate: +5%','Fire Rate: +10%','Fire Rate: +15%','Fire Rate: +20%','Fire Rate: +25%']},
		'quickdraw': {name:'Quick Draw', url:'https://www.lootlemon.com/skill/salvador-quickdraw', character:'salvador', img:'QuickDraw.png', info:'Increases Weapon Swap Speed and Cirical Hit Damage with all gun types.', level: ['Weapon Swap Speed: +7%<br/>Critical Hit Damage: +2%','Weapon Swap Speed: +14%<br/>Critical Hit Damage: +4%','Weapon Swap Speed: +21%<br/>Critical Hit Damage: +6%','Weapon Swap Speed: +28%<br/>Critical Hit Damage: +8%','Weapon Swap Speed: +35%<br/>Critical Hit Damage: +10%']},
		'imyourhuckleberry': {name:'I\'m Your Huckleberry', url:'https://www.lootlemon.com/skill/salvador-imyourhuckleberry', character:'salvador', img:'ImYourHuckleberry.png', info:'', level:[]},
		'allineedisone': {name:'All I Need is One', url:'https://www.lootlemon.com/skill/salvador-allineedisone', character:'salvador', img:'AllINeedisOne.png', info:'', level:[]},
		'divergentlikeness': {name:'Divergent Likeness', url:'https://www.lootlemon.com/skill/salvador-divergentlikeness', character:'salvador', img:'DivergentLikeness.png', info:'', level:[]},
		'autoloader': {name:'Auto-Loader', url:'https://www.lootlemon.com/skill/salvador-auto-loader', character:'salvador', img:'Auto-Loader.png', info:'', level:[]},
		'moneyshot': {name:'Money Shot', url:'https://www.lootlemon.com/skill/salvador-moneyshot', character:'salvador', img:'MoneyShot.png', info:'', level:[]},
		'laywaste': {name:'Lay Waste', url:'https://www.lootlemon.com/skill/salvador-laywaste', character:'salvador', img:'LayWaste.png', info:'', level:[]},
		'downnotout': {name:'Down Not Out', url:'https://www.lootlemon.com/skill/salvador-downnotout', character:'salvador', img:'DownNotOut.png', info:'', level:[]},
		'keepitpipinghot': {name:'Keep It Piping Hot', url:'https://www.lootlemon.com/skill/salvador-keepitpipinghot', character:'salvador', img:'KeepItPipingHot.png', info:'', level:[]},
		'nokilllikeoverkill': {name:'No Kill Like Overkill', url:'https://www.lootlemon.com/skill/salvador-nokilllikeoverkill', character:'salvador', img:'NoKillLikeOverkill.png', info:'', level:[]},
		// salvador - rampage
		'inconceivable': {name:'Inconceivable', url:'https://www.lootlemon.com/skill/salvador-inconceivable', character:'salvador', img:'Inconceivable.png', info:'Your shots have a chance to not consume ammo. The lower your health and shields, the greater the chance of free shots.', level:['Chance of Free Shots: up to 10%','Chance of Free Shots: up to 20%','Chance of Free Shots: up to 30%','Chance of Free Shots: up to 40%','Chance of Free Shots: up to 50%']},
		'filledtothebrim': {name:'Filled to the Brim', url:'https://www.lootlemon.com/skill/salvador-filledtothebrim', character:'salvador', img:'FilledtotheBrim.png', info:'Increases your Magazine Size with all weapon types. Also increases your Ammo Carrying Capacity with all ammo types.', level:['Magazine Size: +5%<br/>Ammo Carrying Capacity: +3%','Magazine Size: +10%<br/>Ammo Carrying Capacity: +6%','Magazine Size: +15%<br/>Ammo Carrying Capacity: +9%','Magazine Size: +20%<br/>Ammo Carrying Capacity: +12%','Magazine Size: +25%<br/>Ammo Carrying Capacity: +15%']},
		'allinthereflexes': {name:'All in the Reflexes', url:'https://www.lootlemon.com/skill/salvador-allinthereflexes', character:'salvador', img:'AllintheReflexes.png', info:'', level:['','','','','']},
		'lastlonger': {name:'Last Longer', url:'https://www.lootlemon.com/skill/salvador-lastlonger', character:'salvador', img:'LastLonger.png', info:'', level:['','','','','']},
		'imreadyalready': {name:'I\'m Ready Already', url:'https://www.lootlemon.com/skill/salvador-imreadyalready', character:'salvador', img:'ImReadyAlready.png', info:'', level:['','','','','']},
		'steadyasshegoes': {name:'Steady as She Goes', url:'https://www.lootlemon.com/skill/salvador-steadyasshegoes', character:'salvador', img:'SteadyasSheGoes.png', info:'', level:['','','','','']},
		'fiveshotsor6': {name:'5 Shots or 6', url:'https://www.lootlemon.com/skill/salvador-5shotsor6', character:'salvador', img:'5Shotsor6.png', info:'', level:['','','','','']},
		'yippeekiyay': {name:'Yippee Ki Yay', url:'https://www.lootlemon.com/skill/salvador-yippeekiyay', character:'salvador', img:'YippeeKiYay.png', info:'', level:['','','','','']},
		'doubleyourfun': {name:'Double Your Fun', url:'https://www.lootlemon.com/skill/salvador-doubleyourfun', character:'salvador', img:'DoubleYourFun.png', info:'', level:['','','','','']},
		'getsome': {name:'Get Some', url:'https://www.lootlemon.com/skill/salvador-getsome', character:'salvador', img:'GetSome.png', info:'', level:['','','','','']},
		'keepfiring': {name:'Keep Firing...', url:'https://www.lootlemon.com/skill/salvador-keepfiring', character:'salvador', img:'KeepFiring.png', info:'', level:['','','','','']},
		// salvador - brawn
		'hardtokill': {name:'Hard to Kill', url:'https://www.lootlemon.com/skill/salvador-hardtokill', character:'salvador', img:'HardtoKill.png', info:'Increases your Maximum Health and gives you a small amount of Health Regeneration.', level:['Max Health: +4%<br/>Regenerates 0.1% of you Max Health / sec.','Max Health: +8%<br/>Regenerates 0.2% of you Max Health / sec.','Max Health: +12%<br/>Regenerates 0.3% of you Max Health / sec.','Max Health: +16%<br/>Regenerates 0.4% of you Max Health / sec.','Max Health: +20%<br/>Regenerates 0.5% of you Max Health / sec.']},
		'incite': {name:'Incite', url:'https://www.lootlemon.com/skill/salvador-incite', character:'salvador', img:'Incite.png', info:'Taking damage from enemies increases your Movement Speed and Reload Speed for a few seconds.', level:['Movement Speed: +6%<br/>Reload Speed: +5%','Movement Speed: +12%<br/>Reload Speed: +10%','Movement Speed: +18%<br/>Reload Speed: +15%','Movement Speed: +24%<br/>Reload Speed: +20%','Movement Speed: +30%<br/>Reload Speed: +25%']},
		'asbestos': {name:'Asbestos', url:'https://www.lootlemon.com/skill/salvador-asbestos', character:'salvador', img:'Asbestos.png', info:'', level:['','','','','']},
		'imthejuggernaut': {name:'I\'m the Juggernaut', url:'https://www.lootlemon.com/skill/salvador-imthejuggernaut', character:'salvador', img:'ImtheJuggernaut.png', info:'', level:['','','','','']},
		'aintgottimetobleed': {name:'Ain\'t Got Time to Bleed', url:'https://www.lootlemon.com/skill/salvador-aintgottimetobleed', character:'salvador', img:'AintGotTimetoBleed.png', info:'', level:['','','','','']},
		'fistfulofhurt': {name:'Fistful of Hurt', url:'https://www.lootlemon.com/skill/salvador-fistfulofhurt', character:'salvador', img:'FistfulofHurt.png', info:'', level:['','','','','']},
		'outofbubblegum': {name:'Out of Bubblegum', url:'https://www.lootlemon.com/skill/salvador-outofbubblegum', character:'salvador', img:'OutofBubblegum.png', info:'', level:['','','','','']},
		'busthatcantslowdown': {name:'Bus That Can\'t Slow Down', url:'https://www.lootlemon.com/skill/salvador-busthatcantslowdown', character:'salvador', img:'BusThatCantSlowDown.png', info:'', level:['','','','','']},
		'justgotreal': {name:'Just Got Real', url:'https://www.lootlemon.com/skill/salvador-justgotreal', character:'salvador', img:'JustGotReal.png', info:'', level:['','','','','']},
		'sexualtyrannosaurus': {name:'Sexual Tyrannosaurus', url:'https://www.lootlemon.com/skill/salvador-sexualtyrannosaurus', character:'salvador', img:'SexualTyrannosaurus.png', info:'', level:['','','','','']},
		'comeatmebro': {name:'Come At Me Bro', url:'https://www.lootlemon.com/skill/salvador-comeatmebro', character:'salvador', img:'ComeAtMeBro.png', info:'', level:['','','','','']},
		// zero - sniping
		'headsh0t': {name:'Headsh0t', url:'https://www.lootlemon.com/skill/zer0-headsh0t', character:'zero', img:'Headsh0t.png', info:'', level:['','','','','']},		
		'optics': {name:'0ptics', url:'https://www.lootlemon.com/skill/zer0-0ptics', character:'zero', img:'0ptics.png', info:'', level:['','','','','']},
		'killer': {name:'Killer', url:'https://www.lootlemon.com/skill/zer0-killer', character:'zero', img:'Killer.png', info:'', level:['','','','','']},
		'precisi0n': {name:'Precisi0n', url:'https://www.lootlemon.com/skill/zer0-precisi0n', character:'zero', img:'Precisi0n.png', info:'', level:['','','','','']},
		'onesh0tonekill': {name:'0ne Sh0t 0ne Kill', url:'https://www.lootlemon.com/skill/zer0-0nesh0t0nekill', character:'zero', img:'0neSh0t0neKill.png', info:'', level:['','','','','']},
		'b0re': {name:'B0re', url:'https://www.lootlemon.com/skill/zer0-b0re', character:'zero', img:'B0re.png', info:'', level:['','','','','']},
		'vel0city': {name:'Vel0city', url:'https://www.lootlemon.com/skill/zer0-vel0city', character:'zero', img:'Vel0city.png', info:'', level:['','','','','']},
		'killc0nfirmed': {name:'Kill C0nfirmed', url:'https://www.lootlemon.com/skill/zer0-killc0nfirmed', character:'zero', img:'KillC0nfirmed.png', info:'', level:['','','','','']},
		'at0newiththegun': {name:'At 0ne with the Gun', url:'https://www.lootlemon.com/skill/zer0-at0newiththegun', character:'zero', img:'At0newiththeGun.png', info:'', level:['','','','','']},
		'criticalascenti0n': {name:'Critical Ascensi0n', url:'https://www.lootlemon.com/skill/zer0-criticalascensi0n', character:'zero', img:'CriticalAscensi0n.png', info:'', level:['','','','','']},
		// zero - cunning
		'fasthands': {name:'Fast Hands', url:'https://www.lootlemon.com/skill/zer0-fasthands', character:'zero', img:'FastHands.png', info:'', level:['','','','','']},
		'c0nterstrike': {name:'C0unter Strike', url:'https://www.lootlemon.com/skill/zer0-c0unterstrike', character:'zero', img:'C0unterStrike.png', info:'', level:['','','','','']},
		'fearless': {name:'Fearless', url:'https://www.lootlemon.com/skill/zer0-fearless', character:'zero', img:'Fearless.png', info:'', level:['','','','','']},
		'ambush': {name:'Ambush', url:'https://www.lootlemon.com/skill/zer0-ambush', character:'zero', img:'Ambush.png', info:'', level:['','','','','']},
		'risingsh0t': {name:'Rising Sh0t', url:'https://www.lootlemon.com/skill/zer0-risingsh0t', character:'zero', img:'RisingSh0t.png', info:'', level:['','','','','']},
		'deathmark': {name:'Death Mark', url:'https://www.lootlemon.com/skill/zer0-deathmark', character:'zero', img:'DeathMark.png', info:'', level:['','','','','']},
		'unf0rseen': {name:'Unf0rseen', url:'https://www.lootlemon.com/skill/zer0-unf0rseen', character:'zero', img:'Unf0rseen.png', info:'', level:['','','','','']},
		'innervate': {name:'Innervate', url:'https://www.lootlemon.com/skill/zer0-innervate', character:'zero', img:'Innervate.png', info:'', level:['','','','','']},
		'tw0fang': {name:'Tw0 Fang', url:'https://www.lootlemon.com/skill/zer0-tw0fang', character:'zero', img:'Tw0Fang.png', info:'', level:['','','','','']},
		'deathbl0ss0m': {name:'Death Bl0ss0m', url:'https://www.lootlemon.com/skill/zer0-deathbl0ss0m', character:'zero', img:'DeathBl0ss0m.png', info:'', level:['','','','','']},
		// zero - bloodshed
		'killingbl0w': {name:'Killing Bl0w', url:'https://www.lootlemon.com/skill/zer0-killingbl0w', character:'zero', img:'KillingBl0w.png', info:'', level:['','','','','']},
		'ir0nhand': {name:'Ir0n Hand', url:'https://www.lootlemon.com/skill/zer0-ir0nhand', character:'zero', img:'Ir0nHand.png', info:'', level:['','','','','']},
		'grim': {name:'Grim', url:'https://www.lootlemon.com/skill/zer0-grim', character:'zero', img:'Grim.png', info:'', level:['','','','','']},
		'belikewater': {name:'Be Like Water', url:'https://www.lootlemon.com/skill/zer0-belikewater', character:'zero', img:'BeLikeWater.png', info:'', level:['','','','','']},
		'f0ll0wthr0ugh': {name:'F0ll0wthr0ugh', url:'https://www.lootlemon.com/skill/zer0-f0ll0wthr0ugh', character:'zero', img:'F0ll0wthr0ugh.png', info:'', level:['','','','','']},
		'execute': {name:'Execute', url:'https://www.lootlemon.com/skill/zer0-execute', character:'zero', img:'Execute.png', info:'', level:['','','','','']},
		'backstab': {name:'Backstab', url:'https://www.lootlemon.com/skill/zer0-backstab', character:'zero', img:'Backstab.png', info:'', level:['','','','','']},
		'resurgence': {name:'Resurgence', url:'https://www.lootlemon.com/skill/zer0-resurgence', character:'zero', img:'Resurgence.png', info:'', level:['','','','','']},
		'likethewind': {name:'Like The Wind', url:'https://www.lootlemon.com/skill/zer0-likethewind', character:'zero', img:'LikeTheWind.png', info:'', level:['','','','','']},
		'manymustfall': {name:'Many Must Fall', url:'https://www.lootlemon.com/skill/zer0-manymustfall', character:'zero', img:'ManyMustFall.png', info:'', level:['','','','','']},
		// gaige
		// maya
		// axton
		// krieg
	};

	$('skill').each(function() {
		var alt = $(this).text();
		const id = alt.toLowerCase().replace(/[^a-z0-9]+/g,'').replace(/^5/,'five').replace(/^0/,'o');
		
		const skill = skills[id];
		if (!skill) {
			$(this).replaceWith('<strong>Unknown: '+id+'</strong>');
			return;
		}
		alt = skills[id].name;
		
		var classes = ['skill',  skill.character, id];
		// var classes = ['skill',  window.character, id]
		if ($(this).attr('part') !== undefined) {
			classes.push('part');
		} else if ($(this).attr('full') !== undefined) {
			classes.push('full');
		} else {
			classes.push('gray');
		}
		$(this).replaceWith('<a href="' + skill.url + '" class="' + classes.join(' ') + '" title="' + alt + '"><img src="skills/' + skill.character + '/' + skill.img + '" alt="' + alt + '" /></a>');
	});
});