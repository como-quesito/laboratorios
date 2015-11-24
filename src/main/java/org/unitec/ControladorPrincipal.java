package org.unitec;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by campitos on 6/11/15.
 */
@Controller
@RequestMapping("/")
public class ControladorPrincipal {

    @RequestMapping("/")
    public String  inicio(){
        return "inicio.html";
    }

    @CrossOrigin
    @RequestMapping(value="/test", method= RequestMethod.GET, headers={"Accept=text/html"})
    @ResponseBody
    String hola(){

        return "Hola mundo desde Cross origin";
    }
}
