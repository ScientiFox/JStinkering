//Make a bunch of timer variables
let clock,i_time,s_time1,s_time2;

//Init the timer variables
d = new Date();
i_time = d.getTime();
clock = 0;
s_time1 = 0;
s_time2 = 0;

//Create and init button timers and counters
let b1_timer,b2_timer,b1_counts,b2_counts;
b1_timer = 95;
b2_timer = 80;
b1_counts = 65;
b2_counts = 75;

//initialize light states and counters
let state1,counter1,state2,counter2;
state1 = 0;
counter1 = b1_counts+0;
state2 = 0;
counter2 = b2_counts+0;

//Text input simulator variables
let isKill,textInpBlock;
isKill = 0;
textInpBlock = 0;

//Timer, input, and text scanning variables
let txtTimer,txtFirstIn;
txtTimer = 0;
txtFirstIn = 0;
textPrev = "";

//List of vowels for removal thing
const vowels = ['a','e','i','o','u'];

//Long sample text cycle variables
let K, wordsTimer,wordsDelay,sampleS;
wordsTimer = 0;
wordsDelay = 100;
K = 0;
sampleS = "";
const sampleText = ['This', 'one', 'is', 'going', 'to', 'be', 'a', 'little', 'annoying,', 'but', 'maybe', 'I', 'can', 'put', 'it', 'inot', 'a', 'quick', 'python', 'script', 'to', 'get', 'it', 'formatted', 'correctly,', 'the', 'main', 'thing', 'is', 'that', 'I', 'want', 'it', 'to', 'be', 'a', 'pretty', 'long', 'string', 'so', 'that', 'it', 'can', 'cycle', 'through', 'visibly', 'different', 'lengths', 'quickly', 'and', 'showcase', 'the', 'update', 'in', 'a', 'smooth', 'way.', 'to', 'that', 'end,', "it's", 'pretty', 'simple,', 'I', 'just', 'have', 'to', 'vamp', 'on', 'some', 'text', 'here,', 'ignoring', 'any', 'and', 'all', 'errors', 'I', 'make,', 'even,', 'because', "it's", 'all', 'just', 'a', 'weird', 'version', 'of', 'lorem', 'ipsum,', 'but', 'maybe', 'more', 'self', 'aware.', 'or', 'less,', "it's", 'actually', 'kind', 'of', 'hard', 'to', 'tell', 'when', 'something', 'gets', 'elevated', 'from', 'trope', 'to', 'technique,', 'which', 'would', 'incidentally', 'be', 'a', 'great', 'name', 'for', 'a', 'linguistic', 'paper.'];

//Changing top string inits and timers, plus alphabet for random changes
let topString1 = "It's very strange about timing, but that makes sense with all the event-based stuff";
let topString2 = "And that's not going to stop me from doing sequential things";
let randStrTimer = d.getTime();
let randStrProb = 0.1;
let randStrDur = 500;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Start off top text as default sources
document.getElementById('ts1').innerHTML=topString1;
document.getElementById('ts2').innerHTML=topString2;

//Main loop
setInterval(tickTock,10);

//Regular toast popup test (/super/ annoying)
//setTimeout(makeToast,3000);

//event-based get id of object clicked function
function clickerIDCheck(event){	document.getElementById('clickerOP').innerHTML = event.target.id;}

//function to add a random edit to a string
function randEditStr(S,prob){
	let len = S.length; //get the string's length
	let r = Math.random(); //grab a random number
	let sOut = "" //Output altered text
	if (r < prob){//if the random is less than the probability threshold
		let ind = Math.floor((len+1)*Math.random()); //make a random index in the string
		let i = 0; //iterate over the index, grabbing pre-existing characters from string
		while (i<ind) {sOut = sOut + S.charAt(i);i=i+1;} 
		sOut = sOut + alphabet[Math.floor(47*Math.random())]; //add a new random char at i from the alphabet
		i = i + 1; //increment the counter
		while (i<len) {sOut = sOut + S.charAt(i);i=i+1;} //fill in the remainder of the string unaltered
		return sOut; //output the string
	}
	else{ return S;} //if you don't get the probabiility check, return the string unchanged
}

