package org.unitec;

import org.springframework.data.annotation.Id;

/**
 * Created by campitos on 6/11/15.
 */
public class Apartado {
    @Id
    String id;
    String salon;

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
