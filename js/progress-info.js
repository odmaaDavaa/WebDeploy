function hideDivs() {
			document.getElementById("2024").style.display = "none";
			document.getElementById("2023").style.display = "none";
			document.getElementById("2022").style.display = "none";
			document.getElementById("2021").style.display = "none";
		}

		function alertChoice() {
			var userChoice = document.getElementById("idByYears").value;
			if (userChoice == "2024") {
				document.getElementById("2024").style.display = "block";
				document.getElementById("2023").style.display = "none";
				document.getElementById("2022").style.display = "none";
				document.getElementById("2021").style.display = "none";
			}
			if (userChoice == "2023") {
				document.getElementById("2024").style.display = "none";
				document.getElementById("2023").style.display = "block";
				document.getElementById("2022").style.display = "none";
				document.getElementById("2021").style.display = "none";
			}
			if (userChoice == "2022") {
				document.getElementById("2024").style.display = "none";
				document.getElementById("2023").style.display = "none";
				document.getElementById("2022").style.display = "block";
				document.getElementById("2021").style.display = "none";
			}
			if (userChoice == "2021") {
				document.getElementById("2024").style.display = "none";
				document.getElementById("2023").style.display = "none";
				document.getElementById("2022").style.display = "none";
				document.getElementById("2021").style.display = "block";
			}
		}


