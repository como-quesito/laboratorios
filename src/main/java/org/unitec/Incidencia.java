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
