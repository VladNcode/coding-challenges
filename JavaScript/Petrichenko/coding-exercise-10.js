const personalPlanPeter = {
	name: 'Peter',
	age: '29',
	skills: {
		languages: ['ru', 'eng'],
		programmingLangs: {
			js: '20%',
			php: '10%',
		},
		exp: '1 month',
	},

	showAgeAndLangs(obj) {
		return `Мне ${obj.age} и я владею языками: ${[...obj.skills.languages]
			.map(el => el.toUpperCase())
			.join(' ')} `;
	},
};

function showExperience({ skills: { exp } }) {
	return exp;
}

function showProgrammingLangs({ skills: { programmingLangs: pl } }) {
	let result = '';

	for (let lang in pl) {
		result += `Язык ${lang} изучен на ${pl[lang]}\n`;
	}

	return result;
}
