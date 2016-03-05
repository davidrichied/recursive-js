var the_rec_fun = function the_rec_fun(the_param) {
	document.writeln('Line 2: the_param is ' + the_param + '<br />')
	if (the_param < 3) {
		the_rec_fun(the_param + 1);
		document.writeln('Line 5: the_param is ' + the_param + '<br />');


	}
	document.writeln("Line 9: the_param is " + the_param + '<br />');
};

the_rec_fun(0);



/*
****Level 0
	Line 2: write - the_param is 0
	Line 3: 0 < 3 ?
	Line 4: Run the_rec_fun(the_param+1)

********Level 1
		Line 2: write - the_param is 1
		Line 3: 1 < 3 ?
		Line 4: Run the_rec_fun(the_param+1)

************Level 2
			Line 2: write - the_param is 2
			Line 3: 2 < 3 ?
			Line 4: Run the_rec_fun(the_param+1)

****************Level 3
				Line 2: write - the_param is 3
				Line 3: 3 < 3 ?
				Line 9: write - Line 9: the_param is 3
				Return to Level 2, line 5

************Level 2
			Line 5: write - Line 5: the_param is 2
			Line 9: write - Line 9: the_param is 2
			Return to Level 1 line 5.

********Level 1
		Line 5: write - Line 5: the_param is 1
		Line 9: write - Line 9: the_param is 1
		Return to Level 0, line 5.

****Level 0
	Line 5: write - the_param is 0
	Line 9: write - the_param is 0

Recursive function is complete.

*/

