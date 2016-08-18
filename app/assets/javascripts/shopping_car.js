$(document).ready(function(){

  //-------------------------------Definimos una lista de compras
    var CarritoDeCompras = function(){
      this.listaDeCompras = [];
    };
   //-------------------------------Guardar los productos seleccionados en una lista de compras
    CarritoDeCompras.prototype.agregarAlCarrito = function(producto){
      this.listaDeCompras.push(producto);
    };
  
  $("#comprar").click(function(){

      

  });
 


 //-------------------------------Quitamos un producto definido de nuestra lista de compras  
  CarritoDeCompras.prototype.quitarDelCarrito = function(nombreDelProducto){
    if(this.listaDeCompras !== undefined){
      for (var i = this.listaDeCompras.length-1; i >= 0; i--){
        if(this.listaDeCompras[i].nombre === nombreDelProducto){
          this.listaDeCompras.splice(i,1);
        }else{
          alert("Este producto no lo has agregado");
        }
      };  
    }else{
      alert("No hay productos en tu lista de compras");
    };    
  };
 // --------------------------------------Buscador
  var Tienda = function(){
    this.inventario=[];
  };
  Tienda.prototype.agregarAMiBodega = function(producto){
    this.inventario.push(producto);
  }
  // ------------------------------------Funcion Buscar
  Tienda.prototype.buscar=function(entradaDeTexto){
      for (var i = this.inventario.length-1; i >= 0; i--){
        if(this.inventario[i].nombre === entradaDeTexto){
          alert(this.inventario[i].nombre+" "+"$ "+this.inventario[i].precio);
        }else{
          $("#noSeEncuentraProducto").show();
          break;
        }
      };    
  };