package org.unitec;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
/**
 * Created by campitos on 29/11/15.
 */
@Controller
@RequestMapping("/")
public class ControladorIncidencias {
    @Autowired
    ServicioIncidencia servicio;

    @RequestMapping(value="/incidencia", method= RequestMethod.POST,headers={"Accept=application/json"} )
    @ResponseBody
    String guardar(@RequestBody String json)throws Exception {

        //Creamos un objeto
          ObjectMapper maper=new ObjectMapper();
      Incidencia incidencia=maper.readValue(json, Incidencia.class);
        System.out.println("<<<<< SE activo guardar incidencia con"+json);
        System.out.println("Repote de cometida");
      for(IncidenciaAlumno inci:  incidencia.getIncidenciasAlumnos()){
              if(  inci.isCometida()){
              System.out.println(inci.getNombre());
          }
      }
       //servicio.agregarIncidencia(incidencia);

        //Creamos un mensajito para retransmitirlo al cliente
        Mensaje mensa=new Mensaje();
        mensa.setTitulo("Se guardó esta incidencia");
        mensa.setStatus(true);

        return maper.writeValueAsString(mensa);
    }
    @RequestMapping(value="/incidencia", method= RequestMethod.GET,headers={"Accept=application/json"})
    @ResponseBody
    String buscartodos()throws Exception {

        ObjectMapper maper=new ObjectMapper();
        return maper.writeValueAsString(servicio.obtenerTodos());
    }

}
