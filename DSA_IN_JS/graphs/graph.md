# What is a Graph ?

A graph data structure consists of a finite ( and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

Graph = Nodes + Connections

Graph can be defined as a set of nodes bound together with help of connections / threads.

A - B
|   |
C - D

A, B, C, D are nodes connected to each other by connections

# Where to use graphs data structure ?

* Social Network
* Mapping (Google Maps) / Location / Roads and connections over map
* Routing Algorithms
* Visual Hierarchy
* File System Optimisations
* Recommendations (Netflix, Prime)

# Components of a graph

* vertex / node
* Edges / connections - it is a connection between two or more nodes

# Types

* Undirected - A two way connection between node A - node B (A can travel to B and vice versa)
  * Facebook Friend Connection is an example of Undirected Graph
* Directed - A single way connection from node A - node B (Either A can travel to B or B can travel to A)
  * Instagram Friend Connection is an example of Directed Graph
* Weighted - Any graph assigned value to the edges


# Storing Graphs

* Adjacency Matrix
  * we use dimensional matrix

[         A B C D
    A    [0 1 0 0],
    B    [1 0 1 0],
    C    [0 1 0 1],
    D    [0 0 1 0]
]

In above adjacency matrix we can see that , a graph is stored and 
    -   node A can travel node B only
    -   node B can travel to node A and node C
    -   node C can travel to node B and node D
    -   node D can travel to node C only


* Adjacency List
  * We use hashmaps to store graphs

{
    A: [B],
    B: [A, C]
    C: [B, D]
    D: [C]
}

In above adjacency list we can see that , a graph is stored and 
    -   node A can travel node B only
    -   node B can travel to node A and node C
    -   node C can travel to node B and node D
    -   node D can travel to node C only



# Adjacent Matrix Vs Adjacent List

| List                                     |                  Matrix                  |
| :--------------------------------------- | :--------------------------------------: |
| uses less space to store data            |      uses more space to store data       |
| iterates faster over edges               |        slow iterates to all edges        |
| can be slower looking up /querying edges | faster in searching specific edge lookup |


# Uses of Graph Traversal

* Peer to peer networking
* Web Crawlers
* Finding closest macthes / recommendations
* Shortest Path
  * GPS Navigation
  * Solving Mazes
  * AI (shortest path to win game)

