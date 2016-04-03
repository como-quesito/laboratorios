package org.unitec;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.poi.ss.usermodel.*;
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.Date;

/**
 * Created by campitos on 29/11/15.
 */

@Controller
@RequestMapping("/")
public class ControladorApartados {
    @RequestMapping(value="/apartado/{fecha}", method= RequestMethod.POST, headers={"Accept=text/html"})
    @ResponseBody String guardar(@PathVariable String fecha)throws Exception{

        //DateTimeFormatter formatter = DateTimeFormat.forPattern("ddd MMM dd yyyy HH:mm:ss");
       // DateTime dt = formatter.parseDateTime(fecha);
Date date=new Date(fecha);
        DateTime date2=new DateTime(date);

        return "La fecha es "+date2.getDayOfMonth();
    }

    @RequestMapping(value="/apartado/{clave}", method= RequestMethod.GET, headers={"Accept=text/html"})
    @ResponseBody String actualizar(@PathVariable String clave)throws Exception{
        InputStream inp = new FileInputStream("C:\\Users\\Elizabeth\\Documents\\prueba.xlsx");
        //InputStream inp = new FileInputStream("workbook.xlsx");

        //InputStream inp = new FileInputStream("workbook.xlsx");

        Workbook wb = WorkbookFactory.create(inp);
        Sheet sheet = wb.getSheetAt(0);
        Row row = sheet.getRow(1);
        Cell cell = row.getCell(1);
        if (cell == null)cell = row.createCell(2);
        cell.setCellType(Cell.CELL_TYPE_NUMERIC);
        cell.setCellValue(clave);

        //
        FileOutputStream fileOut = new FileOutputStream("C:\\Users\\Elizabeth\\Documents\\prueba.xlsx");
        wb.write(fileOut);
        fileOut.close();


        return "La  clave se actualizo a ;"+clave;
    }



}
