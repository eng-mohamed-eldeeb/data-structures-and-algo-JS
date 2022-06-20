class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []; 
    }
    addEdge(v1,v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        )
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        )
    }
    removeVertex(v) {
        let vList = this.adjacencyList[v];
    while(vList.length) {
        const removedV = vList.pop();
        this.removeEdge(v, removedV)
    }
    delete this.adjacencyList[v];
    }
//depth first travers
    DFS(v) {
        let result = [];
        let visited = {};
        //recursion
        const RDFS = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex)
            this.adjacencyList[vertex].forEach(e => {
                if(!visited[e]) RDFS(e);
            });
        }
        RDFS(v);
        return result;
    }
    //breadth first graph
    BFS(v) {
        let result = [];
        let visited = {};
        let queue = [v];
        visited[v] = true;

        while(queue.length) {
            let removed = queue.shift();
            result.push(removed);
            this.adjacencyList[removed].forEach(e => {
                if(!visited[e]) {
                    visited[e] = true;
                    queue.push(e);
                }
            })
        }
        return result;
    }
       
}

var g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g.BFS('A'))