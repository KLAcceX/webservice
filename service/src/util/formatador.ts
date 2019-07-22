export function formatarCpf(cpf: string): string {
	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}

export function formatarCnpjf(cnpj: string): string {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}

export function desformatar(identificador: string): string {
	return identificador.replace(/(\.|\/|\-)/g, "");
}