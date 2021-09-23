const reverseString = (string) => {
	let listString = string.split("");
	return listString.reverse().join("");
};
const multiplayRut = (rut) => {
	let x = 1;
	let sum = 0;
	for (let i = 0; i < rut.toString().length; i++) {
		x++;
		if (x === 8) {
			x = 2;
		}
		sum += parseInt(rut.toString()[i]) * x;
	}
	return sum;
};
const validation = (rut, dv) => {
	rut = rut.split("-")[1];
	console.log(rut, dv);
	if (rut == dv) {
		return true;
	}
	return false;
};
const modulo11 = (rut) => {
	let rutSplited = rut.split("-")[0];
	rutSplited = reverseString(rutSplited);
	let numeroRut = parseInt(rutSplited);
	let sum = multiplayRut(numeroRut);
	let rest = 11 - (sum % 11);
	if (rest == 11) {
		rest = 0;
	} else if (rest == 10) {
		rest = 1;
	}
	return validation(rut, rest);
};

modulo11("rut");
