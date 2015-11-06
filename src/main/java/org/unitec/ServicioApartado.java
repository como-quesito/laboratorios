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
public  class ServicioApartado {

    @Autowired
    MongoTemplate mongoTemplate;

    public void agregarApartado(Apartado x){
        if(!mongoTemplate.collectionExists(Apartado.class)){
            mongoTemplate.createCollection(Apartado.class);
        }
        mongoTemplate.insert(x);
    }

    public void borrarColeccion(){
        mongoTemplate.dropCollection(Apartado.class);
    }

    public List<Apartado> obtenerTodos(){
        List<Apartado> xxx=new ArrayList<>();
        xxx=mongoTemplate.findAll(Apartado.class);
        return xxx;
    }

    public Apartado obtenerPorPassword(String password){
        Apartado x= mongoTemplate.findOne(new Query(Criteria.where("password").is(password)), Apartado.class);
        return x;
    }

    public Apartado obtenerPorLogin(String login){
        Apartado incidencia=null;
        /*
        Apartado incidencia= mongoTemplate.findOne(new Query(Criteria.where("login").is(login)), Apartado.class);
        System.out.println("CANSADO"+Apartado.getAutoridad());
        */
        return incidencia;
    }

    public void borrarPorId(Integer id){
        mongoTemplate.remove(new Query(Criteria.where("_id").is(id)), Apartado.class);
    }



}
