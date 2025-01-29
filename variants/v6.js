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

	if (t1 == 'всей' || t1 == 'Всей') {
		res += 1;
		document.getElementById('result1').textContent = 'Верно';
		document.getElementById('result1').style.color = '#44dd44';
	}

	document.getElementById('rightAns1').style.display = 'inline';
	document.getElementById('result1').style.display = 'inline';

	if (t2 == '35' || t2 == '53') {
		res += 1;
		document.getElementById('result2').textContent = 'Верно';
		document.getElementById('result2').style.color = '#44dd44';
	}

	document.getElementById('rightAns2').style.display = 'inline';
	document.getElementById('result2').style.display = 'inline';

	if (t3 == '134' || t3 == '143' || t3 == '314' || t3 == '341' || t3 == '413' || t3 == '431') {
		res += 1;
		document.getElementById('result3').textContent = 'Верно';
		document.getElementById('result3').style.color = '#44dd44';
	}

	document.getElementById('rightAns3').style.display = 'inline';
	document.getElementById('result3').style.display = 'inline';

	if (t4 == '135' || t4 == '153' || t4 == '315' || t4 == '351' || t4 == '513' || t4 == '531') {
		res += 1;
		document.getElementById('result4').textContent = 'Верно';
		document.getElementById('result4').style.color = '#44dd44';
	}

	document.getElementById('rightAns4').style.display = 'inline';
	document.getElementById('result4').style.display = 'inline';

	if (t5 == 'охвачен' || t5 == 'Охвачен') {
		res += 1;
		document.getElementById('result5').textContent = 'Верно';
		document.getElementById('result5').style.color = '#44dd44';
	}

	document.getElementById('rightAns5').style.display = 'inline';
	document.getElementById('result5').style.display = 'inline';

	if (t6 == 'внимание' || t6 == 'Внимание' || t6 == 'придавать' || t6 == 'Придавать') {
		res += 1;
		document.getElementById('result6').textContent = 'Верно';
		document.getElementById('result6').style.color = '#44dd44';
	}

	document.getElementById('rightAns6').style.display = 'inline';
	document.getElementById('result6').style.display = 'inline';

	if (t7 == 'селений' || t7 == 'Селений') {
		res += 1;
		document.getElementById('result7').textContent = 'Верно';
		document.getElementById('result7').style.color = '#44dd44';
	}

	document.getElementById('rightAns7').style.display = 'inline';
	document.getElementById('result7').style.display = 'inline';

	if (t8 == '56193') {
		res += 2;
		document.getElementById('result8').textContent = 'Верно';
		document.getElementById('result8').style.color = '#44dd44';
	}

	document.getElementById('rightAns8').style.display = 'inline';
	document.getElementById('result8').style.display = 'inline';

	if (t9 == '15' || t9 == '51') {
		res += 1;
		document.getElementById('result9').textContent = 'Верно';
		document.getElementById('result9').style.color = '#44dd44';
	}

	document.getElementById('rightAns9').style.display = 'inline';
	document.getElementById('result9').style.display = 'inline';

	if (t10 == '24' || t10 == '42') {
		res += 1;
		document.getElementById('result10').textContent = 'Верно';
		document.getElementById('result10').style.color = '#44dd44';
	}

	document.getElementById('rightAns10').style.display = 'inline';
	document.getElementById('result10').style.display = 'inline';

	if (t11 == '15' || t11 == '51') {
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

	if (t13 == '45' || t13 == '54') {
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

	if (t15 == '123' || t15 == '132' || t15 == '213' || t15 == '231' || t15 == '312' || t15 == '321') {
		res += 1;
		document.getElementById('result15').textContent = 'Верно';
		document.getElementById('result15').style.color = '#44dd44';
	}

	document.getElementById('rightAns15').style.display = 'inline';
	document.getElementById('result15').style.display = 'inline';

	if (t16 == '13' || t16 == '31') {
		res += 1;
		document.getElementById('result16').textContent = 'Верно';
		document.getElementById('result16').style.color = '#44dd44';
	}

	document.getElementById('rightAns16').style.display = 'inline';
	document.getElementById('result16').style.display = 'inline';

	if (t17 == '1') {
		res += 1;
		document.getElementById('result17').textContent = 'Верно';
		document.getElementById('result17').style.color = '#44dd44';
	}

	document.getElementById('rightAns17').style.display = 'inline';
	document.getElementById('result17').style.display = 'inline';

	if (t18.length == 4) {
		res += 1;
		document.getElementById('result18').textContent = 'Верно';
		document.getElementById('result18').style.color = '#44dd44';
	}

	document.getElementById('rightAns18').style.display = 'inline';
	document.getElementById('result18').style.display = 'inline';

	if (t19 == '135' || t19 == '153' || t19 == '315' || t19 == '351' || t19 == '513' || t19 == '531') {
		res += 1;
		document.getElementById('result19').textContent = 'Верно';
		document.getElementById('result19').style.color = '#44dd44';
	}

	document.getElementById('rightAns19').style.display = 'inline';
	document.getElementById('result19').style.display = 'inline';

	if (t20 == '345' || t20 == '354' || t20 == '435' || t20 == '453' || t20 == '534' || t20 == '543') {
		res += 1;
		document.getElementById('result20').textContent = 'Верно';
		document.getElementById('result20').style.color = '#44dd44';
	}

	document.getElementById('rightAns20').style.display = 'inline';
	document.getElementById('result20').style.display = 'inline';

	if (t21 == '194' || t21 == '149' || t21 == '914' || t21 == '941' || t21 == '419' || t21 == '491') {
		res += 1;
		document.getElementById('result21').textContent = 'Верно';
		document.getElementById('result21').style.color = '#44dd44';
	}

	document.getElementById('rightAns21').style.display = 'inline';
	document.getElementById('result21').style.display = 'inline';

	if (t22 == '95467') {
		res += 2;
		document.getElementById('result22').textContent = 'Верно';
		document.getElementById('result22').style.color = '#44dd44';
	}

	document.getElementById('rightAns22').style.display = 'inline';
	document.getElementById('result22').style.display = 'inline';

	if (t23 == '24' || t23 == '42') {
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

	if (t25 == 'доглубиныдуши' || t25 == 'Доглубиныдуши') {
		res += 1;
		document.getElementById('result25').textContent = 'Верно';
		document.getElementById('result25').style.color = '#44dd44';
	}

	document.getElementById('rightAns25').style.display = 'inline';
	document.getElementById('result25').style.display = 'inline';

	if (t26 == '31') {
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