function checkCharIn(chr,lst){
	// function to check if there's a character in a list
	let i = 0,len = lst.length; //init the scan variables
	let isIn = false; //flag for if you found it
	while (i<len){ //loop over the length of the list
		if (chr == lst[i]){isIn = true;return isIn} //If it's in there, return true
		i = i + 1; //increment the counter
	}
	return isIn; //if it's not in there, return false.
}

//specific function to set the innerHTML for the text block element
function setTBText(newText){document.getElementById('tb').innerHTML=newText;}

function makeToast(){
	//toast popup with some data for the testing on the alerts.
	S = "Values: ";
	S = S + s_time1 + "," + s_time2 + "," + counter1 + "," + counter2;
	alert(S);
}

function toggle1(){
	//a callback to toggle state1 and update the corresponding lightbulb image
	state1 = 1 - state1;
	if (state1==1){document.getElementById('myImage1').src='pic_bulbon.gif';}
	else{document.getElementById('myImage1').src='pic_bulboff.gif';}
}

function toggle2(){
	//a callback to toggle state2 and update the corresponding lightbulb image
	state2 = 1 - state2;
	if (state2==1){document.getElementById('myImage2').src='pic_bulbon.gif';}
	else{document.getElementById('myImage2').src='pic_bulboff.gif';}
}

function lightsOff(){
	//function to set both light images to the off state
	document.getElementById('myImage1').src='pic_bulboff.gif';
	document.getElementById('myImage2').src='pic_bulboff.gif';
}

function makePlot(lst,minVal,maxVal){
	//A function to plot a bar chart of a sequence of list values, scaled to the min and max specified

	let sze = 60; //Fixed text length side of the plot
	let S = ""; //string representing the plot

	let i = 0;len = lst.length; //init the lenght and index
	while (i < len){ //for all the things in the list
		num = Math.floor(sze*(lst[i]-minVal)/(maxVal-minVal)); //project the data in-range onto the width of the plot
		if (num > sze){sze = 20;} //make sure it's clamped
		if (num < 0){num = 0;} //ditto
		let n = 0; //internal index
		while (n<num){S = S + "|"; n = n + 1;} //add in bars up to the scaled value
		while (n<sze){S = S + " "; n = n + 1;} //add in empty space thereafter
		S = S + "<br>"; //Add a break for each line
		i = i + 1; //increment the index
	}
	return S; //output the plot string
}

