# practica6Opcional
Esta practica opcional tiene como objetivo profundizar los conocimientos en GraphQL. Para ello se pide lo siguiente
Modelo de datos
Cliente:
name: obligatorio
email: obligatorio
cards: array de tarjetas (sin coleccion de mongo) 
number: obligatorio
cvv: obligatorio
expirity: obligatorio
money: minimo 0
orders: Array de pedidos
Restaurante:
name :obligatorio
address: obligatorio
cif: obligatorio
productos: Array de nombres de los productos
Repartidor:
username: obligatorio, unico
orders: Array de pedidos
Pedido:
id_client
id_restaurante
id_repartidor
products: Array de nombres de productos
price
status: pendiendo o terminado
La API debe permitir:
Crear/eliminar/actualizar clientes
Crear/eliminar/actualizar restaurantes
Crear/eliminar/actualizar repartidores
Crear pedidos
Terminar pedidos
Listar todas las colecciones
Debe permitir el encadenamiento de Query, es decir. Porder imprimir todos los datos de un cliente al mostrar un pedido
Terminar un pedido
