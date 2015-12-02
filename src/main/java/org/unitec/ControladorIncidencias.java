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
    ServicioIncidencia servicio;

    @RequestMapping(value="/incidencias/{sala}", method= RequestMethod.POST,headers={"Accept=text/html"} )
    @ResponseBody
    String guardar(@PathVariable String sala)throws Exception {
        System.out.println("<<<<< SE activo guardar incidencia con sala:" + sala);
        Incidencia a = new Incidencia();
        a.setSala(sala);
        servicio.agregarIncidencia(a);
        return "Incidencia guardada con éxito";
    }

}