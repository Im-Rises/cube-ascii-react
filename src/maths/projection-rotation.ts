// const projection = (p, distance, width, height) => {
// 	const factor = distance / (distance + p.z);
// 	const x = p.x * factor + width / 2;
// 	const y = p.y * factor + height / 2;
// 	return {x, y};
// };
//
// const rotateX = (p, angle) => {
// 	const c = Math.cos(angle);
// 	const s = Math.sin(angle);
// 	const y = p.y * c - p.z * s;
// 	const z = p.y * s + p.z * c;
// 	return {...p, y, z};
// };
//
// const rotateY = (p, angle) => {
// 	const c = Math.cos(angle);
// 	const s = Math.sin(angle);
// 	const x = p.x * c - p.z * s;
// 	const z = p.x * s + p.z * c;
// 	return {...p, x, z};
// };
//
// const rotateZ = (p, angle) => {
// 	const c = Math.cos(angle);
// 	const s = Math.sin(angle);
// 	const x = p.x * c - p.y * s;
// 	const y = p.x * s + p.y * c;
// 	return {...p, x, y};
// };
