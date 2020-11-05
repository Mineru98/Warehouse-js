// const WareHouse = require("./dist");

// const warehouse = new WareHouse();

// const str_num = "1231as@d";
// let num = str_num * 1;
// console.log(str_num);
// console.log(parseInt(str_num));

const objSizeof = require("object-sizeof");

let arr = Array(1e3).fill("1");
const obj = {1:null,"2":{1:1}}

function cbyte(size) {
	let unit = "bytes";
	let csize = size;
	
	if(1024 < size && size < 1024 * 1024) {
		csize /= 1024;
		unit = "kbytes";
	} else if(1024 * 1024 < size && size < 1024 * 1024 * 1024) {
		csize /= 1024 * 1024;
		unit = "mbytes";
	} else if(1024 * 1024 * 1024 < size && size < 1024 * 1024 * 1024 * 1024) {
		csize /= 1024 * 1024 * 1024;
		unit = "gbytes";
	}
	return { capacity: csize, unit };
}
console.log(1e7);
console.log(cbyte(1e7));
console.log(cbyte(objSizeof(obj)));

