import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;
import lombok.Data;

@Named
@RequestScoped // changed this string
@Data
public class DataAction implements Serializable{
    Connection conn = null;
    Statement statement = null;
    ResultSet rs;
    private List<Model> models = getAllModels();

    public List<Model> getAllModels(){
        List<Model> tableData = new ArrayList<Model>();


        try{
            conn =getConnection();
            statement = conn.createStatement();
            rs = statement.executeQuery("SELECT * FROM model1");

            while (rs.next()) {
                Model model = new Model();
                model.setX(rs.getDouble("x"));
                model.setY(rs.getDouble("y"));
                model.setR(rs.getInt("r"));
                model.setValid(rs.getBoolean("valid"));
                tableData.add(model);        
            }
        } catch(SQLException e) {
            e.getMessage();
        }

        return tableData;
    }

    public void delete() throws SQLException{
        conn = getConnection();
        
        try{
            statement = conn.createStatement();
            statement.executeQuery("DELETE FROM model1");
            this.models = getAllModels();
        } catch(SQLException e){
            e.getMessage();
        } finally{
            conn.close();
            statement.close();
        }https://github.com/bakhilin/jsf-web-app.git

    }

    public Connection getConnection(){
        // вообще это плохо так делать, но нет времени..простите меня
        String url = "jdbc:postgresql://localhost/lab3";
        String user = "root";
        String password = "sPii*9212";
       
        try{
            conn = DriverManager.getConnection(url,user, password);}

        catch(SQLException e) {
            e.getMessage();
        }

        return conn;
    }
}
