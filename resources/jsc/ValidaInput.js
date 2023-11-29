 try
 {
    var sku = context.getVariable('qp_sku');
     if (sku.length != 10)
    {
     print("El sku mide" + sku.length);
     context.setVariable ("err_sku","El sku tiene una longitud incorrecta");
    }
 }
 catch(e)
 {
     print (e);
    context.setVariable ("err_sku","No se encontró Sku");
 }