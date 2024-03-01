
import java.io.Serializable;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;
import lombok.Data;

@Named
@RequestScoped
@Data
public class Model  implements Serializable{
    private double x;
    private double y;
    private boolean valid = false;
    private int r;
    private List<Model> models;


    public boolean setValidResult(double x, double y, int r){
        int min_rad = r * (-1);
        if(x > 0 && y < 0 && y >= min_rad) {
            if(x <= r){
                return true;
            }
            return false;
        }

        if(x <= 0 && y <= 0 && y >= min_rad) {
            if(x >= min_rad) {
                return true;
            }
    
            return false;
        }
        
        if(x <= 0 && y >= 0 && x >= min_rad && y <= r) {
            return true;
        }  

        return false;
    }


    public String add() {
        Connection conn = null;   
        String url = "jdbc:postgresql://localhost/lab3";
        String user = "root";
        String password = "sPii*9212";                    
        try{
            if (r!=0) {
                conn = DriverManager.getConnection(url, user, password);
                System.out.println("Connection completed."+ conn.getClass().getSimpleName());
                PreparedStatement ps = null;
                String sql = "INSERT INTO model1( x, y, valid, r) VALUES(?,?,?, ?)";
                ps = conn.prepareStatement(sql); 
                ps.setDouble(1, x);
                ps.setDouble(2, y);

                // check point x y and set valid result
                setValid(setValidResult(x,y,r));
                

                ps.setBoolean(3, valid);
                ps.setInt(4, r);

                ps.execute();
                System.out.println("Data Added Successfully");
                conn.close();
                ps.close();       
            }        
        }catch(SQLException ex){
            System.out.println(ex.getMessage());
        }
        
        return "output";
    }
}
    

