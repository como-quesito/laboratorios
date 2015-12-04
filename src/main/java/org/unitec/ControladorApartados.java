package org.unitec;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by campitos on 29/11/15.
 */

@Controller
@RequestMapping("/")
public class ControladorApartados {
    @RequestMapping(value="/apartado/{fecha}", method= RequestMethod.POST, headers={"Accept=text/html"})
    @ResponseBody String guardar(@PathVariable String fecha)throws Exception{

        //DateTimeFormatter formatter = DateTimeFormat.forPattern("ddd MMM dd yyyy HH:mm:ss");
       // DateTime dt = formatter.parseDateTime(fecha);
Date date=new Date(fecha);
        DateTime date2=new DateTime(date);

        return "La fecha es "+date2.getDayOfMonth();
    }
}
