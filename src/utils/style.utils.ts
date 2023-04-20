export const setVariable = (arr: any) => {
	const variableArr = Object.keys(arr).map((item: string, key: number) => {
		return `${arr[item].key}: ${arr[item].value};`;
	});
	return variableArr.join('\n');
}