function tickTock(){
	//main loop

	//update the master clock timer
	d = new Date();
	clock = d.getTime()-i_time;
	document.getElementById('clock').innerHTML="Clocktime: "+(clock/1000.0)+"s";

	display string for the light counters
	S = "s_times: "

	//update the counter1 timer
	if (counter1==b1_counts){S = S + "-,";}
	else{S = S + (d.getTime()-s_time1)/1000.0+"s,";}

	//update the counter2 timer
	if (counter2==b2_counts){S = S + "-";}
	else{S = S + (d.getTime()-s_time2)/1000.0+"s";}

	//Display the counter timer string and  the counts themselves
	document.getElementById('op1').innerHTML=S;
	document.getElementById('op2').innerHTML="ticks: "+(b1_counts-counter1)+","+(b2_counts-counter2);

	//When the counter is less than the max count
	if (counter1 < b1_counts){
		if ((d.getTime()-s_time1) > b1_timer){ //if it's been longer than the set update time
			toggle1(); //Run the toggle for state1
			counter1 = counter1 + 1; //increment the counter
			d = new Date(); //update the timer parameter
			s_time1 = d.getTime();
		}
	}
	if (counter2 < b2_counts){ //do the same as above for counter2
		if ((d.getTime()-s_time2) > b2_timer){
			toggle2();
			counter2 = counter2 + 1;
			d = new Date();
			s_time2 = d.getTime();
		}
	}
	//If both timers and counters are done
	if ((counter1 >= b1_counts)&&(counter2 >= b2_counts)){
		isKill = 0; //mark the routine as ended
		textInpBlock = 0; //reset the input flag to 0
	}

	//for the words timer delay, when past the wait time-
	if (d.getTime()-wordsTimer > wordsDelay){	
		let l = 0; //length index
		sampleS = ""; //sample string holder
		while (l < 9){ //put in 9 words
			let ind = (K+l)%sampleText.length; //grab the next index of the words from sampleText
			sampleS = sampleS + sampleText[ind] + " "; 
			l = l + 1; //increment the length index
		}
		sampleS = sampleS + sampleText[K];// add the word to the sample string

		K = (K + 1)%sampleText.length; //update the primary location index for the sampler
		
		d = new Date(); //Update the words timer variables
		wordsTimer = d.getTime();
	}

	//put the sampel string into the text box
	document.getElementById('text1').value = sampleS;

	//grab the text from the textbox (it's added rapidly above)
	let textVal = document.getElementById('text1').value;

	//If there's new text
	if(textVal != textPrev){
		let i = 0, len = textVal.length,S = ""; //create scan variables
		while (i<len){ //scanning the strings
			chr = textVal.charAt(i); //grab character
			let isVowel = checkCharIn(chr,vowels); //check if it's a vowel
			if (!isVowel){S = S + chr;} //add it if not
			i = i + 1 //increment index
		}
		document.getElementById('tb').innerHTML = S; //put the vowel-less string on display
	}
	textPrev = textVal; //annotate the text so you only run when it's new

	//plotting the wordlengths in the sample text
	let wordLens = [0,0,0,0,0,0,0,0,0,0]; //A list of values to feed to the plotter
	let i,j,len,wordLen; //init vars for list search
	i = textVal.length-1; //get the range of character indices
	j = 0; //internal counter
	len = textVal.length; //length of the sampled text
	wordLen=0; //length of any word in the sample

	//scan the whole text, but not beyonf it
	while ((i >= 0)&&(j < wordLens.length)){

		if (textVal.charAt(i) == " "){ //words break on spaces
			if (wordLen > 0){ //if you do have a word already
				wordLen = 0; //reset length and increment counter
				j = j + 1;
			}
		}
		else{//if not a break
			wordLen = wordLen + 1; //increment word length
			wordLens[j] = wordLen; //update list of lengths
		}
		i = i - 1; //increment scan index
	}

	//make a plot of the data you just took
	wordLenPlot = makePlot(wordLens,0,20);
	document.getElementById('chart').innerHTML=wordLenPlot; 

	//a check test- when the word CLICKY is in the box and the loop isn't active, run do_click and set the flag
	if ((textVal == "CLICKY!")&&(textInpBlock==0)){
		do_click();
		textInpBlock=1;
	}

	//loop to randomly change the top text string over time
	if (d.getTime()-randStrTimer > randStrDur){ //on a refular update schedule
		topString1 = randEditStr(topString1,randStrProb); //change the strings randomly with a given probability
		topString2 = randEditStr(topString2,randStrProb);

		document.getElementById('ts1').innerHTML=topString1; //update the string display
		document.getElementById('ts2').innerHTML=topString2;

		d = new Date(); //update the timers
		randStrTimer = d.getTime()
	}
}

function do_click(){
	//do click resets the flashign bulbs counters and timers
	if (isKill == 0){ //if the routine has been ended
		d = new Date(); //reset timers and counters, to the 'done' levels
		s_time1 = d.getTime();
		counter1 = 0;
		s_time2 = d.getTime();
		counter2 = 0;
		isKill = 1; //mark that the process has been killed
	}
	else{//if the process hasn't been killed, set them to the 'start over' levels
		state1 = 0;
		counter1 = b1_counts+0;
		state2 = 0;
		counter2 = b2_counts+0;
		lightsOff();
		isKill = 0;
	}
}

