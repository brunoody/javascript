const a1 = [1,2,3];
const a2 = [4,5,6];
//const a3 = a1 + a2; // errado! 
//const a3 = a1.concat(a2); correto

//posso fazer assim tb:
//const a3 = a1.concat(a2, [7,8,9], 'a');

// com spread:
const a3 = [...a1, 'luiz', ...a2, ...[10,11,12]];// neste último preciso colocar os ... senão ele concatena o array literal e não oas valores.
console.log(a3);
