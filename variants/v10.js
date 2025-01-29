function CheckResult(form) {
	var t1 = document.getElementById('1').value;
	var t2 = document.getElementById('2').value;
	var t3 = document.getElementById('3').value;
	var t4 = document.getElementById('4').value;
	var t5 = document.getElementById('5').value;
	var t6 = document.getElementById('6').value;
	var t7 = document.getElementById('7').value;
	var t8 = document.getElementById('8').value;
	var t9 = document.getElementById('9').value;
	var t10 = document.getElementById('10').value;
	var t11 = document.getElementById('11').value;
	var t12 = document.getElementById('12').value;
	var t13 = document.getElementById('13').value;
	var t14 = document.getElementById('14').value;
	var t15 = document.getElementById('15').value;
	var t16 = document.getElementById('16').value;
	var t17 = document.getElementById('17').value;
	var t18 = document.getElementById('18').value;
	var t19 = document.getElementById('19').value;
	var t20 = document.getElementById('20').value;
	var t21 = document.getElementById('21').value;
	var t22 = document.getElementById('22').value;
	var t23 = document.getElementById('23').value;
	var t24 = document.getElementById('24').value;
	var t25 = document.getElementById('25').value;
	var t26 = document.getElementById('26').value;

	var res = 0;

	if (t1 == 'каждый' || t1 == 'Каждый' || t1 == 'всякий' || t1 == 'Всякий') {
		res += 1;
		document.getElementById('result1').textContent = 'Верно';
		document.getElementById('result1').style.color = '#44dd44';
	}

	document.getElementById('rightAns1').style.display = 'inline';
	document.getElementById('result1').style.display = 'inline';

	if (t2 == '154' || t2 == '145' || t2 == '514' || t2 == '541' || t2 == '415' || t2 == '451') {
		res += 1;
		document.getElementById('result2').textContent = 'Верно';
		document.getElementById('result2').style.color = '#44dd44';
	}

	document.getElementById('rightAns2').style.display = 'inline';
	document.getElementById('result2').style.display = 'inline';

	if (t3 == '25' || t3 == '52') {
		res += 1;
		document.getElementById('result3').textContent = 'Верно';
		document.getElementById('result3').style.color = '#44dd44';
	}

	document.getElementById('rightAns3').style.display = 'inline';
	document.getElementById('result3').style.display = 'inline';

	if (t4 == '24' || t4 == '42') {
		res += 1;
		document.getElementById('result4').textContent = 'Верно';
		document.getElementById('result4').style.color = '#44dd44';
	}

	document.getElementById('rightAns4').style.display = 'inline';
	document.getElementById('result4').style.display = 'inline';

	if (t5 == 'дипломатический' || t5 == 'Дипломатический') {
		res += 1;
		document.getElementById('result5').textContent = 'Верно';
		document.getElementById('result5').style.color = '#44dd44';
	}

	document.getElementById('rightAns5').style.display = 'inline';
	document.getElementById('result5').style.display = 'inline';

	if (t6 == 'структурным' || t6 == 'Структурным') {
		res += 1;
		document.getElementById('result6').textContent = 'Верно';
		document.getElementById('result6').style.color = '#44dd44';
	}

	document.getElementById('rightAns6').style.display = 'inline';
	document.getElementById('result6').style.display = 'inline';

	if (t7 == 'лопнувшие' || t7 == 'Лопнувшие') {
		res += 1;
		document.getElementById('result7').textContent = 'Верно';
		document.getElementById('result7').style.color = '#44dd44';
	}

	document.getElementById('rightAns7').style.display = 'inline';
	document.getElementById('result7').style.display = 'inline';

	if (t8 == '47831') {
		res += 2;
		document.getElementById('result8').textContent = 'Верно';
		document.getElementById('result8').style.color = '#44dd44';
	}

	document.getElementById('rightAns8').style.display = 'inline';
	document.getElementById('result8').style.display = 'inline';

	if (t9 == '234' || t9 == '243' || t9 == '324' || t9 == '342' || t9 == '423' || t9 == '432') {
		res += 1;
		document.getElementById('result9').textContent = 'Верно';
		document.getElementById('result9').style.color = '#44dd44';
	}

	document.getElementById('rightAns9').style.display = 'inline';
	document.getElementById('result9').style.display = 'inline';

	if (t10 == '235' || t10 == '253' || t10 == '325' || t10 == '352' || t10 == '523' || t10 == '532') {
		res += 1;
		document.getElementById('result10').textContent = 'Верно';
		document.getElementById('result10').style.color = '#44dd44';
	}

	document.getElementById('rightAns10').style.display = 'inline';
	document.getElementById('result10').style.display = 'inline';

	if (t11 == '235' || t11 == '253' || t11 == '325' || t11 == '352' || t11 == '523' || t11 == '532') {
		res += 1;
		document.getElementById('result11').textContent = 'Верно';
		document.getElementById('result11').style.color = '#44dd44';
	}

	document.getElementById('rightAns11').style.display = 'inline';
	document.getElementById('result11').style.display = 'inline';

	if (t12 == '135' || t12 == '153' || t12 == '315' || t12 == '351' || t12 == '513' || t12 == '531') {
		res += 1;
		document.getElementById('result12').textContent = 'Верно';
		document.getElementById('result12').style.color = '#44dd44';
	}

	document.getElementById('rightAns12').style.display = 'inline';
	document.getElementById('result12').style.display = 'inline';

	if (t13 == '124' || t13 == '142' || t13 == '214' || t13 == '241' || t13 == '412' || t13 == '421') {
		res += 1;
		document.getElementById('result13').textContent = 'Верно';
		document.getElementById('result13').style.color = '#44dd44';
	}

	document.getElementById('rightAns13').style.display = 'inline';
	document.getElementById('result13').style.display = 'inline';

	if (t14 == '134' || t14 == '143' || t14 == '314' || t14 == '341' || t14 == '413' || t14 == '431') {
		res += 1;
		document.getElementById('result14').textContent = 'Верно';
		document.getElementById('result14').style.color = '#44dd44';
	}

	document.getElementById('rightAns14').style.display = 'inline';
	document.getElementById('result14').style.display = 'inline';

	if (t15 == '23' || t15 == '32') {
		res += 1;
		document.getElementById('result15').textContent = 'Верно';
		document.getElementById('result15').style.color = '#44dd44';
	}

	document.getElementById('rightAns15').style.display = 'inline';
	document.getElementById('result15').style.display = 'inline';

	if (t16 == '23' || t16 == '32') {
		res += 1;
		document.getElementById('result16').textContent = 'Верно';
		document.getElementById('result16').style.color = '#44dd44';
	}

	document.getElementById('rightAns16').style.display = 'inline';
	document.getElementById('result16').style.display = 'inline';

	if (t17 == '34' || t17 == '43') {
		res += 1;
		document.getElementById('result17').textContent = 'Верно';
		document.getElementById('result17').style.color = '#44dd44';
	}

	document.getElementById('rightAns17').style.display = 'inline';
	document.getElementById('result17').style.display = 'inline';

	if (t18 == '135789') {
		res += 1;
		document.getElementById('result18').textContent = 'Верно';
		document.getElementById('result18').style.color = '#44dd44';
	}

	document.getElementById('rightAns18').style.display = 'inline';
	document.getElementById('result18').style.display = 'inline';

	if (t19 == '14' || t19 == '41') {
		res += 1;
		document.getElementById('result19').textContent = 'Верно';
		document.getElementById('result19').style.color = '#44dd44';
	}

	document.getElementById('rightAns19').style.display = 'inline';
	document.getElementById('result19').style.display = 'inline';

	if (t20 == '124' || t20 == '142' || t20 == '214' || t20 == '241' || t20 == '412' || t20 == '421') {
		res += 1;
		document.getElementById('result20').textContent = 'Верно';
		document.getElementById('result20').style.color = '#44dd44';
	}

	document.getElementById('rightAns20').style.display = 'inline';
	document.getElementById('result20').style.display = 'inline';

	if (t21 == '568' || t21 == '586' || t21 == '658' || t21 == '685' || t21 == '865' || t21 == '856') {
		res += 1;
		document.getElementById('result21').textContent = 'Верно';
		document.getElementById('result21').style.color = '#44dd44';
	}

	document.getElementById('rightAns21').style.display = 'inline';
	document.getElementById('result21').style.display = 'inline';

	if (t22 == '98456') {
		res += 2;
		document.getElementById('result22').textContent = 'Верно';
		document.getElementById('result22').style.color = '#44dd44';
	}

	document.getElementById('rightAns22').style.display = 'inline';
	document.getElementById('result22').style.display = 'inline';

	if (t23 == '135' || t23 == '153' || t23 == '315' || t23 == '351' || t23 == '513' || t23 == '531') {
		res += 1;
		document.getElementById('result23').textContent = 'Верно';
		document.getElementById('result23').style.color = '#44dd44';
	}

	document.getElementById('rightAns23').style.display = 'inline';
	document.getElementById('result23').style.display = 'inline';

	if (t24 == '25' || t24 == '52') {
		res += 1;
		document.getElementById('result24').textContent = 'Верно';
		document.getElementById('result24').style.color = '#44dd44';
	}

	document.getElementById('rightAns24').style.display = 'inline';
	document.getElementById('result24').style.display = 'inline';

	if (t25 == 'всамомделе' || t25 == 'Всамомделе' || t25 == 'ведутсебя' || t25 == 'Ведутсебя' || t25 == 'ведёшьсебя' || t25 == 'Ведёшьсебя') {
		res += 1;
		document.getElementById('result25').textContent = 'Верно';
		document.getElementById('result25').style.color = '#44dd44';
	}

	document.getElementById('rightAns25').style.display = 'inline';
	document.getElementById('result25').style.display = 'inline';

	if (t26 == '9') {
		res += 1;
		document.getElementById('result26').textContent = 'Верно';
		document.getElementById('result26').style.color = '#44dd44';
	}

	document.getElementById('rightAns26').style.display = 'inline';
	document.getElementById('result26').style.display = 'inline';

	if (res == 28) {
		document.getElementById('score').style.color = 'green';
	}

	document.getElementById('score').textContent = res + ' / 28';

	document.getElementById('upshot').style.display = 'unset';

	return false
}