
//** UNICORN */

const unicornArr = ['unicorn', 'UNICORN', 'Unicorn'];

let elements3 = document.getElementsByTagName('*'); // stores all elements3 matching the tag '*' inside an array-like list (node3List), elements3

for (let indexRedWords3 = 0; indexRedWords3 < unicornArr.length; indexRedWords3++) { // for loop to search through array of red words
	for (let i = 0; i < elements3.length; i++) { // 
		for (let j = 0; j < elements3[i].childNodes.length; j++) { 
			let node3 = elements3[i].childNodes[j]; // now node3 represnts all the child node3s inside index i of element
			if (node3.nodeType === 3) { // node3.node3Type is integer that identifies what the property is. The actual text inside an element or an attribute has a node3.node3Type value of 3. so if the node3 contains text...
				// then assign that node3's node3Value to a variable so it can store the value of the text, which is a string
				let evilWord3 = node3.nodeValue; // The node3Value property of the Node3 interface returns or sets the value of the current node3. For text, returns the content of the text node3
				let replaced3 = evilWord3.replace(unicornArr[indexRedWords3], '🦄'); // now that you have "found" the text that happens to be a match inside the bad words array, replace it with the 3 monkey emojis.

				if (replaced3 !== evilWord3) {
					// after the replace method, if the replaced3Word doesn't match the original text content of the textnode3 (which it shouldn't), then create a new text node3 containing the replaced3Word (monkeys)
					let newChild3 = document.createTextNode(replaced3);
					// text below first removes the node3 (old element) since it exists, and replaces it with the newly created replaced3 textNode3;
					elements3[i].replaceChild(newChild3, node3);
				}
			}
		}
	}
}

//** BITCH */
const bishArr = ['bitch', 'BITCH', 'Bitch', 'b1tch', 'B1TCH', 'B1tch', 'b*tch', 'B*TCH', 'B*tch'];

let elements4 = document.getElementsByTagName('*'); // stores all elements4 matching the tag '*' inside an array-like list (node4List), elements4

for (let indexRedWords4 = 0; indexRedWords4 < bishArr.length; indexRedWords4++) { // for loop to search through array of red words
	for (let i = 0; i < elements4.length; i++) { // 
		for (let j = 0; j < elements4[i].childNodes.length; j++) { 
			let node4 = elements4[i].childNodes[j]; // now node4 represnts all the child node4s inside index i of element
			if (node4.nodeType === 3) { // node4.node4Type is integer that identifies what the property is. The actual text inside an element or an attribute has a node4.node4Type value of 3. so if the node4 contains text...
				// then assign that node4's node4Value to a variable so it can store the value of the text, which is a string
				let evilWord4 = node4.nodeValue; // The node4Value property of the Node4 interface returns or sets the value of the current node4. For text, returns the content of the text node4
				let replaced4 = evilWord4.replace(bishArr[indexRedWords4], '👸🏻'); // now that you have "found" the text that happens to be a match inside the bad words array, replace it with the 3 monkey emojis.

				if (replaced4 !== evilWord4) {
					// after the replace method, if the replaced4Word doesn't match the original text content of the textnode4 (which it shouldn't), then create a new text node4 containing the replaced4Word (monkeys)
					let newChild4 = document.createTextNode(replaced4);
					// text below first removes the node4 (old element) since it exists, and replaces it with the newly created replaced4 textNode4;
					elements4[i].replaceChild(newChild4, node4);
				}
			}
		}
	}
}

//** red words swear filter */

// let redCaps = redWordsUpperCaseArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))

// redWordsArray = redWordsLowerCaseArray.concat(redCaps);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
    	if(request.search){
    		findWord(request.searchWord);
    		updateWord(request.searchWord);
    	}

    	if(!request.search){
    		$('span.highlighted').removeClass('highlighted').addClass('previous');
    		$('span.previous').css({'font-weight': 'normal', 'background-color': 'white', 'color': 'black'});
    	}        
        
        sendResponse({farewell: "completed"});
});

//* if user decided to add custom words, then add it to blueCustom
// blueCustomWords.push(/* custom words added from chrome extension form/settings */)
// if (blueCustomWords) addWords(blueCustomWords); // if there are words inside blueCustomWords, then it exists. empty array is falsey


/*
document.body.innerText || document.body.textContent would give us text (string) present in the body of the current document.

split(/\s+/) would split the text (string object) collected above into an array of strings by separating the string into substrings.

sort() indeed sort the array that was created above.

The interesting part of the one liner!

filter( function(v,i,o){return v!==o[i-1];}); this method creates a set out of the given array, set as in remove duplicates so that searching/parsing would be faster and better, this can be eliminated.

filter() basically creates a new array with all elements2 that pass the test implemented by the provided function.

*/

    //          /((((((\\\\
    // =====((((((((((\\\\\     '~~!!!~~~BAD WORD BE GONE~~~!!!~~' 
    //      ((           \\\\\\\
    //      ( (*    _/      \\\\\\\ 
    //        \    /  \      \\\\\\________________
    //         |  |   |       </                  ((\\\\
    //         o_|   /        /                      \ \\\\    \\\\\\\
    //              |  ._    (                        \ \\\\\\\\\\\\\\\\
    //              | /                       /       /    \\\\\\\     \\
    //      .______/\/     /                 /       /         \\\
    //     / __.____/    _/         ________(       /\
    //    / / / ________/`_________'         \     /  \_
    //   / /  \ \                             \   \ \_  \
    //  ( <    \ \                             >  /    \ \
    //   \/     \\_                           / /       > )
    //           \_|                         / /       / /
    //                                     _//       _//
    //                                    /_|       /_| 