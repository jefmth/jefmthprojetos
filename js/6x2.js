// Função calendário
let table = document.getElementById("schedule");
let monthYear = document.getElementById("monthYear");
monthYear.style.fontSize = "16px";
let daysRow = document.getElementById("days");
let weekdaysRow = document.getElementById("weekdays");
let weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let daysInMonth = new Date(year, month + 1, 0).getDate();

monthYear.innerHTML = months[month] + " de " + year;

for (let i = 1; i <= daysInMonth; i++) {
    let dayCell = daysRow.insertCell(-1);
    dayCell.innerHTML = i;

    let weekdayCell = weekdaysRow.insertCell(-1);
    weekdayCell.innerHTML = weekdays[new Date(year, month, i).getDay()];
}

// Carrega os dados salvos do localStorage
let savedData = JSON.parse(localStorage.getItem("scheduleData"));
if (savedData) {
    for (let i = 0; i < savedData.rows.length; i++) {
        let row = table.insertRow();
        for (let j = 0; j < savedData.rows[i].length; j++) {
            let cell = row.insertCell();
            cell.innerHTML = savedData.rows[i][j];
            cell.contentEditable = true;
        }
    }
} else {
    for (let i = 0; i < 16; i++) {
        let row = table.insertRow(-1);
        let nameCell = row.insertCell(0);
        nameCell.setAttribute("contenteditable", "true");
        nameCell.classList.add("employee-cell");
        nameCell.style.fontWeight = "bold";

        for (let j = 1; j <= daysInMonth; j++) {
            let cell = row.insertCell(j);
            cell.setAttribute("contenteditable", "true");
            cell.style.textAlign = "center";
            cell.style.fontWeight = "bold";
        }
    }
}

// Salva os dados no localStorage quando a página é descarregada
window.onbeforeunload = function() {
    let data = {
        rows: []
    };
    for (let i = 4; i < table.rows.length; i++) {
        let rowData = [];
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            rowData.push(table.rows[i].cells[j].innerHTML);
        }
        data.rows.push(rowData);
    }
    localStorage.setItem("scheduleData", JSON.stringify(data));
}
			
			//fim função calendário
			
			//função 6x2
			
						function processarTabela() {
				let rows = table.rows;
				for (let i = 0; i < rows.length; i++) {
					let cells = rows[i].cells;
					for (let j = 1; j < cells.length; j++) {
						let cell = cells[j];
						if (cell.innerHTML === "x") {
							for (let k = 8; k <= 24; k += 8) {
								if (j + k < cells.length) {
									rows[i].cells[j + k].innerHTML = "X";
								}
							}
						}
					}
				}
			}
			table.addEventListener("input", processarTabela);

			
			//função editar texto ao abrir
			
			//função editar texto ao abrir
			
				window.onload = function() {
					// Editar texto Funcionários
					document.querySelector('table tbody tr:nth-child(5) td:nth-child(1)').innerHTML = "Vagner";
					document.querySelector('table tbody tr:nth-child(5) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(6) td:nth-child(1)').innerHTML = "Eliane";
					document.querySelector('table tbody tr:nth-child(6) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(7) td:nth-child(1)').innerHTML = "Rosemary";
					document.querySelector('table tbody tr:nth-child(7) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(8) td:nth-child(1)').innerHTML = "Jeferson";
					document.querySelector('table tbody tr:nth-child(8) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(9) td:nth-child(1)').innerHTML = "Oziel";
					document.querySelector('table tbody tr:nth-child(9) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(10) td:nth-child(1)').innerHTML = "Thiago";
					document.querySelector('table tbody tr:nth-child(10) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(11) td:nth-child(1)').innerHTML = "Feris";
					document.querySelector('table tbody tr:nth-child(11) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(12) td:nth-child(1)').innerHTML = "Nelson";
					document.querySelector('table tbody tr:nth-child(12) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(13) td:nth-child(1)').innerHTML = "Luciano";
					document.querySelector('table tbody tr:nth-child(13) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(14) td:nth-child(1)').innerHTML = "Schurmann";
					document.querySelector('table tbody tr:nth-child(14) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(15) td:nth-child(1)').innerHTML = "Charles";
					document.querySelector('table tbody tr:nth-child(15) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(16) td:nth-child(1)').innerHTML = "Caio";
					document.querySelector('table tbody tr:nth-child(16) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(17) td:nth-child(1)').innerHTML = "Felipe";
					document.querySelector('table tbody tr:nth-child(17) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(18) td:nth-child(1)').innerHTML = "Vicente";
					document.querySelector('table tbody tr:nth-child(18) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(19) td:nth-child(1)').innerHTML = "Alecsandro";
					document.querySelector('table tbody tr:nth-child(19) td:nth-child(1)').style.fontSize = "12px";
					document.querySelector('table tbody tr:nth-child(20) td:nth-child(1)').innerHTML = "Matheus";
					document.querySelector('table tbody tr:nth-child(20) td:nth-child(1)').style.fontSize = "12px";
					
					
					for (let i = 3; i <= 16; i++) {
						document.querySelector(`table tbody tr:nth-child(${i})`).style.fontWeight = "bold";
						document.querySelector('table tbody tr:nth-child(4) td:nth-child(1)').style.fontSize = "16px";
					}
				}
			//fim função editar texto ao abrir 
			
			//função print
            document.getElementById('printTable').addEventListener('click', function() {
                window.print();
            });
			//função Limpar
            document.getElementById('clearText').addEventListener('click', function() {
                let answer = confirm("Deseja realmente limpar as Folgas?");
                if (answer) {
                    for (let i = 4; i < table.rows.length; i++) {
                        let row = table.rows[i];
                        for (let j = 1; j <= daysInMonth; j++) {
                            row.cells[j].innerHTML = '';
                        }
                    }
                } else {
                    return;
                }
            });
		//subir imagem
			 function loadImage(event) {
            var image = document.createElement("img");
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.width = "100%";
            image.style.height = "100%";
            var container = document.getElementById("imageContainer");
            container.innerHTML = "";
            container.appendChild(image);
        }
		
		//adiconar e excluir linha
		let addRowButton = document.getElementById("addRow");
				let deleteRowButton = document.getElementById("deleteRow");

				addRowButton.addEventListener("click", function() {
					let row = table.insertRow(-1);
					let nameCell = row.insertCell(0);
					nameCell.setAttribute("contenteditable","true");
					nameCell.classList.add("name-cell");
					nameCell.style.fontWeight = 'bold';

					for (let j = 1; j <= daysInMonth; j++) {
						let cell = row.insertCell(j);
						cell.setAttribute("contenteditable","true");
						cell.style.textAlign = 'center';
						cell.style.fontWeight = 'bold';
					}
				});

				deleteRowButton.addEventListener("click", function() {
					let rowCount = table.rows.length;
					if (rowCount > 5) {
						table.deleteRow(-1);
					}
				});
				
				
