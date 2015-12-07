package org.unitec;

import org.joda.time.DateTime;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * Created by campitos on 6/11/15.
 */
public class Apartado {
    @Id
    String id;
    String salon;
    Date fecha;

    @Override
    public String toString() {
        return "Apartado{" +
                "id='" + id + '\'' +
                ", salon='" + salon + '\'' +
                ", fecha=" + fecha +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSalon() {
        return salon;
    }

    public void setSalon(String salon) {
        this.salon = salon;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}