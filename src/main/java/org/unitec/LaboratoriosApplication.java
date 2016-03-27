package org.unitec;

import org.apache.poi.hssf.util.CellReference;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Locale;


import org.apache.poi.ss.usermodel.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
public class LaboratoriosApplication {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(LaboratoriosApplication.class, args);





    }
}
