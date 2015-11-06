package org.unitec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by campitos on 2/09/15.
 */

@Component
public  class ServicioIncidencia {

    @Autowired
    MongoTemplate mongoTemplate;

            public void agregarIncidencia(Incidencia x){
                if(!mongoTemplate.collectionExists(Incidencia.class)){
                    mongoTemplate.createCollection(Incidencia.class);
                }
                mongoTemplate.insert(x);
            }

    public void borrarColeccion(){
        mongoTemplate.dropCollection(Incidencia.class);
    }

    public List<Incidencia> obtenerTodos(){
        List<Incidencia> xxx=new ArrayList<>();
        xxx=mongoTemplate.findAll(Incidencia.class);
        return xxx;
    }

    public Incidencia obtenerPorPassword(String password){
    Incidencia x= mongoTemplate.findOne(new Query(Criteria.where("password").is(password)), Incidencia.class);
        return x;
    }

    public Incidencia obtenerPorLogin(String login){
        Incidencia incidencia=null;
        /*
        Incidencia incidencia= mongoTemplate.findOne(new Query(Criteria.where("login").is(login)), Incidencia.class);
        System.out.println("CANSADO"+Incidencia.getAutoridad());
        */
        return incidencia;
    }

    public void borrarPorId(Integer id){
        mongoTemplate.remove(new Query(Criteria.where("_id").is(id)), Incidencia.class);
    }



}
