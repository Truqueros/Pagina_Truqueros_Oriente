const main = document.querySelector('main');
let html = '';

for ( i = 0; i < pets.length; i++ ) {
	let pet = pets[i];
	html += `
		<h2>${pet.project}</h2>
		<h3>${pet.work} | ${pet.status}</h3>
		<p>Torneos Ganados: ${pet.Ranking}</p>
		<image src="${pet.photo}" alt="${pet.project}" class="imgtwo">
`;
}

main.insertAdjacentHTML('beforeend', html);
