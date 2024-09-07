var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");
	
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
        panel.style.display = "block";
          
    }
  });
}


const whiskyInfoContainer = document.getElementById('whiskyInfo');

        whiskyInfo.forEach(section => {
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('whisky-section');

            // ... restante da estrutura da seção ...

            // Renderizando subseções, subtipos, regiões e destilarias (se houver)
            if (section.subsecoes) {
                section.subsecoes.forEach(subsection => {
                    const subsectionElement = document.createElement('div');
                    subsectionElement.classList.add('subsection');

                    // ... restante da estrutura da subseção ...

                    if (subsection.subtipos) {
                        const subtiposList = document.createElement('ul');
                        subsection.subtipos.forEach(subtipo => {
                            const subtipoItem = document.createElement('li');
                            subtipoItem.textContent = `${subtipo.nome} - ${subtipo.descricao}`;
                            subtiposList.appendChild(subtipoItem);
                        });
                        subsectionElement.appendChild(subtiposList);
                    }

                    if (subsection.regioes) {
                        const regioesList = document.createElement('ul');
                        subsection.regioes.forEach(regiao => {
                            const regiaoItem = document.createElement('li');
                            regiaoItem.textContent = regiao;
                            regioesList.appendChild(regiaoItem);
                        });
                        subsectionElement.appendChild(regioesList);
                    }

                    if (subsection.destilarias) {
                        const destilariasTable = document.createElement('table');
                        const headerRow = destilariasTable.insertRow();
                        const headerCells = ['Nome', 'Região', 'Características'];
                        headerCells.forEach(cellText => {
                            const th = document.createElement('th');
                            th.textContent = cellText;
                            headerRow.appendChild(th);
                        });
                        subsection.destilarias.forEach(destilaria => {
                            const row = destilariasTable.insertRow();
                            const cells = [destilaria.nome, destilaria.regiao, destilaria.caracteristicas];
                            cells.forEach(cellText => {
                                const cell = row.insertCell();
                                cell.textContent = cellText;
                            });
                        });
                        subsectionElement.appendChild(destilariasTable);
                    }

                    sectionElement.appendChild(subsectionElement);
                });
            }

            // Renderizando etapas
            if (section.etapas) {
                const etapasList = document.createElement('ol');
                section.etapas.forEach(etapa => {
                    const etapaItem = document.createElement('li');
                    etapaItem.textContent = `${etapa.etapa}: ${etapa.descricao}`;
                    etapasList.appendChild(etapaItem);
                });
                sectionElement.appendChild(etapasList);
            }

            // Renderizando dicas
            if (section.dicas) {
                const dicasList = document.createElement('ul');
                section.dicas.forEach(dica => {
                    const dicaItem = document.createElement('li');
                    dicaItem.textContent = `${dica.dica}: ${dica.descricao}`;
                    dicasList.appendChild(dicaItem);
                });
                sectionElement.appendChild(dicasList);
            }

            // Renderizando fatos
            if (section.fatos) {
                const fatosList = document.createElement('ul');
                section.fatos.forEach(fato => {
                    const fatoItem = document.createElement('li');
                    fatoItem.textContent = `${fato.fato}: ${fato.descricao}`;
                    fatosList.appendChild(fatoItem);
                });
                sectionElement.appendChild(fatosList);
            }

            whiskyInfoContainer.appendChild(sectionElement);
        });