class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    add(data) {
        const newNode = new node(data)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
    }

    remove(data){
        let current = this.head
        let previous = null
        while (current.data !== data) {
            previous = current
            current = current.next
        }
        if (previous === null) {
            this.head = current.next
        } else {
            previous.next = current.next
        }
        this.length--
    }

    print() {
        let current = this.head
        let result = ''
        while (current) {
            result += current.data + ' -> '
            current = current.next
        }
        return result + 'null'
    }
}


function josephus(n, k) {
      const list = new LinkedList()
  for (let i = 1; i <= n; i++) {
    list.add(i)
  }
  let current = list.head
  while (list.length > 1) {
    for (let i = 1; i < k; i++) {
      if (current.next) {
        current = current.next
      } else {
        current = list.head
      }
    }
    list.remove(current.data)
    if (current.next) {
      current = current.next
    } else {
      current = list.head
    }
  }
  return list.head.data
}

module.exports = josephus