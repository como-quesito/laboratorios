package org.unitec;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
}
