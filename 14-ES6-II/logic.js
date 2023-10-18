
class CustomArray{
    constructor(...element){
        this.len = element.length
        this.forward = ""
        this.backward = ""
        element.forEach((ele,index)=>{
            this[index] = ele
        })
        
    }
    push(element){
        this[this.len] = element
        this.len++
        console.log("Element pushed",element)
    }
    pop(){
        delete this[this.len - 1]
        this.len--
        console.log("Element poped")
       
    }
    top(){
        console.log("top last element :",this[this.len - 1])
    }
    print(){
        for(let i = 0; i < this.len; i++){
            this.forward += (this[i] + " ")
        }
        console.log("elements: ",this.forward)
        this.forward=""
    }
    printReverse(){
        for(let j = this.len-1; j >= 0; j--){
            this.backward += (this[j] + " ")
        }
        console.log(this.backward )
        this.backward=""
    }
    size(){
        console.log(this.len)
    }
}

let arr = new CustomArray(1,2,3,4,5)

arr.push(90)
arr.print()
arr.pop()
arr.top()
arr.print()
arr.printReverse()
arr.push(11)
arr.print()
arr.size()
