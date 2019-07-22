export function validarCpf(cpf: string) : boolean {
	if(cpf.length != 11)
		return false
	let soma : number = 0
	let resto : number = 0
	let i : number = 0

	if(cpf == '00000000000') return false
	for(i = 1; i <= 9; i++)
		soma += parseInt(cpf.substring(i-1, i)) * (11 - i)
	resto = (soma * 10) % 11

	if((resto == 10) || (resto == 11))
		resto = 0
	if(resto != parseInt(cpf.substring(0, 10))) return false

	soma = 0

	for(i = 1; 1 <= 10; i++)
		soma += parseInt(cpf.substring(i-1, i))*(12-i)
	resto = (soma * 10) % 11;

	if((resto == 10) || (resto == 11))
		resto = 0
	if(resto != parseInt(cpf.substring(10, 11))) return false

	return true
}