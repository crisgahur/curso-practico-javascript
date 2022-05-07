# REF 1 

print("""
      BIENVENIDOS AL SISTEMA DE UBICACIÓN PARA ZONAS PÚBLICAS WIFI DE ICR CORP. 
      """
      )
  
 # REF 2
  
Nom_Usuario = int('60')
contraseña = int('06')
  
Nombre_Usuario = int(input("Ingrese el nombre de usuario: "))
  
if(Nombre_Usuario == Nom_Usuario):
  print("Usuario valido")
  
else:
  print("El usuario es invalido o ingrese nuevamente en mayúsculas")
print("\n")
if(Nombre_Usuario == Nom_Usuario):
  Digite_Contraseña = int(input("Digite su contraseña: "))

  if(Digite_Contraseña == contraseña):
    print("Contraseña correcta")
    
  else:
    print("Contraseña Incorrecta, intente nuevamente")
  print("\n")
  
  # REF 3 y 4

  if(Digite_Contraseña == contraseña):
    print("No soy un robot, complete el captcha")
    print("\n")
    CAPTCHA = eval(input("La suma de 6 + 0 es igual a: "))

    if(CAPTCHA == 6):
      print("\n")
      print("Sesion Iniciada")
    else:
      print("Numero captcha incorrecto")