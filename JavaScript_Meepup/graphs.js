class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  // v = Vertex 
  addVertex(v){
    if(!this.adjacenyList[v]) this.adjacenyList[v] = [];
  }

  addEdge(v1, v2){
    if (this.adjacenyList[v1] && this.adjacenyList[v2]) {
			this.adjacenyList[v1].push(v2);
			this.adjacenyList[v2].push(v1);
		}
  }

  removeEdge(v1, v2){
    if (this.adjacenyList[v1] && this.adjacenyList[v2]) {
      let idx1, idx2;
      if(!this.adjacenyList[v1].indexOf(v2) && !this.adjacenyList[v2].indexOf(v1)) {

        idx1 = this.adjacenyList[v1].indexOf(v2),
        idx2 = this.adjacenyList[v2].indexOf(v1);
      }else{
        console.log("does not exist");
      }


      this.adjacenyList[v1].splice(idx2, 1);
      this.adjacenyList[v2].splice(idx1, 1);
    }
  }

  removeVertex(v){
    // if(v) 
  }
};

let web = new Graph 
web.addVertex("a"); 
web.addVertex("b"); 
web.addVertex("c"); 
web.addEdge("a", "c"); 
web.addEdge("a", "b"); 
web.removeEdge("a", "b"); 

console.log(web)