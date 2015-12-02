package org.unitec;

import org.springframework.data.annotation.Id;

/**
 * Created by campitos on 6/11/15.
 */
public class Incidencia {
    @Id
    String Id;
    String sala;


    public String getSala() {
        return sala;
    }


    public void setSala(String sala) {
        this.sala = sala;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }




}
