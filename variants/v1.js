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

	if (t1 == 'эти' || t1 == 'Эти' || t1 == 'такие' || t1 == 'Такие') {
		res += 1;
		document.getElementById('result1').textContent = 'Верно';
		document.getElementById('result1').style.color = '#44dd44';
	}

	document.getElementById('rightAns1').style.display = 'inline';
	document.getElementById('result1').style.display = 'inline';

	if (t2 == '345' || t2 == '354' || t2 == '435' || t2 == '453' || t2 == '534' || t2 == '543') {
		res += 1;
		document.getElementById('result2').textContent = 'Верно';
		document.getElementById('result2').style.color = '#44dd44';
	}

	document.getElementById('rightAns2').style.display = 'inline';
	document.getElementById('result2').style.display = 'inline';

	if (t3 == '245' || t3 == '254' || t3 == '425' || t3 == '452' || t3 == '524' || t3 == '542') {
		res += 1;
		document.getElementById('result3').textContent = 'Верно';
		document.getElementById('result3').style.color = '#44dd44';
	}

	document.getElementById('rightAns3').style.display = 'inline';
	document.getElementById('result3').style.display = 'inline';

	if (t4 == '145' || t4 == '154' || t4 == '415' || t4 == '451' || t4 == '514' || t4 == '541') {
		res += 1;
		document.getElementById('result4').textContent = 'Верно';
		document.getElementById('result4').style.color = '#44dd44';
	}

	document.getElementById('rightAns4').style.display = 'inline';
	document.getElementById('result4').style.display = 'inline';

	if (t5 == 'праздничный' || t5 == 'Праздничный') {
		res += 1;
		document.getElementById('result5').textContent = 'Верно';
		document.getElementById('result5').style.color = '#44dd44';
	}

	document.getElementById('rightAns5').style.display = 'inline';
	document.getElementById('result5').style.display = 'inline';

	if (t6 == 'очень' || t6 == 'Очень') {
		res += 1;
		document.getElementById('result6').textContent = 'Верно';
		document.getElementById('result6').style.color = '#44dd44';
	}

	document.getElementById('rightAns6').style.display = 'inline';
	document.getElementById('result6').style.display = 'inline';

	if (t7 == 'повидлом' || t7 == 'Повидлом') {
		res += 1;
		document.getElementById('result7').textContent = 'Верно';
		document.getElementById('result7').style.color = '#44dd44';
	}

	document.getElementById('rightAns7').style.display = 'inline';
	document.getElementById('result7').style.display = 'inline';

	if (t8 == '43827') {
		res += 2;
		document.getElementById('result8').textContent = 'Верно';
		document.getElementById('result8').style.color = '#44dd44';
	}

	document.getElementById('rightAns8').style.display = 'inline';
	document.getElementById('result8').style.display = 'inline';

	if (t9 == '25' || t9 == '52') {
		res += 1;
		document.getElementById('result9').textContent = 'Верно';
		document.getElementById('result9').style.color = '#44dd44';
	}

	document.getElementById('rightAns9').style.display = 'inline';
	document.getElementById('result9').style.display = 'inline';

	if (t10 == '134' || t10 == '143' || t10 == '314' || t10 == '341' || t10 == '413' || t10 == '431') {
		res += 1;
		document.getElementById('result10').textContent = 'Верно';
		document.getElementById('result10').style.color = '#44dd44';
	}

	document.getElementById('rightAns10').style.display = 'inline';
	document.getElementById('result10').style.display = 'inline';

	if (t11 == '123' || t11 == '132' || t11 == '213' || t11 == '231' || t11 == '312' || t11 == '321') {
		res += 1;
		document.getElementById('result11').textContent = 'Верно';
		document.getElementById('result11').style.color = '#44dd44';
	}

	document.getElementById('rightAns11').style.display = 'inline';
	document.getElementById('result11').style.display = 'inline';

	if (t12 == '245' || t12 == '254' || t12 == '425' || t12 == '452' || t12 == '524' || t12 == '542') {
		res += 1;
		document.getElementById('result12').textContent = 'Верно';
		document.getElementById('result12').style.color = '#44dd44';
	}

	document.getElementById('rightAns12').style.display = 'inline';
	document.getElementById('result12').style.display = 'inline';

	if (t13 == '134' || t13 == '143' || t13 == '314' || t13 == '341' || t13 == '413' || t13 == '431') {
		res += 1;
		document.getElementById('result13').textContent = 'Верно';
		document.getElementById('result13').style.color = '#44dd44';
	}

	document.getElementById('rightAns13').style.display = 'inline';
	document.getElementById('result13').style.display = 'inline';

	if (t14 == '135' || t14 == '153' || t14 == '315' || t14 == '351' || t14 == '513' || t14 == '531') {
		res += 1;
		document.getElementById('result14').textContent = 'Верно';
		document.getElementById('result14').style.color = '#44dd44';
	}

	document.getElementById('rightAns14').style.display = 'inline';
	document.getElementById('result14').style.display = 'inline';

	if (t15 == '14' || t15 == '41') {
		res += 1;
		document.getElementById('result15').textContent = 'Верно';
		document.getElementById('result15').style.color = '#44dd44';
	}

	document.getElementById('rightAns15').style.display = 'inline';
	document.getElementById('result15').style.display = 'inline';

	if (t16 == '125' || t16 == '152' || t16 == '215' || t16 == '251' || t16 == '512' || t16 == '521') {
		res += 1;
		document.getElementById('result16').textContent = 'Верно';
		document.getElementById('result16').style.color = '#44dd44';
	}

	document.getElementById('rightAns16').style.display = 'inline';
	document.getElementById('result16').style.display = 'inline';

	if (t17 == '134' || t17 == '143' || t17 == '314' || t17 == '341' || t17 == '413' || t17 == '431') {
		res += 1;
		document.getElementById('result17').textContent = 'Верно';
		document.getElementById('result17').style.color = '#44dd44';
	}

	document.getElementById('rightAns17').style.display = 'inline';
	document.getElementById('result17').style.display = 'inline';

	if (t18 == '1245' || t18 == '1254' || t18 == '1425' || t18 == '1452' || t18 == '1524' || t18 == '1542' || t18 == '2145' || t18 == '2154' || t18 == '2415' || t18 == '2451' || t18 == '2514' || t18 == '2541' || t18 == '4125' || t18 == '4152' || t18 == '4215' || t18 == '4251' || t18 == '4512' || t18 == '4521' || t18 == '5124' || t18 == '5142' || t18 == '5214' ||t18 == '5241' || t18 == '5412' || t18 == '5421') {
		res += 1;
		document.getElementById('result18').textContent = 'Верно';
		document.getElementById('result18').style.color = '#44dd44';
	}

	document.getElementById('rightAns18').style.display = 'inline';
	document.getElementById('result18').style.display = 'inline';

	if (t19 == '23' || t19 == '32') {
		res += 1;
		document.getElementById('result19').textContent = 'Верно';
		document.getElementById('result19').style.color = '#44dd44';
	}

	document.getElementById('rightAns19').style.display = 'inline';
	document.getElementById('result19').style.display = 'inline';

	if (t20 == '1345' || t20 == '1354' || t20 == '1435' || t20 == '1453' || t20 == '1534' || t20 == '1543' || t20 == '3145' || t20 == '3154' || t20 == '3415' || t20 == '3451' || t20 == '3514' || t20 == '3541' || t20 == '4135' || t20 == '4153' || t20 == '4315' || t20 == '4351' || t20 == '4513' || t20 == '4531' || t20 == '5134' || t20 == '5143' || t20 == '5314' ||t20 == '5341' || t20 == '5413' || t20 == '5431') {
		res += 1;
		document.getElementById('result20').textContent = 'Верно';
		document.getElementById('result20').style.color = '#44dd44';
	}

	document.getElementById('rightAns20').style.display = 'inline';
	document.getElementById('result20').style.display = 'inline';

	if (t21 == '295' || t21 == '259' || t21 == '925' || t21 == '952' || t21 == '529' || t21 == '592') {
		res += 1;
		document.getElementById('result21').textContent = 'Верно';
		document.getElementById('result21').style.color = '#44dd44';
	}

	document.getElementById('rightAns21').style.display = 'inline';
	document.getElementById('result21').style.display = 'inline';

	if (t22 == '75924') {
		res += 2;
		document.getElementById('result22').textContent = 'Верно';
		document.getElementById('result22').style.color = '#44dd44';
	}

	document.getElementById('rightAns22').style.display = 'inline';
	document.getElementById('result22').style.display = 'inline';

	if (t23 == '243' || t23 == '234' || t23 == '423' || t23 == '432' || t23 == '324' || t23 == '342') {
		res += 1;
		document.getElementById('result23').textContent = 'Верно';
		document.getElementById('result23').style.color = '#44dd44';
	}

	document.getElementById('rightAns23').style.display = 'inline';
	document.getElementById('result23').style.display = 'inline';

	if (t24 == '143' || t24 == '134' || t24 == '413' || t24 == '431' || t24 == '314' || t24 == '341') {
		res += 1;
		document.getElementById('result24').textContent = 'Верно';
		document.getElementById('result24').style.color = '#44dd44';
	}

	document.getElementById('rightAns24').style.display = 'inline';
	document.getElementById('result24').style.display = 'inline';

	if (t25 == 'вконцеконцов' || t25 == 'Вконцеконцов' || t25 == 'оставиливпокое' || t25 == 'Оставиливпокое' || t25 == 'можетбыть' || t25 == 'Можетбыть') {
		res += 1;
		document.getElementById('result25').textContent = 'Верно';
		document.getElementById('result25').style.color = '#44dd44';
	}

	document.getElementById('rightAns25').style.display = 'inline';
	document.getElementById('result25').style.display = 'inline';

	if (t26 == '35') {
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