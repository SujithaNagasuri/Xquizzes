// src/data/questions.js
const questions = {
  cn: [
    {
      question: "Which protocol is used to find MAC address from IP?",
      options: ["ARP", "RARP", "ICMP", "TCP"],
      answer: 0
    },
    {
      question: "Which protocol is used to find MAC address from IP?",
      options: ["ARP", "RARP", "ICMP", "TCP"],
      answer: 0
    },
    {
      question: "Which layer does TCP operate at?",
      options: ["Network", "Transport", "Data Link", "Application"],
      answer: 1
    },
    {
      question: "A connectionless transport protocol is:",
      options: ["TCP", "UDP", "SCTP", "DCCP"],
      answer: 1
    },
    {
      question: "Which device operates at the Data Link layer?",
      options: ["Router", "Switch", "Hub", "Repeater"],
      answer: 1
    },
    {
      question: "IPv4 address length is:",
      options: ["32 bits", "64 bits", "128 bits", "16 bits"],
      answer: 0
    },
    {
      question: "Which protocol is used for email?",
      options: ["SMTP", "FTP", "TELNET", "SNMP"],
      answer: 0
    },
    {
      question: "Which topology has the highest reliability?",
      options: ["Bus", "Ring", "Star", "Mesh"],
      answer: 3
    },
    {
      question: "Which layer does encryption happen?",
      options: ["Application", "Network", "Presentation", "Session"],
      answer: 2
    },
    {
      question: "Which protocol is used for secure communication?",
      options: ["HTTP", "HTTPS", "FTP", "TELNET"],
      answer: 1
    },
    {
      question: "Which protocol is used for file transfer?",
      options: ["FTP", "SMTP", "POP3", "SSH"],
      answer: 0
    }
  ],

  os: [
    {
      question: "Which CPU scheduling algorithm is preemptive?",
      options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "None of the above"],
      answer: 2
    },
    {
      question: "Virtual memory uses which technique?",
      options: ["Paging", "Clustering", "Segmentation only", "Encryption"],
      answer: 0
    },
    {
      question: "Which of these is NOT an OS?",
      options: ["Windows", "Linux", "Oracle", "MacOS"],
      answer: 2
    },
    {
      question: "Thrashing is related to:",
      options: ["Deadlock", "Paging", "Scheduling", "Semaphores"],
      answer: 1
    },
    {
      question: "Which algorithm is used for deadlock avoidance?",
      options: ["Banker's", "FIFO", "LRU", "Round Robin"],
      answer: 0
    },
    {
      question: "Which is a non-preemptive algorithm?",
      options: ["SJF", "FCFS", "RR", "SRTF"],
      answer: 1
    },
    {
      question: "Which is used for synchronization?",
      options: ["Semaphore", "Cache", "Register", "Threads"],
      answer: 0
    },
    {
      question: "Which is not a page replacement algorithm?",
      options: ["FIFO", "LRU", "OPT", "Round Robin"],
      answer: 3
    },
    {
      question: "Critical section problem is solved by:",
      options: ["Mutual exclusion", "Paging", "Thrashing", "Forking"],
      answer: 0
    },
    {
      question: "Which memory is fastest?",
      options: ["Cache", "RAM", "Hard Disk", "Virtual Memory"],
      answer: 0
    }
  ],

  dbms: [
    {
      question: "Which normal form removes transitive dependency?",
      options: ["1NF", "2NF", "3NF", "BCNF"],
      answer: 2
    },
    {
      question: "Which SQL statement is used to remove a row?",
      options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
      answer: 0
    },
    {
      question: "Which key uniquely identifies a tuple?",
      options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"],
      answer: 0
    },
    {
      question: "Which command removes the whole table?",
      options: ["DELETE", "DROP", "UPDATE", "TRUNCATE"],
      answer: 1
    },
    {
      question: "Which join returns common rows?",
      options: ["Left Join", "Right Join", "Inner Join", "Full Join"],
      answer: 2
    },
    {
      question: "Which language is used to query data?",
      options: ["DML", "DDL", "DCL", "TCL"],
      answer: 0
    },
    {
      question: "Which is a NoSQL database?",
      options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
      answer: 1
    },
    {
      question: "Which ensures data consistency?",
      options: ["ACID", "BASE", "CRUD", "DML"],
      answer: 0
    },
    {
      question: "Which clause is used with aggregate functions?",
      options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
      answer: 0
    },
    {
      question: "Which constraint ensures uniqueness but allows NULL?",
      options: ["PRIMARY KEY", "UNIQUE", "CHECK", "NOT NULL"],
      answer: 1
    }
  ],

  algo: [
    {
      question: "Time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: 1
    },
    {
      question: "Dijkstra's algorithm works on:",
      options: ["Negative weights allowed", "No negative weights", "Only trees", "Unweighted graphs"],
      answer: 1
    },
    {
      question: "Which is a divide and conquer algorithm?",
      options: ["Merge Sort", "Bubble Sort", "Selection Sort", "Insertion Sort"],
      answer: 0
    },
    {
      question: "Which data structure uses FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: 1
    },
    {
      question: "Which algorithm is used for MST?",
      options: ["Kruskal", "Dijkstra", "Floyd", "KMP"],
      answer: 0
    },
    {
      question: "Which sorting algorithm is the fastest on average?",
      options: ["Quick Sort", "Bubble Sort", "Merge Sort", "Insertion Sort"],
      answer: 0
    },
    {
      question: "Best case time of Quick Sort?",
      options: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
      answer: 1
    },
    {
      question: "Which algorithm finds all-pairs shortest path?",
      options: ["Dijkstra", "Floyd-Warshall", "Prim", "Bellman-Ford"],
      answer: 1
    },
    {
      question: "DFS uses which data structure?",
      options: ["Queue", "Stack", "Array", "Heap"],
      answer: 1
    },
    {
      question: "Which algorithm is used for pattern matching?",
      options: ["KMP", "Prim", "Bellman-Ford", "Heap Sort"],
      answer: 0
    }
  ],

  dm: [
    {
      question: "Which of the following is a tautology?",
      options: ["P ∧ ¬P", "P ∨ ¬P", "P → P", "¬P ∧ ¬P"],
      answer: 1
    },
    {
      question: "Contradiction is:",
      options: ["Always true", "Always false", "Sometimes true", "None"],
      answer: 1
    },
    {
      question: "Number of subsets of a set with 3 elements:",
      options: ["3", "6", "8", "9"],
      answer: 2
    },
    {
      question: "What is the value of P ∧ (P → Q)?",
      options: ["P", "Q", "¬P", "P ∧ Q"],
      answer: 1
    },
    {
      question: "n! means:",
      options: ["n squared", "n factorial", "n power n", "None"],
      answer: 1
    },
    {
      question: "Which is a valid implication?",
      options: ["P → Q", "P ∧ Q", "P ↔ Q", "P ⊕ Q"],
      answer: 0
    },
    {
      question: "Which graph has edges equal to n-1?",
      options: ["Tree", "Complete Graph", "Cycle", "Bipartite"],
      answer: 0
    },
    {
      question: "Which is an equivalence relation property?",
      options: ["Reflexive", "Transitive", "Symmetric", "All"],
      answer: 3
    },
    {
      question: "Degree of a vertex means:",
      options: ["No. of edges", "No. of nodes", "No. of paths", "None"],
      answer: 0
    },
    {
      question: "If A = {1,2}, B = {a,b}, |A × B| = ?",
      options: ["2", "4", "6", "8"],
      answer: 1
    }
  ]
};

export default questions;
