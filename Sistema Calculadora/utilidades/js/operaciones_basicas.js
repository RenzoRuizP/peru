

function calcular()
		{
		//	document.f1.num3 = document.f1.num1 + document.f1.num2;
		var n1;
		var n2;
		var res;
		var mensaje1 = "El valor de la caja 1 es de tipo cadena";
		var mensaje2 = "El valor de la caja 2 es de tipo cadena";
		var mensaje3 = "Los valores de las caja son de tipo cadena";
		var select;

			n1 = Number(document.getElementById('num1').value);
			n2 = Number(document.getElementById('num2').value);
			select = document.getElementById('op').value;

				
		if(select == '-')
		{
			res= n1 - n2;
		}else
			if(select == '+')
			{
				res= n1 + n2;	
			}else
				if(select == '*')
				{
					res= n1 * n2;
				}else
					if(select == '/')
					{
						res= n1 / n2;
					}	

			if (!isNaN(n1)) // si n1 es diferente de NaN
			 	if(!isNaN(n2))
			 		document.getElementById('res').value = res;	
			 	else
			 		document.getElementById('res').value = mensaje2;	
			else
			 	document.getElementById('res').value = mensaje1;	
		 	if((isNaN(n1)) && (isNaN(n2)))
			 	document.getElementById('res').value = mensaje3;

	

		var saludar = function(nombre, callBack)
		{
		var saludo = "Hola", nombre;
	};
		callBack(saludo);
		};
		saludar("Renzo", function(Saludo)
		{
				alert(saludo);
		});

		
