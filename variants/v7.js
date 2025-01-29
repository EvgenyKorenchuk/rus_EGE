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

	if (t1 == 'посреди' || t1 == 'Посреди' || t1 == ' среди' || t1 == ' Среди') {
		res += 1;
		document.getElementById('result1').textContent = 'Верно';
		document.getElementById('result1').style.color = '#44dd44';
	}

	document.getElementById('rightAns1').style.display = 'inline';
	document.getElementById('result1').style.display = 'inline';

	if (t2 == '23' || t2 == '32') {
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

	if (t4 == '245' || t4 == '254' || t4 == '425' || t4 == '452' || t4 == '524' || t4 == '542') {
		res += 1;
		document.getElementById('result4').textContent = 'Верно';
		document.getElementById('result4').style.color = '#44dd44';
	}

	document.getElementById('rightAns4').style.display = 'inline';
	document.getElementById('result4').style.display = 'inline';

	if (t5 == 'экономичный' || t5 == 'Экономичный') {
		res += 1;
		document.getElementById('result5').textContent = 'Верно';
		document.getElementById('result5').style.color = '#44dd44';
	}

	document.getElementById('rightAns5').style.display = 'inline';
	document.getElementById('result5').style.display = 'inline';

	if (t6 == 'цен' || t6 == 'Цен') {
		res += 1;
		document.getElementById('result6').textContent = 'Верно';
		document.getElementById('result6').style.color = '#44dd44';
	}

	document.getElementById('rightAns6').style.display = 'inline';
	document.getElementById('result6').style.display = 'inline';

	if (t7 == 'молодой' || t7 == 'Молодой') {
		res += 1;
		document.getElementById('result7').textContent = 'Верно';
		document.getElementById('result7').style.color = '#44dd44';
	}

	document.getElementById('rightAns7').style.display = 'inline';
	document.getElementById('result7').style.display = 'inline';

	if (t8 == '54312') {
		res += 2;
		document.getElementById('result8').textContent = 'Верно';
		document.getElementById('result8').style.color = '#44dd44';
	}

	document.getElementById('rightAns8').style.display = 'inline';
	document.getElementById('result8').style.display = 'inline';

	if (t9 == '135' || t9 == '153' || t9 == '315' || t9 == '351' || t9 == '513' || t9 == '531') {
		res += 1;
		document.getElementById('result9').textContent = 'Верно';
		document.getElementById('result9').style.color = '#44dd44';
	}

	document.getElementById('rightAns9').style.display = 'inline';
	document.getElementById('result9').style.display = 'inline';

	if (t10 == '23' || t10 == '32') {
		res += 1;
		document.getElementById('result10').textContent = 'Верно';
		document.getElementById('result10').style.color = '#44dd44';
	}

	document.getElementById('rightAns10').style.display = 'inline';
	document.getElementById('result10').style.display = 'inline';

	if (t11 == '125' || t11 == '152' || t11 == '215' || t11 == '251' || t11 == '512' || t11 == '521') {
		res += 1;
		document.getElementById('result11').textContent = 'Верно';
		document.getElementById('result11').style.color = '#44dd44';
	}

	document.getElementById('rightAns11').style.display = 'inline';
	document.getElementById('result11').style.display = 'inline';

	if (t12 == '235' || t12 == '253' || t12 == '325' || t12 == '352' || t12 == '523' || t12 == '532') {
		res += 1;
		document.getElementById('result12').textContent = 'Верно';
		document.getElementById('result12').style.color = '#44dd44';
	}

	document.getElementById('rightAns12').style.display = 'inline';
	document.getElementById('result12').style.display = 'inline';

	if (t13 == '235' || t13 == '253' || t13 == '325' || t13 == '352' || t13 == '523' || t13 == '532') {
		res += 1;
		document.getElementById('result13').textContent = 'Верно';
		document.getElementById('result13').style.color = '#44dd44';
	}

	document.getElementById('rightAns13').style.display = 'inline';
	document.getElementById('result13').style.display = 'inline';

	if (t14 == '34' || t14 == '43') {
		res += 1;
		document.getElementById('result14').textContent = 'Верно';
		document.getElementById('result14').style.color = '#44dd44';
	}

	document.getElementById('rightAns14').style.display = 'inline';
	document.getElementById('result14').style.display = 'inline';

	if (t15 == '1234' || t15 == '1243' || t15 == '1324' || t15 == '1342' || t15 == '1423' || t15 == '1432' || t15 == '2134' || t15 == '2143' || t15 == '2314' || t15 == '2341' || t15 == '2413' || t15 == '2431'|| t15 == '3124' || t15 == '3142' || t15 == '3214' || t15 == '3241' || t15 == '3412' || t15 == '3421'|| t15 == '4123' || t15 == '4132' || t15 == '4213' || t15 == '4231' || t15 == '4312' || t15 == '4321') {
		res += 1;
		document.getElementById('result15').textContent = 'Верно';
		document.getElementById('result15').style.color = '#44dd44';
	}

	document.getElementById('rightAns15').style.display = 'inline';
	document.getElementById('result15').style.display = 'inline';

	if (t16 == '45' || t16 == '54') {
		res += 1;
		document.getElementById('result16').textContent = 'Верно';
		document.getElementById('result16').style.color = '#44dd44';
	}

	document.getElementById('rightAns16').style.display = 'inline';
	document.getElementById('result16').style.display = 'inline';

	if (t17 == '12' || t17 == '21') {
		res += 1;
		document.getElementById('result17').textContent = 'Верно';
		document.getElementById('result17').style.color = '#44dd44';
	}

	document.getElementById('rightAns17').style.display = 'inline';
	document.getElementById('result17').style.display = 'inline';

	if (t18.length == 6) {
		res += 1;
		document.getElementById('result18').textContent = 'Верно';
		document.getElementById('result18').style.color = '#44dd44';
	}

	document.getElementById('rightAns18').style.display = 'inline';
	document.getElementById('result18').style.display = 'inline';

	if (t19 == '1645' || t19 == '1654' || t19 == '1465' || t19 == '1456' || t19 == '1564' || t19 == '1546' || t19 == '6145' || t19 == '6154' || t19 == '6415' || t19 == '6451' || t19 == '6514' || t19 == '6541' || t19 == '4165' || t19 == '4156' || t19 == '4615' || t19 == '4651' || t19 == '4516' || t19 == '4561' || t19 == '5164' || t19 == '5146' || t19 == '5614' ||t19 == '5641' || t19 == '5416' || t19 == '5461') {
		res += 1;
		document.getElementById('result19').textContent = 'Верно';
		document.getElementById('result19').style.color = '#44dd44';
	}

	document.getElementById('rightAns19').style.display = 'inline';
	document.getElementById('result19').style.display = 'inline';

	if (t20 == '341' || t20 == '314' || t20 == '431' || t20 == '413' || t20 == '134' || t20 == '143') {
		res += 1;
		document.getElementById('result20').textContent = 'Верно';
		document.getElementById('result20').style.color = '#44dd44';
	}

	document.getElementById('rightAns20').style.display = 'inline';
	document.getElementById('result20').style.display = 'inline';

	if (t21 == '52' || t21 == '25') {
		res += 1;
		document.getElementById('result21').textContent = 'Верно';
		document.getElementById('result21').style.color = '#44dd44';
	}

	document.getElementById('rightAns21').style.display = 'inline';
	document.getElementById('result21').style.display = 'inline';

	if (t22 == '59273') {
		res += 2;
		document.getElementById('result22').textContent = 'Верно';
		document.getElementById('result22').style.color = '#44dd44';
	}

	document.getElementById('rightAns22').style.display = 'inline';
	document.getElementById('result22').style.display = 'inline';

	if (t23 == '234' || t23 == '243' || t23 == '324' || t23 == '342' || t23 == '423' || t23 == '432') {
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

	if (t25 == 'вголовуприходит' || t25 == 'Вголовуприходит' || t25 == 'приходитвголову' || t25 == 'Приходитвголову' || t25 == 'обратиласьвслух' || t25 == 'Обратиласьвслух' || t25 == 'вслухобратилась' || t25 == 'Вслухобратилась') {
		res += 1;
		document.getElementById('result25').textContent = 'Верно';
		document.getElementById('result25').style.color = '#44dd44';
	}

	document.getElementById('rightAns25').style.display = 'inline';
	document.getElementById('result25').style.display = 'inline';

	if (t26 == '1215' || t26 == '1512') {
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