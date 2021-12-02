import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;
import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "point_res")
public class ResultPoint implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "time")
    private String currentTime;
    @Column(name = "hit")
    private boolean isHit;

    public ResultPoint() {
    }

    public ResultPoint(double x, double y, double r, String currentTime){
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = currentTime;
        this.isHit = belongsS();
    }
    private boolean belongsRect(){
        return (x <= 0 && y <= 0) && (x >= -r/2 && y >= -r);
    }
    private boolean belongsTrian(){
        return (x <= 0 && y >= 0) && (y <= 2*x + r);
    }
    private boolean belongsSector(){
        return (x >= 0 && y <= 0) && (x*x + y*y <= r*r);
    }
    private boolean belongsS(){
        return belongsRect() || belongsTrian() || belongsSector();
    }


    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public boolean isHit() {
        return isHit;
    }

    public void setHit() {
        isHit = belongsS();
    }


}
