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

        InputStream inp = new FileInputStream("/home/campitos/Dropbox/prueba.xlsx");
        //InputStream inp = new FileInputStream("workbook.xlsx");

        //InputStream inp = new FileInputStream("workbook.xlsx");

        Workbook wb = WorkbookFactory.create(inp);
        Sheet sheet = wb.getSheetAt(0);
        Row row = sheet.getRow(1);
        Cell cell = row.getCell(2);
        if (cell == null)
            cell = row.createCell(3);
        cell.setCellType(Cell.CELL_TYPE_STRING);
        cell.setCellValue("pruebita");

        //
        FileOutputStream fileOut = new FileOutputStream("/home/campitos/Dropbox/prueba.xlsx");
        wb.write(fileOut);
        fileOut.close();



    }
}
