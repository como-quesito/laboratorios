package org.unitec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by campitos on 29/11/15.
 */

@Controller
@RequestMapping("/")
public class ControladorIncidencias {
    @Autowired
    ServicioApartado apartado;

    @RequestMapping(value="/incidencias/{valor}", method= RequestMethod.POST,headers={"Accept=text/html"} )
    @ResponseBody
    String guardar(@PathVariable String valor)throws Exception{
        System.out.println("<<<<< SE activo guardar incidencia con valor:"+valor);
        Apartado a=new Apartado();
        a.setSalon("t-201");
       apartado.agregarApartado(a);
        return "Inciencia guardada con éxito";

    }
}
