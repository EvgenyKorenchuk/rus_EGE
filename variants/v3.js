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

	if (t1 == 'его' || t1 == 'Его' || t1 == 'её' || t1 == 'Её' || t1 == 'ее' || t1 == 'Ее') {
		res += 1;
		document.getElementById('result1').textContent = 'Верно';
		document.getElementById('result1').style.color = '#44dd44';
	}

	document.getElementById('rightAns1').style.display = 'inline';
	document.getElementById('result1').style.display = 'inline';

	if (t2 == '134' || t2 == '143' || t2 == '314' || t2 == '341' || t2 == '413' || t2 == '431') {
		res += 1;
		document.getElementById('result2').textContent = 'Верно';
		document.getElementById('result2').style.color = '#44dd44';
	}

	document.getElementById('rightAns2').style.display = 'inline';
	document.getElementById('result2').style.display = 'inline';

	if (t3 == '125' || t3 == '152' || t3 == '215' || t3 == '251' || t3 == '512' || t3 == '521') {
		res += 1;
		document.getElementById('result3').textContent = 'Верно';
		document.getElementById('result3').style.color = '#44dd44';
	}

	document.getElementById('rightAns3').style.display = 'inline';
	document.getElementById('result3').style.display = 'inline';

	if (t4 == '134' || t4 == '143' || t4 == '314' || t4 == '341' || t4 == '413' || t4 == '431') {
		res += 1;
		document.getElementById('result4').textContent = 'Верно';
		document.getElementById('result4').style.color = '#44dd44';
	}

	document.getElementById('rightAns4').style.display = 'inline';
	document.getElementById('result4').style.display = 'inline';

	if (t5 == 'болотистую' || t5 == 'Болотистую' || t5 == 'болотистый' || t5 == 'Болотистый') {
		res += 1;
		document.getElementById('result5').textContent = 'Верно';
		document.getElementById('result5').style.color = '#44dd44';
	}

	document.getElementById('rightAns5').style.display = 'inline';
	document.getElementById('result5').style.display = 'inline';

	if (t6 == 'памятные' || t6 == 'Памятные') {
		res += 1;
		document.getElementById('result6').textContent = 'Верно';
		document.getElementById('result6').style.color = '#44dd44';
	}

	document.getElementById('rightAns6').style.display = 'inline';
	document.getElementById('result6').style.display = 'inline';

	if (t7 == 'сапог' || t7 == 'Сапог') {
		res += 1;
		document.getElementById('result7').textContent = 'Верно';
		document.getElementById('result7').style.color = '#44dd44';
	}

	document.getElementById('rightAns7').style.display = 'inline';
	document.getElementById('result7').style.display = 'inline';

	if (t8 == '92754') {
		res += 2;
		document.getElementById('result8').textContent = 'Верно';
		document.getElementById('result8').style.color = '#44dd44';
	}

	document.getElementById('rightAns8').style.display = 'inline';
	document.getElementById('result8').style.display = 'inline';

	if (t9 == '145' || t9 == '154' || t9 == '415' || t9 == '451' || t9 == '514' || t9 == '541') {
		res += 1;
		document.getElementById('result9').textContent = 'Верно';
		document.getElementById('result9').style.color = '#44dd44';
	}

	document.getElementById('rightAns9').style.display = 'inline';
	document.getElementById('result9').style.display = 'inline';

	if (t10 == '245' || t10 == '254' || t10 == '425' || t10 == '452' || t10 == '524' || t10 == '542') {
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

	if (t12 == '134' || t12 == '143' || t12 == '314' || t12 == '341' || t12 == '413' || t12 == '431') {
		res += 1;
		document.getElementById('result12').textContent = 'Верно';
		document.getElementById('result12').style.color = '#44dd44';
	}

	document.getElementById('rightAns12').style.display = 'inline';
	document.getElementById('result12').style.display = 'inline';

	if (t13 == '15' || t13 == '51') {
		res += 1;
		document.getElementById('result13').textContent = 'Верно';
		document.getElementById('result13').style.color = '#44dd44';
	}

	document.getElementById('rightAns13').style.display = 'inline';
	document.getElementById('result13').style.display = 'inline';

	if (t14 == '25' || t14 == '52') {
		res += 1;
		document.getElementById('result14').textContent = 'Верно';
		document.getElementById('result14').style.color = '#44dd44';
	}

	document.getElementById('rightAns14').style.display = 'inline';
	document.getElementById('result14').style.display = 'inline';

	if (t15 == '1246' || t15 == '1264' || t15 == '1426' || t15 == '1462' || t15 == '1624' || t15 == '1642' || t15 == '2146' || t15 == '2164' || t15 == '2416' || t15 == '2461' || t15 == '2614' || t15 == '2641' || t15 == '4126' || t15 == '4162' || t15 == '4216' || t15 == '4261' || t15 == '4612' || t15 == '4621' || t15 == '6124' || t15 == '6142' || t15 == '6214' ||t15 == '6241' || t15 == '6412' || t15 == '6421') {
		res += 1;
		document.getElementById('result15').textContent = 'Верно';
		document.getElementById('result15').style.color = '#44dd44';
	}

	document.getElementById('rightAns15').style.display = 'inline';
	document.getElementById('result15').style.display = 'inline';

	if (t16 == '14' || t16 == '41') {
		res += 1;
		document.getElementById('result16').textContent = 'Верно';
		document.getElementById('result16').style.color = '#44dd44';
	}

	document.getElementById('rightAns16').style.display = 'inline';
	document.getElementById('result16').style.display = 'inline';

	if (t17 == '124' || t17 == '142' || t17 == '214' || t17 == '241' || t17 == '412' || t17 == '421') {
		res += 1;
		document.getElementById('result17').textContent = 'Верно';
		document.getElementById('result17').style.color = '#44dd44';
	}

	document.getElementById('rightAns17').style.display = 'inline';
	document.getElementById('result17').style.display = 'inline';

	if (t18 == '68' || t18 == '86') {
		res += 1;
		document.getElementById('result18').textContent = 'Верно';
		document.getElementById('result18').style.color = '#44dd44';
	}

	document.getElementById('rightAns18').style.display = 'inline';
	document.getElementById('result18').style.display = 'inline';

	if (t19 == '15' || t19 == '51') {
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

	if (t21 == '46' || t21 == '64') {
		res += 1;
		document.getElementById('result21').textContent = 'Верно';
		document.getElementById('result21').style.color = '#44dd44';
	}

	document.getElementById('rightAns21').style.display = 'inline';
	document.getElementById('result21').style.display = 'inline';

	if (t22 == '74839') {
		res += 2;
		document.getElementById('result22').textContent = 'Верно';
		document.getElementById('result22').style.color = '#44dd44';
	}

	document.getElementById('rightAns22').style.display = 'inline';
	document.getElementById('result22').style.display = 'inline';

	if (t23 == '125' || t23 == '152' || t23 == '215' || t23 == '251' || t23 == '512' || t23 == '521') {
		res += 1;
		document.getElementById('result23').textContent = 'Верно';
		document.getElementById('result23').style.color = '#44dd44';
	}

	document.getElementById('rightAns23').style.display = 'inline';
	document.getElementById('result23').style.display = 'inline';

	if (t24 == '125' || t24 == '152' || t24 == '215' || t24 == '251' || t24 == '512' || t24 == '521') {
		res += 1;
		document.getElementById('result24').textContent = 'Верно';
		document.getElementById('result24').style.color = '#44dd44';
	}

	document.getElementById('rightAns24').style.display = 'inline';
	document.getElementById('result24').style.display = 'inline';

	if (t25 == 'деланет' || t25 == 'Деланет' || t25 == 'нетдела' || t25 == 'Нетдела') {
		res += 1;
		document.getElementById('result25').textContent = 'Верно';
		document.getElementById('result25').style.color = '#44dd44';
	}

	document.getElementById('rightAns25').style.display = 'inline';
	document.getElementById('result25').style.display = 'inline';

	if (t26 == '15') {
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