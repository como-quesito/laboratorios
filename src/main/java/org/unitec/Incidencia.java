package org.unitec;

import org.joda.time.DateTime;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * Created by campitos on 6/11/15.
 */
public class Incidencia {
    @Id
    String Id;
    String sala;
    String reporta;
    Integer semana;
    Date fecha;
    String horario;
    String nupc;
    String coal;
    String copr;
    String obge;
    String profe;

    public String getProfe() {
        return profe;
    }

    public void setProfe(String profe) {
        this.profe = profe;
    }

    public String getObge() {
        return obge;
    }

    public void setObge(String obge) {
        this.obge = obge;
    }

    public String getCopr() {
        return copr;
    }

    public void setCopr(String copr) {
        this.copr = copr;
    }

    public String getCoal() {
        return coal;
    }

    public void setCoal(String coal) {
        this.coal = coal;
    }

    public String getNupc() {
        return nupc;
    }

    public void setNupc(String nupc) {
        this.nupc = nupc;
    }

    public Integer getSemana() {
        return semana;
    }

    public void setSemana(Integer semana) {
        this.semana = semana;
    }


    @Override
    public String toString() {
        return "Incidencia{" +
                "Id='" + Id + '\'' +
                ", sala='" + sala + '\'' +
                ", reporta='" + reporta + '\'' +
                ", semana=" + semana +
                ", fecha=" + fecha +
                ", horario='" + horario + '\'' +
                ", nupc='" + nupc + '\'' +
                ", coal='" + coal + '\'' +
                ", copr='" + copr + '\'' +
                ", obge='" + obge + '\'' +
                ", profe='" + profe + '\'' +
                '}';
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }




    public String getReporta() {  return reporta;  }

    public void setReporta(String reporta) {
        this.reporta = reporta;
    }

    public String getSala() {
        return sala;
    }



    public String getId() {
        return Id;
    }

    public void setSala(String sala) {  this.sala = sala; }

    public void setId(String id) {
        Id = id;
    }




}
