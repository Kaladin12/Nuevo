class Node{
	constructor(data, left=null, right=null){
		this.data=data;
		this.left=left;
		this.right=right;
	}
}

class binarySortingTree{
	constructor(){
		this.root=null;
	}
	add(data){
		const node=this.root;
		if (this.root===null){
			this.root=new Node(data);
			return;
		} else{
			const SearchTree = function(node){
				if (data < node.data){
					if (node.left===null){
						node.left=new Node(data);
						return;					
					} else if (node.left!=null){
						return SearchTree(node.left);//convierte a node.left en su nuevo root
					}
				} else if (data>node.data){
					if (node.right===null){
						node.right=new Node(data);
						return;
					} else if (node.right!=null){
						return SearchTree(node.right);
					}
				} else{
					return null;
				}
			};
			return SearchTree(node);
		}
	}

	findMinimum(){//recorre hacia la izquierda hasta encontrar un null
		let currentNode=this.root;
		while (currentNode.left!==null){
			currentNode=currentNode.left;
		}
		return currentNode.data;
	}

	findMaximum(){
		let currentNode=this.root;
		while (currentNode.right!=null){
			currentNode=currentNode.right;
		}
		return currentNode.data;
	}
	find(data){
		let currentNode=this.root;
		while (currentNode.data!==data){
			if (data<currentNode.data){
				currentNode=currentNode.left;
			}
			else{
				currentNode=currentNode.right;
			}
			if (currentNode===null){
				return null;
			}
		}
		return currentNode;
	}

	isPresent(data){
		let currentNode=this.root;
		while (currentNode){
			if (data===currentNode.data){
				return true;
			}

			if (data<currentNode.data){
				currentNode=currentNode.left;
			}
			else {
				currentNode=currentNode.right;
			}
		}
		return false;
	}
}


function myPrint(node){
	if (node===null){
		return 'nope';
	}
	myPrint(node.left);
	console.log(node.data+' ');
	myPrint(node.right);
}

const myBST=new binarySortingTree();
let myData=[]
for (var i = 22; i >= 0; i--) {
	myData.push(Math.floor(Math.random()*100));
}
for (var i = myData.length - 1; i >= 0; i--) {
	myBST.add(myData[i])
}
myPrint(myBST.root);
console.log(myBST.isPresent(null));