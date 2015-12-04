package org.unitec;

import org.joda.time.DateTime;
import org.springframework.data.annotation.Id;

/**
 * Created by campitos on 6/11/15.
 */
public class Apartado {
    @Id
    String id;
    String salon;
    DateTime fecha;

    public Apartado() {
    }

    public DateTime getFecha() {
        return fecha;
    }

    public void setFecha(DateTime fecha) {
        this.fecha = fecha;
    }

    public String getSalon() {
        return salon;
    }

    public void setSalon(String salon) {
        this.salon = salon;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
