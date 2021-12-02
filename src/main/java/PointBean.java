
import org.primefaces.event.SlideEndEvent;

import javax.annotation.ManagedBean;
import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;
import javax.validation.constraints.Null;
import java.io.Serializable;
import java.util.*;

@Named
@ApplicationScoped
//@PostConstruct
public class PointBean implements Serializable {
    private static final long serialVersionUID = 123456789;
    private Double x;
    private Double y;
    private Double r;

    private List<ResultPoint> points;
    //private List<db.PointEntry> points;
   // private List<db.Test> tests;
    private DatabaseHelper helper;


    public PointBean(){
        helper = new DatabaseHelper();
        //tests = helper.getAll();
       points = helper.getAll();
    }

    public void addPoint(){

        print();

        //db.Test test = new db.Test(x, y, r, new Date().toString());
   //    db.PointEntry point = new db.PointEntry(x, y, r, new Date().toString(), false);
     //   point.setHit(point.checkHit());
        ResultPoint point = new ResultPoint(x, y, r, new Date().toString());
        points.add(0, point);
       // tests.add(0, test);
        helper.save(point);
    //    helper.save(test);
       // System.out.println(points);
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

//    public List<db.Test> getPoints() {
//        return tests;
//    }
//
//    public void setPoints(List<db.Test> points) {
//        this.tests = tests;
//    }
public List<ResultPoint> getPoints() {
    return points;
}

    public void setPoints(List<ResultPoint> points) {
        this.points = points;
    }

    public void onSlideEnd(SlideEndEvent event) {
        this.r = event.getValue();//Double.parseDouble(event.getValue());
    }

    public void print(){
        System.out.println(getX());
        System.out.println(getY());
        System.out.println(getR());
    }
}
