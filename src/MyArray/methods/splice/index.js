import { MyArray } from "../../MyArray";

export function splice (start) {


    let deleteCount = arguments [1] || 0; 
    if (start < 0) start = (this.length)+start;
    if (deleteCount > (this.length+start)) deleteCount=this.length+start;

    let deleted = new MyArray();
    if (start > this.length) 
        start = this.length;
    if (start+deleteCount > this.length) 
                    deleteCount=this.length-start;
    if (start===(this.length-1)) 
                    this.length--;

    if (deleteCount) {
        for (let i=start; i<start+deleteCount; i++) {
            deleted[deleted.length++]=this[i];
        }
    
        for (let i=start; i<this.length; i++) {
            if (i+deleteCount<this.length)
                this[i]=this[i+deleteCount];
        }
        
        for (let i=0; i<deleteCount; i++)
            delete this[this.length-deleteCount+i];

        this.length-=deleteCount;
    }

    if (arguments.length>2) {
        for (let i=this.length-1; i>=start; i--) {
            this[i+(arguments.length-2)]=this[i];
        }
        for (let i=0; i<(arguments.length-2); i++) {
            this[start+i]=arguments[i+2];
            this.length++;
        }
    }
    return deleted;
}