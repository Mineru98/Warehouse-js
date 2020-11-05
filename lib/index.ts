import * as PROMISE from 'bluebird';
import * as objSizeof from 'object-sizeof';

interface StockType {
	id: number;
	type: string;
	data: any;
}

function IsJsonString(str) {
  try {
    var json = JSON.parse(str);
    return (typeof json === 'object');
  } catch (e) {
    return false;
  }
}

function cbyte(size: number): object {
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

class WareHouse {
	private stockTypeList: string[];
	private stock: StockType[];
	private capacity: number;
	
	constructor(size: string) {
		this.stockTypeList = [];
		switch(size) {
			case "":
				break;
			default:
				this.capacity = parseInt(size);
				break;
		}
		const { capacity, unit } = cbyte(this.capacity);
		console.log(`It can accommodate as much as ${capacity} ${unit}.`)
	}
	
	tally(stockTypeKey: string, stockType: string = "object"): boolean {
		if (typeof stockType == "string") {
			switch(stockType) {
				case "object":
					return true;
					break;
				case "string":
					return true;
					break;
				case "number":
					return true;
					break;
				default:
					console.error('Error : Not valid for String format.');
					return false;
					break;
			}
		} else {
			console.error('Error : Not valid for String format.');
			return false;
		}
		
	
		if (stockType instanceof Array && typeof stockType == "object") {
			if (stockType.length > 0) {
				this.stockTypeList = this.stockTypeList.concat(stockType);
			} else {
				// Error
			}
		} else if (typeof stockType != "object" && ((typeof stockType == "number") || (typeof stockType == "string"))) {
			this.stockTypeList.push()
		} else {
			console.error('Error : Input the desired key value as a parameter.');
			return;
		}
	}
	
	receive(list: any): boolean {
		if (IsJsonString(stock)) {
			
		} else {
			console.error('Error : Not valid for JSON format.');
			return false;
		}
	}
	
	release(): boolean {
		
	}
	
	monit() {
		
	}
}